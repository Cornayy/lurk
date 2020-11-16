import { IExpressionData } from './expression/IExpressionData';
import { Context } from './context/Context';

export class Interpreter {
    private readonly context: Context;
    private running: boolean;

    constructor() {
        this.context = new Context({ handler: () => (this.running = false) });
    }

    public interpret(expressions: IExpressionData[]): void {
        this.running = true;

        for (const { expression, input } of expressions) {
            expression.interpret(this.context, input);
        }
    }

    public isRunning(): boolean {
        return this.running;
    }
}
