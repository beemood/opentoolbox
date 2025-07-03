import type { Any } from '../common/any.js';

/**
 * Directory/File metadata
 */
export type Directory<T = Any> = {
  path: string;
  isFile: boolean;
  isDirectory: boolean;
  children?: Directory[];
  content?: T;
};
