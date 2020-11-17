# lurk

An interpreter for the Krul language.

## About

This interpreter parses Krul source code files _(\*.txt)_ and executes the matched expressions. When a file ends, the last value is used as the file name of the file that is yet to be parsed. Execution of the Krul program will stop when an **end** expression is interpreted. For more information about all the possible expressions, have a look at the following chapter.

This interpreter was originally a university assignment, but I decided to take it a step further and overengineer it.

## Configuration

The lurk program is constructed with the following configuration:

```typescript
interface ISettings {
    useLocalPath: boolean; // Use the local source code files (src/resources).
    sourcePath: string; // Local path (src/resources) or online path.
    expressionPath: string; // The path where expressions are located (src/core/expressions).
    currentSource: string; // The current source code file that is being executed.
}
```

## Expressions

Yet to be added...
