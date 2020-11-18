import { IExpression } from '../../interface/IExpression';
import { Context } from '../../context/Context';

export class GoToIfGreaterExpression implements IExpression {
    public interpret(context: Context): void {
        const line = parseInt(context.stack.pop().substring(1));
        const first = parseInt(context.stack.pop());
        const second = parseInt(context.stack.pop());

        if (second > first) {
            context.position = line;
        }
    }

    public match(input: string): boolean {
        return input.toLowerCase() === 'ggt';
    }
}
