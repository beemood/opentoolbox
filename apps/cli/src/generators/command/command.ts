import {
  formatFiles,
  generateFiles,
  names,
  readProjectConfiguration,
  Tree,
} from '@nx/devkit';
import * as path from 'path';
import { CommandGeneratorSchema } from './schema';

export async function commandGenerator(
  tree: Tree,
  options: CommandGeneratorSchema
) {
  const { name, project } = options;

  const projectConfig = readProjectConfiguration(tree, project);
  const projectRoot = projectConfig.root;
  const __names = names(name);
  const target = path.join(projectRoot, 'src/commands');

  const source = path.join(__dirname, 'files');
  generateFiles(tree, source, target, { ...__names });
  await formatFiles(tree);
}

export default commandGenerator;
