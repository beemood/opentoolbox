/**
 * Make selected properties optional
 */
export type PickOptional<T extends object, K extends keyof T> = Omit<T, K> &
  Partial<Pick<T, K>>;
