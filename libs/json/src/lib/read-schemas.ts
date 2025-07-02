import { dirs } from '@opentoolbox/fs';
import type { Directory } from '@opentoolbox/types';
import { resolve } from 'path';

export const SCHEMA_JSON_FILE_EXPRESSION = /.schema.json$/;

/**
 * Read `.schema.json` files starting under {@link root} directory and store the file stats and content to {@link Directory} object
 * @param root root directory path
 * @returns directories {@link [Directory](https://google.com)}[]
 */
export async function readSchemas(root: string): Promise<Directory[]> {
  root = resolve(root);
  return await dirs(root, {
    recursive: true,
    expression: SCHEMA_JSON_FILE_EXPRESSION,
    readJsonContent: true,
  });
}
