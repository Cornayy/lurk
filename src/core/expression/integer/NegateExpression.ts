import { IExpression } from '../../types/IExpression';
import { Context } from '../../context/Context';

export class NegateExpression implements IExpression {
    public interpret(context: Context): void {
        const num = parseInt(context.stack.pop());
        const result = -num;
        context.stack.push(result.toString());
    }

    public match(input: string): boolean {
        return input.toLowerCase() === 'neg';
    }
}
