/**
 * Error codes
 */
export enum ErrorCode {
  /**
   * Thrown when the value is undefined or null
   */
  VALUE_REQUIRED = 1000,

  /**
   * Thrown when search returns undefined
   */
  NOT_FOUND = 2000,

  /**
   * Throw when the input or access is not allowed
   */
  NOT_ALLOWED = 3000,
}
