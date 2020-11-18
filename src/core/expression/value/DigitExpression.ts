import { IExpression } from '../../interface/IExpression';
import { Context } from '../../context/Context';

export class DigitExpression implements IExpression {
    public interpret(context: Context, input: string): void {
        context.stack.push(input);
    }

    public match(input: string): boolean {
        return new RegExp('^\\d*$').test(input);
    }
}
