import { workspaceRoot } from '@nx/devkit';
import { writeJsonFile } from '@opentoolbox/fs';
import { join } from 'path';
import { bundle } from './bundle.js';

describe('bundle', () => {
  it('should bundle schemas', async () => {
    const rootpath = join(workspaceRoot, 'libs', 'json', 'schemas');
    const mainSchemaPath = join(rootpath, 'model.schema.json');
    const distPath = join(rootpath, 'model.json');
    const schema = await bundle(mainSchemaPath);

    writeJsonFile(distPath, schema);
  });
});
