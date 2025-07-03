import type { ErrorCode } from './error-code.js';

export class BaseError extends Error {
  constructor(message: string, public readonly code: ErrorCode) {
    super(message);
  }
}
