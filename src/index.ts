import { LurkFactory } from './core/creation/LurkFactory';

const lurk = LurkFactory.create({
    useLocalPath: true,
    sourcePath: 'src/resources',
    expressionPath: 'src/core/expression',
    currentSource: '/start.txt',
});
lurk.start();
