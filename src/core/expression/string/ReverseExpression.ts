import { IExpression } from '../../types/IExpression';
import { Context } from '../../context/Context';

export class ReverseExpression implements IExpression {
    public interpret(context: Context): void {
        const value = context.stack.pop().split('').reverse().join('');
        context.stack.push(value);
    }

    public match(input: string): boolean {
        return input.toLowerCase() === 'rev';
    }
}
