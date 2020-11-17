import { IExpression } from '../../types/IExpression';
import { Context } from '../../context/Context';

export class FunctionExpression implements IExpression {
    public interpret(context: Context): void {
        context.calls.push(`~${context.position}`);
        context.position = parseInt(context.stack.pop().substring(1));
    }

    public match(input: string): boolean {
        return input === 'fun';
    }
}
