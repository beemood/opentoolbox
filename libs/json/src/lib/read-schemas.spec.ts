import { workspaceRoot } from '@nx/devkit';
import { join } from 'path';
import { readSchemas } from './read-schemas.js';

describe('readSchemas', () => {
  it('should read schemes', async () => {
    const directories = await readSchemas(
      join(workspaceRoot, 'libs', 'json', 'schemas')
    );

    expect(directories.find((e) => e.path.endsWith('.json'))).toBeDefined();
  });
});
