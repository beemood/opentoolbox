import { writeFile } from 'fs/promises';

export async function writeTextFile(filepath: string, content: string) {
  return await writeFile(filepath, content, { encoding: 'utf-8' });
}
