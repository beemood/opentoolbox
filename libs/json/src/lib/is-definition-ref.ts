/**
 * Check the {@link referencePath} is json schema definition reference (#/definition...)
 * @param referencePath reference path
 * @returns
 */
export function isDefinitionRef(referencePath: string) {
  return referencePath.startsWith('#/definitions');
}
