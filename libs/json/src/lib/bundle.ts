import { NotFoundError } from '@opentoolbox/errors';
import { writeJsonFile } from '@opentoolbox/fs';
import { dirname, resolve } from 'path';
import { inspect } from 'util';
import { extractSchemaContents } from './extract-scheme-contents.js';
import { readSchemas } from './read-schemas.js';
import {
  resolveReference,
  toDefinitionNameFromReferencePath,
} from './resolve-reference.js';

export type BundleOptions = {
  root: string;
  main: string;
};

/**
 * Bundle schema
 * @param options
 * @returns list of directories {@link !Directory}[]
 */
export async function bundle(mainSchemaFilepath: string) {
  mainSchemaFilepath = resolve(mainSchemaFilepath);
  const rootDirectory = dirname(mainSchemaFilepath);
  const directories = await readSchemas(rootDirectory);
  const schemas = await extractSchemaContents(directories);

  const mainSchema = schemas.find((e) => e.path === mainSchemaFilepath);

  if (!mainSchema)
    throw new NotFoundError(
      `The main schema not found by ${mainSchemaFilepath}`
    );

  for (const s of schemas) {
    resolveReference(mainSchemaFilepath, s.content);
  }

  if (!mainSchema.content.definitions) {
    mainSchema.content.definitions = {};
  }

  for (let i = 0; i < schemas.length; i++) {
    if (mainSchema.path === schemas[i].path) {
      continue;
    }
    const definitionName = toDefinitionNameFromReferencePath(schemas[i].path);
    mainSchema.content.definitions[definitionName] = schemas[i].content;
    mainSchema.content.definitions = {
      ...mainSchema.content.definitions,
      ...schemas[i].content.definitions,
    };
    delete schemas[i].content.$schema;
    delete schemas[i].content.definitions;
  }

  console.log(inspect(mainSchema, true, 100));

  const distPath = mainSchema.path + '.build.json';
  await writeJsonFile(distPath, mainSchema.content);

  // 1. read all schema files under the root directory and store them with using dirs function
  // 2. move all definitions in the schemas files under the main schema definitions
  // 3. move all schemas into the main schema definition.
  // 2. make all $ref paths absolute
  // 3. turn all $ref into definition with $id/title value
  // 4. move all definitions into the main schema
  //
}
