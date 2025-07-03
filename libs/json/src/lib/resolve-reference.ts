import type { JsonSchema } from '@opentoolbox/types';
import { resolve } from 'path';
import { isDefinitionRef } from './is-definition-ref.js';

/**
 * Resolve all $ref values in the {@link schema} object
 * @param root root directory of the schema file
 * @param schema {@link !JsonSchema}
 * @returns schema {@link !JsonSchema}
 */
export function resolveReference(root: string, schema: JsonSchema): JsonSchema {
  const entries = Object.entries(schema);

  // If $ref and $ref is not definition reference, then resolve $ref value
  if (schema.$ref && !isDefinitionRef(schema.$ref)) {
    schema.$ref = resolve(root, schema.$ref);
  }

  for (const [key, value] of entries) {
    // This $ref already checked, so continue
    if (key == '$ref') continue;

    // If the value is object, then resolve $ref
    if (typeof value === 'object' && !Array.isArray(value)) {
      resolveReference(root, value);
    }
  }
  return schema;
}
