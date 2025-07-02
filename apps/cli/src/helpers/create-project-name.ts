export function createProjectName(
  projectName: string,
  sourceProjectName: string
) {
  const [orgname] = sourceProjectName.split('/');
  return `${orgname}/${projectName}`;
}
