import { IExpression } from '../../interface/IExpression';
import { Context } from '../../context/Context';

export class GoToIfEqualExpression implements IExpression {
    public interpret(context: Context): void {
        const line = parseInt(context.stack.pop().substring(1));
        const first = context.stack.pop();
        const second = context.stack.pop();

        if (first === second) {
            context.position = line;
        }
    }

    public match(input: string): boolean {
        return input.toLowerCase() === 'geq';
    }
}
