import { LogManager } from './../../logging/LogManager';
import { IFileRetriever } from '../../interface/IFileRetriever';
import axios from 'axios';

export class HttpFileRetriever implements IFileRetriever {
    public async retrieve(file: string): Promise<string[]> {
        try {
            const { data } = await axios.get(file);
            return data.toString().replace(/\n|\r/g, '').split('\n');
        } catch (err) {
            LogManager.getLogger().log(`An error occurred while trying to fetch: ${file}.`);
        }
    }
}
