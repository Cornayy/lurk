import { IExpression } from '../../types/IExpression';
import { Context } from '../../context/Context';

export class RotateExpression implements IExpression {
    public interpret(context: Context): void {
        const value = context.stack.pop();
    }

    public match(input: string): boolean {
        return input.toLowerCase() === 'rot';
    }
}
