import { rename as __rename, readdir, stat } from 'fs/promises';
import { resolve } from 'path';

export type ForEachFileOptions = {
  recursive?: boolean;
};

export type ForEachFileHandler = (
  absolutePath: string,
  index?: number,
  array?: string[]
) => void | Promise<void>;

export async function forEachFile(
  rootdir: string,
  handler: (
    absolutePath: string,
    index?: number,
    array?: string[]
  ) => void | Promise<void>,
  options?: ForEachFileOptions
) {
  const dirs = await readdir(rootdir);
  const absoluteDirs = dirs.map((e) => resolve(rootdir, e));

  if (!options?.recursive) {
    return absoluteDirs.forEach((value, index, array) =>
      handler(value, index, array)
    );
  }

  for (const r of absoluteDirs) {
    const fileStat = await stat(r);

    if (fileStat.isDirectory()) {
      absoluteDirs.unshift();
    }
  }
}
