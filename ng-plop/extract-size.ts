import * as fs from 'fs';
import {basename, join} from 'path';
import {exec} from 'child_process';
import {hrtime} from 'process';
import * as formatFileSize from 'prettysize';
import * as Table from 'tty-table';
import {red} from 'chalk';

// Files utilities
const readDir = (dir: string): Promise<string[]> => new Promise((resolve, reject) =>
  fs.readdir(dir, (error, data) => error ? reject(error) : resolve(data))
);

const lstat = (input: string): Promise<fs.Stats> => new Promise((resolve, reject) =>
  fs.lstat(input, (error, data) => error ? reject(error) : resolve(data))
);

// Size
interface FileSize {
  name: string;
  size: number;
}

const getSize = (file: string): Promise<FileSize> =>
  lstat(file)
    .then(stat => {
      const name = basename(file).split('.')[0];
      const size = stat.size;
      return {name, size}
    });

const dirSizes = (dir: string, filter: (elt: string) => boolean): Promise<FileSize[]> =>
  readDir(dir)
    .then(files => files.filter(file => file.endsWith('.js')))
    .then(files => files.filter(filter))
    .then(files => files.map(file => join(dir, file)).map(getSize))
    .then(promises => Promise.all(promises));

// Directory Result
interface SizeResult {
  bundlesSize: number;
  chunks: FileSize[];
}

const dirResult = (dir: string): Promise<SizeResult> => {
  const chunksPromise = dirSizes(dir, file => file.endsWith('.chunk.js'));
  const bundlesSize = dirSizes(dir, file => file.endsWith('.bundle.js'))
    .then(sizes => sizes.map(elt => elt.size).reduce((acc, elt) => acc + elt));

  return Promise.all([bundlesSize, chunksPromise])
    .then(([bs, cs]) => ({bundlesSize: bs, chunks: cs}));
};

// Run
const runCommand = (command: string): Promise<string> => {
  console.log(`Running '${command}' ...`);
  return new Promise((resolve, reject) => {
    const start = hrtime();
    return exec(command, (error) => {
      if (error) {
        console.error(`exec error: ${error}`);
        return reject(error);
      }
      const diff = hrtime(start);
      const time = `${diff[0]}.${Math.floor(diff[1] / 1e8)}s`;
      console.log(`Done in ${time}`);
      resolve(time);
    });
  });
};

// Process
interface Result {
  branch: string;
  command: string;
  time: string;
  result: SizeResult;
}

const processBranch = (dir: string, branch: string): Promise<Result[]> => {
  const toResult = (command: string) => runCommand(command)
    .then(time => dirResult(dir)
      .then(result => ({branch, command: command.split(';')[1], result, time} as Result)));

  return toResult(`git checkout ${branch}; ng build`)
    .then(result1 => toResult(`git checkout ${branch}; ng build -prod`)
      .then(result2 => [result1, result2]))
};
const process = (dir: string, branches: string[]): Promise<Result[]> =>
  branches.reduce(
    (promise, branch) => promise.then(array => processBranch(dir, branch).then(r => array.concat(r))),
    Promise.resolve([])
  );

// Formatting
const createTable = (results: Result[]) => {
  const formatter = value => {
    const size = typeof value === 'number' ? (value as number) : (value as FileSize).size;
    const base = formatFileSize(size);
    return base.endsWith('MB') ? red(base) : base;
  };
  const headerColor = 'magenta';
  const headers = [
    {value: 'Branch', headerColor, align: 'left'},
    {value: 'Command', headerColor, align: 'left'},
    {value: 'bundle', headerColor, formatter, align: 'right', width : 10 },
    {value: '0', headerColor, formatter, align: 'right', width : 10 },
    {value: '1', headerColor, formatter, align: 'right', width : 10 },
    {value: '2', headerColor, formatter, align: 'right', width : 10 },
    {value: 'Time', headerColor, align: 'right', width : 8 }
  ];
  const rows = results.map(({branch, command, result, time}) => [
    branch,
    command,
    result.bundlesSize,
    result.chunks.find(elt => elt.name === '0'),
    result.chunks.find(elt => elt.name === '1'),
    result.chunks.find(elt => elt.name === '2'),
    time
  ]);
  const options = {};
  return Table(headers, rows, options);
};

// ...
// process('dist', ['no_module', 'module_1_2_3', 'module_1_3', 'module_1_2'])
process('dist', ['no_module', 'module_1_2_3'])
  .then(createTable)
  .then(table => table.render())
  .then(t => console.log(t));

