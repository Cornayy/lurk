import { IExpression } from '../../interface/IExpression';
import { Context } from '../../context/Context';

export class DuplicateExpression implements IExpression {
    public interpret(context: Context): void {
        const duplicate = context.stack.peek();
        context.stack.push(duplicate);
    }

    public match(input: string): boolean {
        return input.toLowerCase() === 'dup';
    }
}
