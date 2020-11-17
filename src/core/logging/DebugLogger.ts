import { ILogger } from './../types/ILogger';

export class DebugLogger implements ILogger {
    public log(message: string): void {
        console.log(message);
    }
}
