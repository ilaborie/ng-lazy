import { execSync } from 'child_process';

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