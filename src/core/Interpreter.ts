import { IExpressionData } from './types/IExpressionData';
import { Context } from './context/Context';

export class Interpreter {
    private readonly context: Context;
    private running: boolean;

    constructor() {
        this.context = new Context({ handler: () => (this.running = false) });
        this.running = true;
    }

    public interpret(expressions: IExpressionData[]): string {
        for (const { expression, input } of expressions) {
            expression.interpret(this.context, input);
        }

        const top = this.context.stack.peek();
        this.context.reset();

        return top;
    }

    public isRunning(): boolean {
        return this.running;
    }
}
