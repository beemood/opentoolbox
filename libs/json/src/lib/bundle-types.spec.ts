import { workspaceRoot } from '@nx/devkit';
import { readJsonFile, writeTextFile } from '@opentoolbox/fs';
import { JsonSchema } from '@opentoolbox/types';
import { join } from 'path';
import { bundleTypes } from './bundle-types.js';

describe('bundleTypes', () => {
  it('should bundle types', async () => {
    const root = join(workspaceRoot, 'libs', 'json', 'schemas');
    const schemaFilePath = await readJsonFile<JsonSchema>(
      join(root, 'model.json')
    );
    const distSchemaFilepath = join(root, 'model.ts');
    const result = bundleTypes('Model', schemaFilePath);

    await writeTextFile(distSchemaFilepath, result);
    console.log(result);
  });
});
