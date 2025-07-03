import { join } from 'path';
import { readSchemas } from './read-schemas.js';

describe('readSchemas', () => {
  it('should read schemes', async () => {
    const directories = await readSchemas(
      join(__dirname, '../../test/schemas')
    );

    expect(directories[0].path).toBeDefined();
    expect(directories[0].content).toBeDefined();

    expect(directories[1].path).toBeDefined();
    expect(directories[1].children?.length).toEqual(1);
    expect(directories[1].children?.[0].content).toBeDefined();
  });
});
