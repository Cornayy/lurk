import { IExpression } from '../../types/IExpression';
import { Context } from '../../context/Context';

export class ReferenceVariableExpression implements IExpression {
    public interpret(context: Context, input: string): void {
        const variable = input.substring(1);
        context.stack.push(context.variables[variable]);
    }

    public match(input: string): boolean {
        return new RegExp('^\\$.*$').test(input);
    }
}
