/**
 * Make selected properties required
 */
export type PickRequired<T extends object, K extends keyof T> = Omit<T, K> &
  Required<Pick<T, K>>;
