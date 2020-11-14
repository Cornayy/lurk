import { BaseRepository } from './BaseRepository';
import { IExpression } from '../IExpression';

export class ExpressionRepository extends BaseRepository<IExpression> {
    constructor() {
        super();
    }

    public collect(): IExpression[] {
        throw new Error('Method not implemented.');
    }
}
