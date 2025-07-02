/* eslint-disable @typescript-eslint/no-explicit-any */
import { BundleJsonCommand } from './bundle-json.command.js';

describe('BundleJsonCommand', () => {
  const program: any = {};
  const instance = new BundleJsonCommand(program);

  it('should initialize', () => {
    expect(instance).toBeDefined();
  });

  it('should handle', () => {
    const log = jest.spyOn(console, 'log');
    instance.handle({ name: 'Robert' });
    expect(log).toHaveBeenCalledTimes(1);
    expect(log).toHaveBeenCalledWith(`BundleJson, Robert`);
  });
});
