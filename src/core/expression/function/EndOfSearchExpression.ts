import { IExpression } from '../IExpression';

export class EndOfSearchExpression implements IExpression {
    interpret(): void {
        throw new Error('Method not implemented.');
    }
}
