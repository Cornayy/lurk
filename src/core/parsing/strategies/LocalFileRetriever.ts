import { IFileRetriever } from './IFileRetriever';
import { readFileSync, existsSync } from 'fs';

export class LocalFileRetriever implements IFileRetriever {
    public retrieve(file: string): Promise<string[]> {
        if (!existsSync(file)) throw new Error(`The given file: ${file} does not exist.`);
        return Promise.resolve(readFileSync(file).toString().split('\n'));
    }
}
