import type { Any } from './any.js';

/**
 * Optional value
 */
export type Some<T = Any> = T | undefined | null;
