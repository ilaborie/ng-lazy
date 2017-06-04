import { execSync } from 'child_process';

console.log('-----------------------------------');
console.log('|         lazy parameter          |');
console.log('-----------------------------------');

const longComputationFunction = (): number => {
    // 😱 do not read the next line
    execSync('sleep 2');
    return 42;
};


enum Level {
    info = 1,
    debug = 0
}

class Logger {

    constructor(private level: Level = Level.info, private out: Console = console) {
    }

    info(message: string) {
        this.out.info(message);
    }

    debug(message: string) {
        if (this.level <= Level.debug)
            this.out.info(message);
    }
}

const logger = new Logger();

logger.info('Hello 🌍');
logger.info(`❓: ${longComputationFunction()}`);
logger.info('✅ Done');

console.log('-----------------------------------');
console.log('|         lazy attribute          |');
console.log('-----------------------------------');


type Supplier<T> = () => T;
class lazy<T> {
    private value: T | undefined = undefined;
    constructor(private supplier: Supplier<T>) { }

    get() {
        if(this.value === undefined) {
            this.value = this.supplier();
            this.supplier = null;
        }
        return this.value;
    }
}

var obj = {
    lazyValue : new lazy(longComputationFunction)
};

console.log('call 1');
console.log(obj.lazyValue.get());

console.log('call 2');
console.log(obj.lazyValue.get());

