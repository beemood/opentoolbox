export type EachHandler<T> = (
  value: T,
  index?: number,
  array?: T[]
) => void | Promise<void>;
