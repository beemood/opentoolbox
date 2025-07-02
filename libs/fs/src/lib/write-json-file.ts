import { writeTextFile } from './write-text-file.js';

/**
 * Write json file
 * @param filepath filepath
 * @param content json object
 */
export async function writeJsonFile<T extends object>(
  filepath: string,
  content: T
) {
  await writeTextFile(filepath, JSON.stringify(content));
}
