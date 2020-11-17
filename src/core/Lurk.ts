import { LogManager } from './logging/LogManager';
import { ISettings } from './types/ISettings';
import { Interpreter } from './Interpreter';
import { FileParser } from './parsing/FileParser';

export class Lurk {
    private currentSource: string;
    private readonly settings: ISettings;
    private readonly parser: FileParser;
    private readonly interpreter: Interpreter;

    constructor(interpreter: Interpreter, parser: FileParser, settings: ISettings) {
        this.currentSource = settings.currentSource;
        this.interpreter = interpreter;
        this.settings = settings;
        this.parser = parser;
    }

    public async start(): Promise<void> {
        try {
            while (this.interpreter.isRunning()) {
                const data = await this.parser.parse(
                    this.settings.sourcePath.concat(this.currentSource)
                );
                this.currentSource = this.interpreter.interpret(data);
                LogManager.getLogger().log(this.currentSource);
            }
        } catch (err) {
            LogManager.getLogger().log(`Interpretation failed, ${err.message}`);
        }
    }
}
