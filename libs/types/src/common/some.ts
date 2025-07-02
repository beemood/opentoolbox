import { Any } from './any.js';

export type Some<T = Any> = T | undefined | null;
