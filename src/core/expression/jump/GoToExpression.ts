import { IExpression } from '../../interface/IExpression';
import { Context } from '../../context/Context';

export class GoToExpression implements IExpression {
    public interpret(context: Context): void {
        const line = parseInt(context.stack.pop().substring(1));
        context.position = line;
    }

    public match(input: string): boolean {
        return input.toLowerCase() === 'gto';
    }
}
