import { workspaceRoot } from '@nx/devkit';
import { join } from 'path';
import { bundle } from './bundle.js';

describe('bundle', () => {
  it('should bundle schemas', async () => {
    await bundle(
      join(
        workspaceRoot,
        'libs',
        'json',
        'test',
        'schemas',
        'model.schema.json'
      )
    );
  });
});
