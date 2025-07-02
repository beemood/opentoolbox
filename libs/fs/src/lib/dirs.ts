import { readdir, stat } from 'fs/promises';
import { resolve } from 'path';
import { Directory } from '@opentoolbox/types';

export type DirsOptions = {
  recursive?: boolean;
};

/**
 * Scan the {@link rootDirectory}, find all files and directories, and map it to the {@link Directory} object
 * @param rootDirectory root directory to scan
 * @param options options {@link DirsOptions}
 * @returns directories {@link Directory}[]
 */
export async function dirs(
  rootDirectory: string,
  options?: DirsOptions
): Promise<Directory[]> {
  const foundDirs = await readdir(rootDirectory, { encoding: 'utf-8' });
  const { recursive } = options || {};

  const directories: Directory[] = [];

  for (const currentDir of foundDirs) {
    const path = resolve(rootDirectory, currentDir);
    const fileStat = await stat(path);

    const isFile = fileStat.isFile();
    const isDirectory = fileStat.isDirectory();

    const currentDirectory: Directory = {
      path,
      isDirectory,
      isFile,
    };

    directories.push(currentDirectory);

    if (recursive && isDirectory) {
      currentDirectory.children = await dirs(path, options);
    }
  }

  return directories;
}
