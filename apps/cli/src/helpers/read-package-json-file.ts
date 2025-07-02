import { readJsonFile, workspaceRoot } from '@nx/devkit';
import { join } from 'path';

export async function readPackageJsonFile() {
  return await readJsonFile(join(workspaceRoot, 'package.json'));
}
