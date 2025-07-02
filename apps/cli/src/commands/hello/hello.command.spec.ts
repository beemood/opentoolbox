/* eslint-disable @typescript-eslint/no-explicit-any */
import { HelloCommand } from './hello.command.js';

describe('HelloCommand', () => {
  const program: any = {};
  const instance = new HelloCommand(program);

  it('should initialize', () => {
    expect(instance).toBeDefined();
  });

  it('should handle', () => {
    const log = jest.spyOn(console, 'log');
    instance.handle({ name: 'Robert' });
    expect(log).toHaveBeenCalledTimes(1);
    expect(log).toHaveBeenCalledWith(`Hello, Robert`);
  });
});
