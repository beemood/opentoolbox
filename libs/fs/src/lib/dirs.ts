import type { Directory } from '@opentoolbox/types';
import { readdir, stat } from 'fs/promises';
import { resolve } from 'path';
import { readJsonFile } from './read-json-file.js';
import { readTextFile } from './read-text-file.js';

export type DirsOptions = {
  /**
   * Recursively scan the root directory
   */
  recursive?: boolean;

  /**
   * Read content and store it
   */
  readContent?: boolean;

  /**
   * Read content and parse json
   */
  readJsonContent?: boolean;

  /**
   * File name expression such as .schema.json
   */
  expression?: RegExp;
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
  const { recursive, readContent, readJsonContent, expression } = options || {};

  const directories: Directory[] = [];

  for (const currentDir of foundDirs) {
    const currentAbsoluteFilePath = resolve(rootDirectory, currentDir);
    const fileStat = await stat(currentAbsoluteFilePath);

    const isFile = fileStat.isFile();
    const isDirectory = fileStat.isDirectory();

    if (isFile && expression && !expression.test(currentDir)) {
      continue;
    }

    const currentDirectory: Directory = {
      path: currentAbsoluteFilePath,
      isDirectory,
      isFile,
    };

    directories.push(currentDirectory);

    if (isFile && readContent) {
      currentDirectory.content = await readTextFile(currentAbsoluteFilePath);
    }

    if (isFile && readJsonContent) {
      currentDirectory.content = await readJsonFile(currentAbsoluteFilePath);
    }

    if (recursive && isDirectory) {
      currentDirectory.children = await dirs(currentAbsoluteFilePath, options);
    }
  }

  return directories;
}
