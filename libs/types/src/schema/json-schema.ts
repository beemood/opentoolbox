import type { Any } from '../common/any.js';

/**
 * Property type
 */
export type PropertyType =
  | 'string'
  | 'number'
  | 'integer'
  | 'boolean'
  | 'object'
  | 'null'
  | 'array';

/**
 * Json scheme draft-7
 */
export type JsonSchema = {
  $comment?: string;
  $id?: string;
  $ref?: string;
  $schema?: string;
  additionalItems?: true;
  additionalProperties?: true;
  allOf?: JsonSchema[];
  anyOf?: JsonSchema[];
  const?: Any;
  contains?: JsonSchema;
  contentEncoding?: string;
  contentMediaType?: string;
  default?: Any;
  definitions?: Record<string, JsonSchema>;
  dependencies?: Record<string, string[]>;
  description?: string;
  else?: JsonSchema;
  enum?: Any[];
  examples?: Any[];
  exclusiveMaximum?: number;
  exclusiveMinimum?: number;
  format?: string;
  if?: JsonSchema;
  items?: JsonSchema;
  maximum?: number;
  maxItems?: number;
  maxLength?: number;
  maxProperties?: number;
  minimum?: number;
  minItems?: number;
  minLength?: number;
  minProperties?: number;
  not?: JsonSchema;
  oneOf?: JsonSchema[];
  pattern?: string;
  patternProperties?: Record<string, JsonSchema>;
  properties?: Record<string, JsonSchema>;
  propertyNames?: JsonSchema;
  readOnly?: boolean;
  required?: string[];
  then?: JsonSchema;
  title?: string;
  type?: PropertyType;
  uniqueItems?: true;
};
