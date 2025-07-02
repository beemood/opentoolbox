/* eslint-disable @typescript-eslint/no-explicit-any */
export interface ClassType<T extends object = object> {
  new (...args: any): T;
}
