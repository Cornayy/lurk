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
        for (
            this.context.position = 0;
            this.context.position < expressions.length;
            this.context.position++
        ) {
            const { expression, input } = expressions[this.context.position];
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
