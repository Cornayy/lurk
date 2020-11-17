import { Krulicious } from './core/Krulicious';
import { Interpreter } from './core/Interpreter';

const krulicious = new Krulicious(new Interpreter(), {
    useLocalPath: true,
    sourcePath: './src/resources',
    expressionPath: 'src/core/expression',
});
krulicious.start();
