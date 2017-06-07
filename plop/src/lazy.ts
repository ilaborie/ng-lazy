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
        if (this.value === undefined) {
            this.value = this.supplier();
            this.supplier = null;
        }
        return this.value;
    }
}

class AnObject {
    lazyValue: lazy<number>;
    constructor(supplier: Supplier<number>) {
        this.lazyValue = new lazy(supplier);
    }
};

const obj = new AnObject(longComputationFunction);

console.log('call 1');
console.log(obj.lazyValue.get());

console.log('call 2');
console.log(obj.lazyValue.get());

console.log('-----------------------------------');
console.log('|        lazy attribute 2         |');
console.log('-----------------------------------');

class AnotherObject {
    private _lazyValue: number;
    get value(): number {
        if (this._lazyValue === undefined) {
            this._lazyValue = this.supplier();
            this.supplier = null;
        }
        return this._lazyValue;
    }

    constructor(private supplier: Supplier<number>) {
    }
};

const obj2 = new AnotherObject(longComputationFunction);

console.log('call 1');
console.log(obj2.value);

console.log('call 2');
console.log(obj2.value);