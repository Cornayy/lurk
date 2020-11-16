import { Interpreter } from './Interpreter';
import { FileParser } from './parsing/FileParser';

export class Krulicious {
    private readonly parser: FileParser;
    private readonly interpreter: Interpreter;

    constructor(parser: FileParser, interpreter: Interpreter) {
        this.parser = parser;
        this.interpreter = interpreter;
    }

    public async start(): Promise<void> {
        try {
            const data = await this.parser.parse('./src/resources/start.txt');
            this.interpreter.interpret(data);
        } catch (e) {
            console.log(`Interpretation failed, "${e.message}"`);
        }
    }
}
