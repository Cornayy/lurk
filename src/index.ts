import { Krulicious } from './core/Krulicious';
import { Interpreter } from './core/Interpreter';
import { ExpressionRepository } from './core/repository/ExpressionRepository';
import { ExpressionFactory } from './core/parsing/ExpressionFactory';
import { LocalFileRetriever } from './core/parsing/strategies/LocalFileRetriever';
import { FileParser } from './core/parsing/FileParser';

// TODO: Inject dependencies in a better way.
const krulicious = new Krulicious(
    new FileParser(new LocalFileRetriever(), new ExpressionFactory(new ExpressionRepository())),
    new Interpreter()
);
krulicious.start();
