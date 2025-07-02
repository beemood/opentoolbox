import { program } from 'commander';
import { HelloCommand } from './commands/hello/hello.command.js';

program.name('opentoolbox').description('development tools').version('0.0.1');

new HelloCommand(program).parse();

program.parse();
