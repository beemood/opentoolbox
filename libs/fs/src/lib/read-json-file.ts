import { readTextFile } from './read-text-file.js';

export async function readJsonFile(filepath: string) {
  return JSON.parse(await readTextFile(filepath));
}
