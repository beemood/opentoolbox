import { readFile } from 'fs/promises';

export async function readTextFile(filepath: string): Promise<string> {
  return await readFile(filepath, { encoding: 'utf-8' });
}
