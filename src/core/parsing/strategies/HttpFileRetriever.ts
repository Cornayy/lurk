import { LogManager } from './../../logging/LogManager';
import { IFileRetriever } from '../../types/IFileRetriever';
import axios from 'axios';

export class HttpFileRetriever implements IFileRetriever {
    public async retrieve(file: string): Promise<string[]> {
        try {
            const { data } = await axios.get(file);
            return data.toString().split('\n');
        } catch (err) {
            LogManager.getLogger(true).log(`An error occurred while trying to fetch: ${file}.`)
        }
    }
}
