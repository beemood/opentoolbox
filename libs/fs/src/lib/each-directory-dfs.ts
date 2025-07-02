import { EachHandler } from '@opentoolbox/types';
import { Directory } from '@opentoolbox/types';

/**
 * Visit each directory and files starting from the deepest files/directories and run {@link handler} function
 * This function is useful if you want to rename files/directories
 * @param directories list of directories  {@link Directory}[]
 * @param handler function {@link EachHandler}
 */
export async function eachDirectoryDfs(
  directories: Directory[],
  handler: EachHandler<Directory>
) {
  for (let i = 0; i < directories.length; i++) {
    const current = directories[i];

    if (current.isDirectory && current.children) {
      await eachDirectoryDfs(current.children, handler);
    }
    await handler(current, i, directories);
  }
}
