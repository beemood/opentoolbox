import { Command } from 'commander';

export type BundleJsonCommandArgs = {
  name: string;
};

export class BundleJsonCommand {
  static readonly COMMAND_NAME = 'bundle-json';
  static readonly COMMAND_DESCRIPTION = 'Say bundle-json';

  constructor(protected readonly program: Command) {}

  handle(args: BundleJsonCommandArgs) {
    console.log(`BundleJson, ${args.name}`);
  }

  parse() {
    this.program
      .command(BundleJsonCommand.COMMAND_NAME)
      .description(BundleJsonCommand.COMMAND_DESCRIPTION)
      .requiredOption('-n, --name <string> username')
      .action(this.handle);
  }
}
