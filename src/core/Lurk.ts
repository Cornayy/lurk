import { IListener } from './interface/IListener';
import { LogManager } from './logging/LogManager';
import { ISettings } from './interface/ISettings';
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
            LogManager.getLogger().log(`Lurk initialized, interpreting ${this.currentSource}...`);
            await this.cycle({ handler: () => LogManager.getLogger().log(this.currentSource) });
        } catch (err) {
            LogManager.getLogger().log(`Interpretation failed, ${err.message}`);
        }
    }

    private async cycle(listener: IListener): Promise<void> {
        const data = await this.parser.parse(
            join(this.settings.sourcePath, this.currentSource),
            this.interpreter.getContext()
        );
        this.currentSource = this.interpreter.interpret(data);

        if (this.interpreter.isRunning()) this.cycle(listener);
        listener.handler();
    }
}
