import { IExpression } from '../../interface/IExpression';
import { Context } from '../../context/Context';

export class TextExpression implements IExpression {
    public interpret(context: Context, input: string): void {
        const value = input.substring(1);
        context.stack.push(value);
    }

    public match(input: string): boolean {
        return new RegExp('^\\\\.*$').test(input);
    }
}
