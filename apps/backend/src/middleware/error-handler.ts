// Global error handling middleware

import { Request, Response, NextFunction } from "express";
import { AppError } from "../utils/app-error";
import { internalServer } from "../utils/response";

export const errorHandler = (
  error: Error,
  _req: Request,
  res: Response,
  _: NextFunction // DO NOT REMOVE!
): void => {
  console.error("Error:", error);

  if (error instanceof AppError) {
    res.status(error.statusCode).json({
      error: error.message,
      code: error.code,
      details: error.details,
    });
    return;
  }
  const response = internalServer();
  res.status(response.statusCode).json(response.body);
};
