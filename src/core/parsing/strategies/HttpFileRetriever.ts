import { IFileRetriever } from './IFileRetriever';
import axios from 'axios';

export class HttpFileRetriever implements IFileRetriever {
    public async retrieve(file: string): Promise<string[]> {
        try {
            const { data } = await axios.get(file);
            return data;
        } catch (err) {
            console.error(`An error occurred while trying to fetch: ${file}.`);
        }
    }
}
