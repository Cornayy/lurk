import { IExpression } from '../../interface/IExpression';
import { Context } from '../../context/Context';

export class ReferenceVariableExpression implements IExpression {
    public interpret(context: Context, input: string): void {
        const variable = input.substring(1);
        const result = context.variables[variable];
        context.stack.push(result);
    }

    public match(input: string): boolean {
        return new RegExp('^\\$.*$').test(input);
    }
}
