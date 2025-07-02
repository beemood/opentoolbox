import { readTextFile } from './read-text-file.js';
import { load } from 'js-yaml';

export async function readYamlFile<T extends object>(
  filepath: string
): Promise<T> {
  return (await load(await readTextFile(filepath))) as T;
}
