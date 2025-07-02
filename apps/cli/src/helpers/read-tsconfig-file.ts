import { readJsonFile, workspaceRoot } from '@nx/devkit';
import { join } from 'path';

export async function readTsconfigFile() {
  return readJsonFile(join(workspaceRoot, 'tsconfig.json'));
}
