import { ValueRequiredError } from '@opentoolbox/errors';
import type { Some } from '@opentoolbox/types';

/**
 * Throw error if the value is undefined, or return the value
 *
 * @param value {@link !Some}<T>
 * @throws error {@link !ValueRequiredError}
 */
export function valueOrThrow<T>(value: Some<T>): never | T {
  if (value == undefined) throw new ValueRequiredError();

  return value;
}
