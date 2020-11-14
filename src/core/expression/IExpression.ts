import { Context } from '../context/Context';

export interface IExpression {
    interpret(context: Context, input: string): void;
}
