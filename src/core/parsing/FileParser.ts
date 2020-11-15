import { IFactory } from './IFactory';
import { IExpressionData } from './../expression/IExpressionData';
import { IFileRetriever } from './strategies/IFileRetriever';
import { IExpression } from '../expression/IExpression';

export class FileParser {
    private readonly factory: IFactory<IExpression>;
    private readonly retriever: IFileRetriever;

    constructor(retriever: IFileRetriever, factory: IFactory<IExpression>) {
        this.retriever = retriever;
        this.factory = factory;
    }

    public async parse(file: string): Promise<IExpressionData[]> {
        const lines = await this.retriever.retrieve(file);

        return lines.map((line) => {
            const expression = this.factory.create(line);

            return {
                expression,
                input: line,
            };
        });
    }
}
