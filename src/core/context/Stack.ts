export class Stack<T> {
    private items: T[] = [];

    public push(element: T): void {
        this.items.push(element);
    }

    public pop(): T {
        return this.items.pop();
    }

    public peek(): T {
        return this.items[this.items.length - 1];
    }

    public empty(): boolean {
        return this.items.length === 0;
    }

    public clear(): void {
        this.items = [];
    }
}
