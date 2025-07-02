import { readTextFile } from './read-text-file.js';
/**
 * Read and parse json file
 * @param filepath filepath
 * @returns json object {@link T}
 */
export async function readJsonFile<T extends object>(
  filepath: string
): Promise<T> {
  return JSON.parse(await readTextFile(filepath));
}
