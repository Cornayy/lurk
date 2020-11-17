import { IExpression } from '../../types/IExpression';
import { Context } from '../../context/Context';

export class EndOfSearchExpression implements IExpression {
    public interpret(context: Context): void {
        context.end();
    }

    public match(input: string): boolean {
        return input === 'end';
    }
}
