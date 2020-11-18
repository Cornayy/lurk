import { ExpressionFactory } from './../parsing/ExpressionFactory';
import { HttpFileRetriever } from './../parsing/strategies/HttpFileRetriever';
import { LocalFileRetriever } from './../parsing/strategies/LocalFileRetriever';
import { FileParser } from './../parsing/FileParser';
import { Interpreter } from './../Interpreter';
import { ISettings } from '../interface/ISettings';
import { Lurk } from './../Lurk';
import { ExpressionRepository } from '../repository/ExpressionRepository';

export class LurkFactory {
    public static create(settings: ISettings): Lurk {
        const interpreter = new Interpreter();
        const retriever = settings.useLocalPath
            ? new LocalFileRetriever()
            : new HttpFileRetriever();
        const factory = new ExpressionFactory(new ExpressionRepository(settings.expressionPath));
        const parser = new FileParser(retriever, factory);
        return new Lurk(interpreter, parser, settings);
    }
}
