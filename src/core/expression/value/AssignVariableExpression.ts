import { IExpression } from '../../types/IExpression';
import { Context } from '../../context/Context';

export class AssignVariableExpression implements IExpression {
    public interpret(context: Context, input: string): void {
        const variable = input.substring(1);
        const value = context.stack.pop();
        context.variables[variable] = value;
    }

    public match(input: string): boolean {
        return new RegExp('^=.*$').test(input);
    }
}
