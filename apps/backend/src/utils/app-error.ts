export class AppError extends Error {
  constructor(
    message: string,
    public readonly code: string,
    public readonly statusCode: number,
    public readonly details?: unknown
  ) {
    super(message);
    this.name = "AppError";
    Object.setPrototypeOf(this, AppError.prototype);
  }

  static badRequest(
    message: string,
    code: string = "BAD_REQUEST",
    details?: unknown
  ): AppError {
    return new AppError(message, code, 400, details);
  }

  static unauthorized(
    message: string,
    code: string = "UNAUTHORIZED"
  ): AppError {
    return new AppError(message, code, 401);
  }

  static forbidden(message: string, code: string = "FORBIDDEN"): AppError {
    return new AppError(message, code, 403);
  }

  static notFound(message: string, code: string = "NOT_FOUND"): AppError {
    return new AppError(message, code, 404);
  }

  static conflict(message: string, code: string = "CONFLICT"): AppError {
    return new AppError(message, code, 409);
  }

  static tooManyRequests(
    message: string,
    code: string = "TOO_MANY_REQUESTS"
  ): AppError {
    return new AppError(message, code, 429);
  }

  static internal(
    message: string = "Internal Server Error",
    code: string = "INTERNAL_ERROR"
  ): AppError {
    return new AppError(message, code, 500);
  }
}
