import { IExpression } from '../../interface/IExpression';
import { Context } from '../../context/Context';

export class AbsoluteExpression implements IExpression {
    public interpret(context: Context): void {
        const num = parseInt(context.stack.pop());
        const result = Math.abs(num).toString();
        context.stack.push(result);
    }

    public match(input: string): boolean {
        return input.toLowerCase() === 'abs';
    }
}