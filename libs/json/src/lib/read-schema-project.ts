import type { JsonSchema } from '@opentoolbox/types';

export type SchemaProjectOptions = {
  root: string;
  main: string;
};

export async function readSchemaProject(
): Promise<JsonSchema[]> {
  // 1. read all schema files under the root directory and store them with using dirs function
  // 2. make all $ref paths absolute
  // 3. turn all $ref into definition with $id/title value
  // 4. move all definitions into the main schema
  //
  throw new Error('Not implemented');
}
