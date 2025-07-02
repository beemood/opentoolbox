import {
  addProjectConfiguration,
  formatFiles,
  generateFiles,
  names,
  readJsonFile,
  Tree,
  workspaceRoot,
} from '@nx/devkit';
import * as path from 'path';
import { ProjectGeneratorSchema } from './schema';

export async function projectGenerator(
  tree: Tree,
  options: ProjectGeneratorSchema
) {
  const { name, type } = options;

  const __names = names(name);
  const projectParentDirectory = type === 'lib' ? 'libs' : 'apps';
  const packageJSON = await readJsonFile(
    path.join(workspaceRoot, 'package.json')
  );
  const [projectNamePrefix] = packageJSON.name.split('/');

  const source = path.join(__dirname, 'files');
  const projectDirectory = path.join(projectParentDirectory, __names.fileName);
  const projectName = `${projectNamePrefix}/${__names.fileName}`;

  generateFiles(tree, source, projectDirectory, {
    projectDirectory,
    projectName,
  });
  await formatFiles(tree);
}

export default projectGenerator;
