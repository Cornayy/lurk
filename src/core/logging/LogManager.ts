import { DebugLogger } from './DebugLogger';
import { ILogger } from './../types/ILogger';

export class LogManager {
    private static readonly loggers: { [key: number]: ILogger } = {
        0: new DebugLogger(),
    };

    public static getLogger(debug: boolean): ILogger {
        const index = debug ? 0 : 1;
        return this.loggers[index];
    }
}
