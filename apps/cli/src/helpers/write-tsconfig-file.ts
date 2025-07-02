import { workspaceRoot, writeJsonFile } from '@nx/devkit';
import { join } from 'path';

export async function writeTsconfigFile(content: any) {
  await writeJsonFile(join(workspaceRoot, 'tsconfig.json'), content);
}
