import { rename as __rename } from 'fs/promises';

export async function rename(oldPath: string, newPath: string) {
  await __rename(oldPath, newPath);
}
