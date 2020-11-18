import { DebugLogger } from './DebugLogger';
import { ILogger } from '../interface/ILogger';

export class LogManager {
    private static readonly loggers: { [key: number]: ILogger } = {
        0: new DebugLogger(),
    };

    public static getLogger(): ILogger {
        const [first] = Object.values(this.loggers);
        return first;
    }
}
