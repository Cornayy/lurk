import { IExpression } from '../../types/IExpression';
import { Context } from '../../context/Context';

export class LengthExpression implements IExpression {
    public interpret(context: Context): void {
        const value = context.stack.pop();
        context.stack.push(value.length.toString());
    }

    public match(input: string): boolean {
        return input.toLowerCase() === 'len';
    }
}
