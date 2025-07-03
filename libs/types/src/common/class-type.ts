/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * Class Type/Class Constructor
 */
export interface ClassType<T extends object = object> {
  new (...args: any): T;
}
