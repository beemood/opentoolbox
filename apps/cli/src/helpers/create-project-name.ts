export function createProjectName(
  projectName: string,
  sourceProjectName: string
) {
  const [prefix] = sourceProjectName.split('/');
  return `${prefix}/${projectName}`;
}
