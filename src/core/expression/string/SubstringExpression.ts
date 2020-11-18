import { IExpression } from '../../interface/IExpression';
import { Context } from '../../context/Context';

export class SubstringExpression implements IExpression {
    public interpret(context: Context): void {
        const to = parseInt(context.stack.pop());
        const from = parseInt(context.stack.pop());
        const value = context.stack.pop();
        context.stack.push(value.substr(from, to - from));
    }

    public match(input: string): boolean {
        return input.toLowerCase() === 'slc';
    }
}
