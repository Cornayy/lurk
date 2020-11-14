import { IRepository } from './IRepository';
import { IExpression } from '../IExpression';

export class ExpressionRepository implements IRepository<IExpression> {
    private expressions: IExpression[];

    constructor() {
        this.expressions = this.collect();
    }

    private collect(): IExpression[] {
        throw new Error('Method not implemented.');
    }

    public all(): IExpression[] {
        return this.expressions;
    }
}
