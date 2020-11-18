import { IExpression } from '../../types/IExpression';
import { Context } from '../../context/Context';

export class RotateExpression implements IExpression {
    public interpret(context: Context): void {
        const value = context.stack.pop();
        const result = this.rotate(value);
        context.stack.push(result);
    }

    public match(input: string): boolean {
        return input.toLowerCase() === 'rot';
    }

    private rotate(rotate: string): string {
        const input = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        const output = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm';
        const index = (x: string) => input.indexOf(x);
        const translate = (x: string) => (index(x) > -1 ? output[index(x)] : x);
        return rotate.split('').map(translate).join('');
    }
}
