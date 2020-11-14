import { IListener } from './IListener';
import { Stack } from './Stack';

export class Context {
    public stack: Stack<string>;
    public calls: Stack<string>;
    public variables: Map<string, string>;
    public labels: Map<string, number>;

    constructor(private listener: IListener) {
        this.stack = new Stack<string>();
        this.calls = new Stack<string>();
        this.variables = new Map<string, string>();
        this.labels = new Map<string, number>();
    }

    public end(): void {
        this.listener.handler();
    }
}
