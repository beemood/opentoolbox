export type ProjectType = 'lib' | 'api' | 'cli';

export interface ProjectGeneratorSchema {
  name: string;
  type: ProjectType;
}
