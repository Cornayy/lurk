import { IExpression } from '../../interface/IExpression';
import { Context } from '../../context/Context';

export class AddExpression implements IExpression {
    public interpret(context: Context): void {
        const first = parseInt(context.stack.pop());
        const second = parseInt(context.stack.pop());
        const result = first + second;
        context.stack.push(result.toString());
    }

    public match(input: string): boolean {
        return input.toLowerCase() === 'add';
    }
}