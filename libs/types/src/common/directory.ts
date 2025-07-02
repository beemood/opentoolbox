import { Any } from './any.js';

export type Directory<T = Any> = {
  path: string;
  isFile: boolean;
  isDirectory: boolean;
  children?: Directory[];
  content?: T;
};
