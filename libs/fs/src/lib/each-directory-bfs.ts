import { EachHandler } from '@opentoolbox/types';
import { Directory } from './dirs.js';

/**
 * Visit each directory and files starting from the top level directories and run {@link handler} function
 * If you want to rename files, do not use this function, use {@link eachDirectoryDfs } instead.
 * @param directories list of directories  {@link Directory}[]
 * @param handler function {@link EachHandler}
 */
export async function eachDirectoryBfs(
  directories: Directory[],
  handler: EachHandler<Directory>
) {
  for (let i = 0; i < directories.length; i++) {
    const current = directories[i];
    await handler(current, i, directories);
  }

  for (let i = 0; i < directories.length; i++) {
    const current = directories[i];
    if (current.isDirectory && current.children) {
      await eachDirectoryBfs(current.children, handler);
    }
  }
}
