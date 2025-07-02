import { workspaceRoot } from '@nx/devkit';
import { mkdir, rm } from 'fs/promises';
import { resolve } from 'path';
import { writeTextFile } from './write-text-file.js';
import { dirs } from './dirs.js';

describe('dirs', () => {
  const rootdir = resolve(workspaceRoot, 'tmp', 'test', 'fs', 'dirs', 'test');
  const testDirs = ['dir1', 'dir2'];
  const testFiles = ['dir1/fie1.txt', 'dir1/fie2.txt'];

  beforeAll(async () => {
    for (const filepath of testDirs) {
      await mkdir(resolve(rootdir, filepath), { recursive: true });
    }
    for (const filepath of testFiles) {
      await writeTextFile(resolve(rootdir, filepath), filepath);
    }
  });

  afterAll(async () => {
    await rm(rootdir, { recursive: true });
  });

  it('should found all dirs', async () => {
    const foundDirs = await dirs(rootdir);
    expect(foundDirs.length).toEqual(2);

    expect(foundDirs[0].isDirectory).toBeTruthy();
    expect(foundDirs[0].isFile).toBeFalsy();
    expect(foundDirs[0].path).toEqual(resolve(rootdir, testDirs[0]));
    expect(foundDirs[0].children).toBeUndefined();

    expect(foundDirs[1].isDirectory).toBeTruthy();
    expect(foundDirs[1].isFile).toBeFalsy();
    expect(foundDirs[1].path).toEqual(resolve(rootdir, testDirs[1]));
  });

  it('should find all files resucrively', async () => {
    const foundDirsRecursive = await dirs(rootdir, { recursive: true });

    expect(foundDirsRecursive.length).toEqual(2);
    expect(foundDirsRecursive[0].isDirectory).toBeTruthy();
    expect(foundDirsRecursive[0].isFile).toBeFalsy();
    expect(foundDirsRecursive[0].path).toEqual(resolve(rootdir, testDirs[0]));
    expect(foundDirsRecursive[0].children?.length).toEqual(2);

    expect(foundDirsRecursive[0].children?.[0].isFile).toBeTruthy();
    expect(foundDirsRecursive[0].children?.[0].isDirectory).toBeFalsy();
    expect(foundDirsRecursive[0].children?.[0].path).toEqual(
      resolve(rootdir, testFiles[0])
    );

    expect(foundDirsRecursive[0].children?.[1].path).toEqual(
      resolve(rootdir, testFiles[1])
    );

    expect(foundDirsRecursive[0].children?.[1].isFile).toBeTruthy();

    expect(foundDirsRecursive[1].isDirectory).toBeTruthy();
    expect(foundDirsRecursive[1].isFile).toBeFalsy();
    expect(foundDirsRecursive[1].path).toEqual(resolve(rootdir, testDirs[1]));
  });
});
