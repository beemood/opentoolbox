import { writeFile } from 'fs/promises';

/**
 * Write text file (utf-8 encoding)
 * @param filepath filepath
 * @param content content
 */
export async function writeTextFile(
  filepath: string,
  content: string
): Promise<void> {
  await writeFile(filepath, content, { encoding: 'utf-8' });
}
