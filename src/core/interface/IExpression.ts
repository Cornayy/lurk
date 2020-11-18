import { Context } from '../context/Context';

export interface IExpression {
    interpret(context: Context, input?: string): void;
    match(input: string, context?: Context): boolean;
}
