import { IExpression } from '../../interface/IExpression';
import { Context } from '../../context/Context';

export class IndexExpression implements IExpression {
    public interpret(context: Context): void {
        const index = parseInt(context.stack.pop());
        const value = context.stack.pop()[index];
        context.stack.push(value);
    }

    public match(input: string): boolean {
        return input.toLowerCase() === 'idx';
    }
}
