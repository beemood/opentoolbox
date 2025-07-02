import { readTextFile } from './read-text-file.js';
import { load } from 'js-yaml';

export async function readYamlFile(filepath: string) {
  return await load(await readTextFile(filepath));
}
