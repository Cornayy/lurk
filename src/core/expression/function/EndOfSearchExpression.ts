import { IExpression } from '../IExpression';
import { Context } from '../../context/Context';

export class EndOfSearchExpression implements IExpression {
    interpret(context: Context): void {
        context.end();
    }

    match(input: string): boolean {
        return input === 'end';
    }
}
