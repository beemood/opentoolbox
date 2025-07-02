import { readTsconfigFile } from './read-tsconfig-file';
import { writeTsconfigFile } from './write-tsconfig-file';

export async function updateTsconfigRef(projectDirectory: string) {
  const tsconfigFile = await readTsconfigFile();

  if (!tsconfigFile.references) {
    tsconfigFile.references = [];
  }

  tsconfigFile.references.push({
    path: `./${projectDirectory}`,
  });

  await writeTsconfigFile(tsconfigFile);
}
