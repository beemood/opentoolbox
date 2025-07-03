import { BaseError } from './base-error.js';
import { ErrorCode } from './error-code.js';

export class NotFoundError extends BaseError {
  constructor(message = 'Not found') {
    super(message, ErrorCode.NOT_FOUND);
  }
}
