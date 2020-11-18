import { ILogger } from '../interface/ILogger';

export class DebugLogger implements ILogger {
    public log(message: string): void {
        console.log(message);
    }
}
