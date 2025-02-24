import rateLimit from "express-rate-limit";
import { AppError } from "../utils/app-error";
import { createRequestLogger } from "../utils/logger";
import { Request } from "express";

export const createRateLimiter = (options: {
  windowMs?: number;
  max?: number;
  message: string;
}): ReturnType<typeof rateLimit> => {
  return rateLimit({
    windowMs: options.windowMs || 15 * 60 * 1000,
    max: options.max || 100,
    handler: (req, _res, next) => {
      const logger = createRequestLogger(req as unknown as Request);
      logger.error("Rate limit exceeded");
      next(AppError.tooManyRequests(options.message));
    },
    keyGenerator: (req) => req.requestId ?? req.ip ?? "",
  });
};

export const defaultRateLimiter = createRateLimiter({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: "Too many requests, please try again later",
});
