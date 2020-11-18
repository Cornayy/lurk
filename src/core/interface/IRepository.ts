export interface IRepository<T> {
    all(): T[];
    add(resource: T): void;
}
