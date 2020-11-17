export interface IFactory<T> {
    create(input: string): T;
}
