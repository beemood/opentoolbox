import { BaseError } from './base-error.js';
import { ErrorCode } from './error-code.js';

/**
 * Thrown when the value is undefined or null with {@link ErrorCode.VALUE_REQUIRED}
 */
export class ValueRequiredError extends BaseError {
  constructor(message = 'Value is required!') {
    super(message, ErrorCode.VALUE_REQUIRED);
  }
}
