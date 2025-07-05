import { JsonSchema } from '@opentoolbox/types';
import { resolveReference } from './resolve-reference.js';

describe('resolveReference', () => {
  it('should resolve references', () => {
    const testSchema: JsonSchema = {
      title: 'Sample',
      properties: {
        name: {
          $ref: '../property/string.schema.json',
        },
      },
      definitions: {
        Sample: {
          properties: {
            name: {
              properties: {
                name: {
                  $ref: '../some/some.schema.json',
                },
              },
            },
          },
        },
      },
    };

    resolveReference('root', testSchema);

    expect(testSchema.properties?.name.$ref).toEqual('#/definitions/String');
  });
});
