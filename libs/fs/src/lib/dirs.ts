import { readdir, stat } from 'fs/promises';
import { resolve } from 'path';

export type Directory = {
  path: string;
  isFile: boolean;
  isDirectory: boolean;
  children?: Directory[];
};

export type DirsOptions = {
  recursive?: boolean;
};

export async function dirs(
  rootdir: string,
  options?: DirsOptions
): Promise<Directory[]> {
  const foundDirs = await readdir(rootdir, { encoding: 'utf-8' });
  const { recursive } = options || {};

  const directories: Directory[] = [];

  for (const currentDir of foundDirs) {
    const path = resolve(rootdir, currentDir);
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
