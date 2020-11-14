import { BaseRepository } from './BaseRepository';
import { IExpression } from '../expression/IExpression';

export class ExpressionRepository extends BaseRepository<IExpression> {
    constructor() {
        super();
    }

    public collect(): IExpression[] {
        throw new Error('Method not implemented.');
    }
}
