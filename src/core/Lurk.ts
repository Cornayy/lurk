import { LogManager } from './logging/LogManager';
import { ISettings } from './types/ISettings';
import { Interpreter } from './Interpreter';
import { FileParser } from './parsing/FileParser';
import { join } from 'path';

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
            this.cycle();
        } catch (err) {
            LogManager.getLogger().log(`Interpretation failed, ${err.message}`);
        }
    }

    private async cycle(): Promise<void> {
        // Recursive calls till interpreter is finished.
        LogManager.getLogger().log(this.currentSource);
        const data = await this.parser.parse(
            join(this.settings.sourcePath, this.currentSource),
            this.interpreter.getContext()
        );
        this.currentSource = this.interpreter.interpret(data);

        // Report output when interpreter is finished.
        if (this.interpreter.isRunning()) this.cycle();
        else LogManager.getLogger().log(`Output: ${this.currentSource}`);
    }
}
