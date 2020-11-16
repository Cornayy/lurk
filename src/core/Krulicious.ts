import { ExpressionRepository } from './repository/ExpressionRepository';
import { ExpressionFactory } from './parsing/ExpressionFactory';
import { HttpFileRetriever } from './parsing/strategies/HttpFileRetriever';
import { LocalFileRetriever } from './parsing/strategies/LocalFileRetriever';
import { ISettings } from './config/ISettings';
import { Interpreter } from './Interpreter';
import { FileParser } from './parsing/FileParser';

export class Krulicious {
    private readonly settings: ISettings;
    private readonly parser: FileParser;
    private readonly interpreter: Interpreter;

    constructor(interpreter: Interpreter, settings: ISettings) {
        this.interpreter = interpreter;
        this.settings = settings;
        this.parser = this.initialize();
    }

    public async start(): Promise<void> {
        try {
            const data = await this.parser.parse(this.settings.sourcePath.concat('/start.txt'));
            this.interpreter.interpret(data);
        } catch (e) {
            console.log(`Interpretation failed, "${e.message}"`);
        }
    }

    private initialize(): FileParser {
        const retriever = this.settings.useLocalPath
            ? new LocalFileRetriever()
            : new HttpFileRetriever();
        const factory = new ExpressionFactory(new ExpressionRepository());
        return new FileParser(retriever, factory);
    }
}