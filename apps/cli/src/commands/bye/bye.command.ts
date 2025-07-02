import type { Command } from 'commander';

export type ByeCommandArgs = {
  name: string;
};

export class ByeCommand {
  static readonly COMMAND_NAME = 'bye';
  static readonly COMMAND_DESCRIPTION = 'Say bye';

  constructor(protected readonly program: Command) {}

  handle(args: ByeCommandArgs) {
    console.log(`Bye, ${args.name}`);
  }

  parse() {
    this.program
      .command(ByeCommand.COMMAND_NAME)
      .description(ByeCommand.COMMAND_DESCRIPTION)
      .requiredOption('-n, --name <string> username')
      .action(this.handle);
  }
}
