/* eslint-disable @typescript-eslint/no-explicit-any */
import { ByeCommand } from './bye.command.js';

describe('ByeCommand', () => {
  const program: any = {};
  const instance = new ByeCommand(program);

  it('should initialize', () => {
    expect(instance).toBeDefined();
  });

  it('should handle', () => {
    const log = jest.spyOn(console, 'log');
    instance.handle({ name: 'Robert' });
    expect(log).toHaveBeenCalledTimes(1);
    expect(log).toHaveBeenCalledWith(`Bye, Robert`);
  });
});
