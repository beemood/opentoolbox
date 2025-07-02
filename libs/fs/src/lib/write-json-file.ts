import { writeFile } from 'fs/promises';

export async function writeJsonFile<T extends object>(
  filepath: string,
  content: T
) {
  return await writeFile(filepath, JSON.stringify(content), {
    encoding: 'utf-8',
  });
}
