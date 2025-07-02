import { Command } from 'commander';

export type HelloCommandArgs = {
  name: string;
};

export class HelloCommand {
  static readonly COMMAND_NAME = 'hello';
  static readonly COMMAND_DESCRIPTION = 'Say hello';

  constructor(protected readonly program: Command) {}

  handle(args: HelloCommandArgs) {
    console.log(`Hello, ${args.name}`);
  }

  parse() {
    this.program
      .command(HelloCommand.COMMAND_NAME)
      .description(HelloCommand.COMMAND_DESCRIPTION)
      .requiredOption('-n, --name <string> username')
      .action(this.handle);
  }
}
