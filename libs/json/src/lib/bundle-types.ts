import type { JsonSchema } from '@opentoolbox/types';
import { valueOrThrow } from '@opentoolbox/utils';

export function parseType(schema: JsonSchema): string {
  const {
    type,
    $ref,
    enum: enums,
    properties,
    const: constant,
    patternProperties,
    propertyNames,
  } = schema;

  if (type) {
    switch (type) {
      case 'string':
      case 'number':
      case 'boolean':
        return type;
      case 'integer':
        return 'number';

      case 'array': {
        return `${schema.items ? parseType(schema.items) : 'any'}[]`;
      }
      case 'object':
      case 'null':
        break;
    }
  } else if ($ref) {
    return valueOrThrow($ref.split('/').pop());
  } else if (constant != undefined) {
    return typeof constant === 'string' ? `'${constant}'` : constant;
  } else if (enums) {
    return enums
      .map((e) => {
        return typeof e === 'string' ? `'${e}'` : e;
      })
      .join(' | ');
  } else if (properties) {
    const entries = Object.entries(properties);
    const requiredItems: string[] = schema.required ?? [];

    const propertiesText = entries
      .map(([key, value]) => {
        const isRequired = requiredItems.includes(key) ? '' : '?';

        if (key === 'target') {
          return `target${isRequired}: T`;
        }
        return `${key}${isRequired}:${parseType(value)}`;
      })
      .join('\n');

    return `{ 
      ${propertiesText}
      } `;
  } else if (schema.allOf) {
    const allOfText = schema.allOf
      .map((e) => {
        return parseType(e);
      })
      .join(' & ');
    return `(${allOfText})`;
  } else if (schema.oneOf) {
    const oneOfText = schema.oneOf
      .map((e) => {
        return parseType(e);
      })
      .join('|');
    return `(${oneOfText})`;
  } else if (patternProperties) {
    const values = Object.values(patternProperties);
    let key = 'string';
    if (propertyNames) {
      key = parseType(propertyNames);
    }
    return `Record<${key},${parseType(values[0])}>`;
  }

  return '';
}

export function bundleTypes(name: string, schema: JsonSchema) {
  const types: string[] = [];

  {
    types.push(`export type ${name}<T=any> = ${parseType(schema)}`);
  }

  if (schema.definitions) {
    const entries = Object.entries(schema.definitions);
    for (const [key, value] of entries) {
      types.push(`export type ${key}<T = any> = ${parseType(value)}`);
    }
  }

  return types.join('\n');
}
