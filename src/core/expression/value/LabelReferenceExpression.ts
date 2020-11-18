import { IExpression } from '../../interface/IExpression';
import { Context } from '../../context/Context';

export class LabelReferenceExpression implements IExpression {
    public interpret(context: Context, input: string): void {
        const label = input.substring(1);
        context.stack.push(`~${context.labels[label]}`);
    }

    public match(input: string): boolean {
        return new RegExp('^>.*$').test(input);
    }
}
