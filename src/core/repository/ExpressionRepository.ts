/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-var-requires */
import { BaseRepository } from './BaseRepository';
import { IExpression } from '../interface/IExpression';
import { readdirSync } from 'fs';
import { join } from 'path';

export class ExpressionRepository extends BaseRepository<IExpression> {
    constructor(location: string) {
        super(location);
    }

    public collect(location?: string): void {
        this.crawl(location);
    }

    private crawl(dir: string): void {
        readdirSync(dir, { withFileTypes: true }).forEach((dirent) => {
            const location = dir.concat(`/${dirent.name}`);
            if (dirent.isDirectory()) {
                this.crawl(location);
            } else {
                const Expression = Object.values(require(join('../../../', location)))[0] as any;
                this.add(new Expression());
            }
        });
    }
}
