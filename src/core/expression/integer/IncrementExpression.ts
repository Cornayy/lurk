import { IExpression } from '../../types/IExpression';
import { Context } from '../../context/Context';

export class IncrementExpression implements IExpression {
    public interpret(context: Context): void {
        let num = parseInt(context.stack.pop());
        const result = ++num;
        context.stack.push(result.toString());
    }

    public match(input: string): boolean {
        return input.toLowerCase() === 'inc';
    }
}
