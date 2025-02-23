import { Request, Response } from "express";
import { logger } from "@coderaft/utils/src/logger/logger";

export type LogContext = {
  requestId?: string;
  method?: string;
  url?: string;
  statusCode?: number;
  duration?: number;
  error?: Error;
};

export const createRequestLogger = (
  req: Request,
  startTime = Date.now()
): {
  info: (message: string, context?: Partial<LogContext>) => void;
  error: (
    message: string,
    context?: Partial<LogContext>,
    error?: Error
  ) => void;
  end: (res: Response) => void;
} => {
  const baseContext = {
    requestId: req.requestId,
    method: req.method,
    url: req.url,
  };

  return {
    info: (message: string, context: Partial<LogContext> = {}) => {
      logger.info(message, { ...baseContext, ...context });
    },
    error: (
      message: string,
      context: Partial<LogContext> = {},
      error?: Error
    ) => {
      logger.error(message, {
        ...baseContext,
        ...context,
        error: error
          ? {
              message: error.message,
              stack: error.stack,
            }
          : undefined,
      });
    },
    end: (res: Response) => {
      const duration = Date.now() - startTime;
      logger.info("Request completed", {
        ...baseContext,
        statusCode: res.statusCode,
        duration: `${duration}ms`,
      });
    },
  };
};

export { logger };
