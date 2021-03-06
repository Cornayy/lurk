import { IExpression } from '../../interface/IExpression';
import { Context } from '../../context/Context';

export class ConcatenationExpression implements IExpression {
    public interpret(context: Context): void {
        const first = context.stack.pop();
        const second = context.stack.pop();
        const result = second.concat(first);
        context.stack.push(result);
    }

    public match(input: string): boolean {
        return input.toLowerCase() === 'cat';
    }
}
