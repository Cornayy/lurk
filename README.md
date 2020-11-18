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

A list of all possible expressions that Lurk supports.

### Function

-   _End of search_ - **end**
-   _Function_ - **fun**
-   _Return_ - **ret**

### Integer

-   _Absolute_ - **abs**
-   _Add_ - **add**
-   _Decrement_ - **dec**
-   _Divide_ - **div**
-   _Increment_ - **inc**
-   _Modulo_ - **mod**
-   _Multiply_ - **mul**
-   _Negate_ - **neg**
-   _Subtract_ - **sub**

### Jump

-   _Go to_ - **gto**
-   _Go to if equal_ - **geq**
-   _Go to if greater_ - **ggt**
-   _Go to if greater or equal_ - **gge**
-   _Go to if less_ - **glt**
-   _Go to if less or equal_ - **gle**
-   _Go to if not equal_ - **gne**

### String

-   _Concatenation_ - **cat**
-   _Duplicate_ - **dup**
-   _Index_ - **idx**
-   _Length_ - **len**
-   _New line_ - **enl**
-   _Reverse_ - **rev**
-   _Rotate_ - **rot**
-   _Substring_ - **slc**

### Value

-   _Assign variable_ - **=**
-   _Digit_ - **\d**
-   _Label definition_ - **:**
-   _Label reference_ - **>**
-   _Variable reference_ - **\$**
-   _Text_ - **\\**

## License

[MIT](LICENSE)
