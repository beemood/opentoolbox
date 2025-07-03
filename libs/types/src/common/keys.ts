import type { KeyOf } from './key-of.js';

/**
 * Object keys
 */
export type Keys<T extends object> = KeyOf<T>[];
