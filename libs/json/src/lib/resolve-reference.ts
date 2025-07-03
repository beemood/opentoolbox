import type { JsonSchema } from '@opentoolbox/types';
import { names, valueOrThrow } from '@opentoolbox/utils';
import { basename } from 'path';
import { isDefinitionRef } from './is-definition-ref.js';

export function toDefinitionNameFromReferencePath(referencePath: string) {
  const filename = basename(referencePath);
  const shortFilename = valueOrThrow(filename.split('.').shift());
  return names(shortFilename).className;
}

export function toDefinitionPath(definitionName: string) {
  return `#/definitions/${definitionName}`;
}

/**
 * Resolve all $ref values in the {@link schema} object
 * @param root root directory of the schema file
 * @param schema {@link !JsonSchema}
 * @returns schema {@link !JsonSchema}
 */
export function resolveReference(root: string, schema: JsonSchema) {
  const entries = Object.entries(schema);

  // If $ref and $ref is not definition reference, then resolve $ref value
  if (schema.$ref && !isDefinitionRef(schema.$ref)) {
    const definitionName = toDefinitionNameFromReferencePath(schema.$ref);
    schema.$ref = toDefinitionPath(definitionName);
  }

  for (const [key, value] of entries) {
    // This $ref already checked, so continue
    if (key == '$ref') continue;

    // If the value is object, then resolve $ref
    if (typeof value === 'object' && !Array.isArray(value)) {
      resolveReference(root, value);
    } else if (Array.isArray(value)) {
      for (const e of value) {
        if (typeof e === 'object') {
          resolveReference(root, e);
        }
      }
    }
  }
}
