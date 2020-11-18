import { IExpression } from '../../types/IExpression';
import { Context } from '../../context/Context';

export class LabelDefinitionExpression implements IExpression {
    public interpret(context: Context, input: string): void {
        this.define(input.substring(1), context);
    }

    public match(input: string, context: Context): boolean {
        const match = new RegExp('^:.*$').test(input);
        if (match) this.define(input.substring(1), context);
        return match;
    }

    private define(input: string, context: Context) {
        context.labels[input] = context.position;
    }
}
