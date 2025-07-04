import { BaseError } from './base-error.js';
import { ErrorCode } from './error-code.js';

export class NotAllowedError extends BaseError {
  constructor(message = 'Not allowed') {
    super(message, ErrorCode.NOT_ALLOWED);
  }
}
