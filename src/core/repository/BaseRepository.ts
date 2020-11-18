import { IRepository } from '../interface/IRepository';

export abstract class BaseRepository<T> implements IRepository<T> {
    private readonly data: T[] = [];
    protected readonly location?: string;

    constructor(location?: string) {
        this.location = location;
        this.collect(location);
    }

    public all(): T[] {
        return this.data;
    }

    public add(resource: T): void {
        this.data.push(resource);
    }

    protected abstract collect(location?: string): void;
}
