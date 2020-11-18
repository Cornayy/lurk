import { Context } from './../context/Context';
import { IFactory } from '../types/IFactory';
import { IExpressionData } from '../types/IExpressionData';
import { IFileRetriever } from '../types/IFileRetriever';
import { IExpression } from '../types/IExpression';

export class FileParser {
    private readonly factory: IFactory<IExpression>;
    private readonly retriever: IFileRetriever;

    constructor(retriever: IFileRetriever, factory: IFactory<IExpression>) {
        this.retriever = retriever;
        this.factory = factory;
    }

    public async parse(file: string, context: Context): Promise<IExpressionData[]> {
        const lines = await this.retriever.retrieve(file);

        return lines
            .filter((input) => input)
            .map((input, index) => {
                context.position = index;
                const expression = this.factory.create(input, context);

                return {
                    expression,
                    input,
                };
            });
    }
}
