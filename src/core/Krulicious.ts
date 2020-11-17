import { LogManager } from './logging/LogManager';
import { ExpressionRepository } from './repository/ExpressionRepository';
import { ExpressionFactory } from './parsing/ExpressionFactory';
import { HttpFileRetriever } from './parsing/strategies/HttpFileRetriever';
import { LocalFileRetriever } from './parsing/strategies/LocalFileRetriever';
import { ISettings } from './types/ISettings';
import { Interpreter } from './Interpreter';
import { FileParser } from './parsing/FileParser';

export class Krulicious {
    private currentSource: string;
    private readonly settings: ISettings;
    private readonly parser: FileParser;
    private readonly interpreter: Interpreter;

    constructor(interpreter: Interpreter, settings: ISettings) {
        this.currentSource = '/start.txt';
        this.interpreter = interpreter;
        this.settings = settings;
        this.parser = this.initialize();
    }

    public async start(): Promise<void> {
        try {
            while (this.interpreter.isRunning()) {
                const data = await this.parser.parse(
                    this.settings.sourcePath.concat(this.currentSource)
                );
                this.currentSource = this.interpreter.interpret(data);
                LogManager.getLogger(true).log(this.currentSource);
            }
        } catch (e) {
            LogManager.getLogger(true).log(`Interpretation failed, ${e.message}`);
        }
    }

    private initialize(): FileParser {
        const retriever = this.settings.useLocalPath
            ? new LocalFileRetriever()
            : new HttpFileRetriever();
        const factory = new ExpressionFactory(
            new ExpressionRepository(this.settings.expressionPath)
        );
        return new FileParser(retriever, factory);
    }
}
