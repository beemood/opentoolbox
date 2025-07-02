import { JsonSchema } from '@opentoolbox/types';

export type SchemaFile = {
  dirpath: string;
  filepath: string;
  content: JsonSchema;
};
