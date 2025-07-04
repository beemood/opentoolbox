import { workspaceRoot } from '@nx/devkit';
import { join } from 'path';
import { bundle } from './bundle.js';

describe('bundle', () => {
  it('should bundle schemas', async () => {
    const rootpath = join(workspaceRoot, 'libs', 'json', 'schemas');
    const mainSchemaPath = join(rootpath, 'model.schema.json');
    const distPath = join(rootpath, 'model.json');
    await bundle(mainSchemaPath, distPath);
  });
});
