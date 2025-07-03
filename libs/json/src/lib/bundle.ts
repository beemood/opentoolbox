import type { Directory } from '@opentoolbox/types';

export type BundleOptions = {
  root: string;
  main: string;
};

/**
 * Bundle schema
 * @param options
 * @returns list of directories {@link !Directory}[]
 */
export async function bundle(): Promise<Directory[]> {
  // 1. read all schema files under the root directory and store them with using dirs function
  // 2. make all $ref paths absolute
  // 3. turn all $ref into definition with $id/title value
  // 4. move all definitions into the main schema
  //
  throw new Error('Not implemented');
}
