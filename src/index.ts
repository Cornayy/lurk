import { Lurk } from './core/Lurk';
import { Interpreter } from './core/Interpreter';

const lurk = new Lurk(new Interpreter(), {
    useLocalPath: true,
    sourcePath: 'src/resources',
    expressionPath: 'src/core/expression',
});
lurk.start();
