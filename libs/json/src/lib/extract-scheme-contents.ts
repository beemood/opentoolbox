import { eachDirectoryDfs } from '@opentoolbox/fs';
import type { Directory, JsonSchema } from '@opentoolbox/types';
import type { SchemeFileMetadata } from './schema-file-metadata.js';

/**
 * Extract the schema content from directory objects and return as {@link SchemeFileMetadata}[]
 * @param directories list of directories {@link !Directory}[]
 * @returns
 */
export async function extractSchemaContents(
  directories: Directory<JsonSchema>[]
): Promise<SchemeFileMetadata[]> {
  const schemas: SchemeFileMetadata[] = [];

  await eachDirectoryDfs(directories, async (value) => {
    if (value.isFile) {
      schemas.push({ path: value.path, content: value.content });
    }
  });

  return schemas;
}
