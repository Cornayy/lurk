import { Context } from './../context/Context';
import { IFactory } from '../types/IFactory';
import { IRepository } from './../repository/IRepository';
import { IExpression } from '../types/IExpression';

export class ExpressionFactory implements IFactory<IExpression> {
    private readonly expressions: IExpression[];
    private readonly repository: IRepository<IExpression>;

    constructor(repository: IRepository<IExpression>) {
        this.repository = repository;
        this.expressions = this.repository.all();
    }

    public create(input: string, context: Context): IExpression {
        const expression = this.expressions.find((expression) => expression.match(input, context));
        if (!expression) throw new Error(`The expression: ${input} did not match any expression.`);
        return expression;
    }
}
