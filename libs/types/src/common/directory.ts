export type Directory = {
  path: string;
  isFile: boolean;
  isDirectory: boolean;
  children?: Directory[];
};
