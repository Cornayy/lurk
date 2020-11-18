import { IExpression } from '../../interface/IExpression';
import { Context } from '../../context/Context';

export class NewLineExpression implements IExpression {
    public interpret(context: Context): void {
        const value = context.stack.pop();
        context.stack.push(value.concat('\n'));
    }

    public match(input: string): boolean {
        return input.toLowerCase() === 'enl';
    }
}
