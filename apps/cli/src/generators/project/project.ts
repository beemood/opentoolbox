import type { Tree } from '@nx/devkit';
import { formatFiles, generateFiles, names } from '@nx/devkit';
import * as path from 'path';
import type { ProjectGeneratorSchema } from './schema';
import { readPackageJsonFile } from '../../helpers/read-package-json-file';
import { createProjectName } from '../../helpers/create-project-name';
import { updateTsconfigRef } from '../../helpers/update-tsconfig-rf';

export async function projectGenerator(
  tree: Tree,
  options: ProjectGeneratorSchema
) {
  const { name, type } = options;

  const __names = names(name);
  const projectParentDirectory = type === 'lib' ? 'libs' : 'apps';
  const packageJSON = await readPackageJsonFile();

  const source = path.join(__dirname, type);
  const projectDirectory = `${projectParentDirectory}/${__names.fileName}`;
  const projectName = createProjectName(__names.fileName, packageJSON.name);

  generateFiles(tree, source, projectDirectory, {
    projectDirectory,
    projectName,
    mp: packageJSON,
  });

  await updateTsconfigRef(projectDirectory);

  await formatFiles(tree);
}

export default projectGenerator;
