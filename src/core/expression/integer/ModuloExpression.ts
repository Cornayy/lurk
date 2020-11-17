import { IExpression } from '../../types/IExpression';
import { Context } from '../../context/Context';

export class ModuloExpression implements IExpression {
    public interpret(context: Context): void {
        const first = parseInt(context.stack.pop());
        const second = parseInt(context.stack.pop());
        const result = second % first;
        context.stack.push(result.toString());
    }

    public match(input: string): boolean {
        return input.toLowerCase() === 'mod';
    }
}
