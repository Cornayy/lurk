export interface IFileRetriever {
    retrieve(file: string): Promise<string[]>;
}
