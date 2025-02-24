import { Request, Response, NextFunction } from "express";
import { AppError } from "../utils/app-error";
import { internalServer } from "../utils/response";

interface ErrorResponse {
  error: string;
  code: string;
  details?: unknown;
  originalError?: string; // Add this line
}

export const errorHandler = (
  error: Error,
  _req: Request,
  res: Response,
  _: NextFunction // DO NOT REMOVE!
): void => {
  console.error("Error:", error);

  if (error instanceof AppError) {
    const response: ErrorResponse = {
      error: error.message,
      code: error.code,
      details: error.details,
    };

    console.log("error!!!!", error);
    if (process.env["NODE_ENV"] !== "production" && error.originalError) {
      response["originalError"] = error.originalError.message;
    }
    res.status(error.statusCode).json(response);
    return;
  }

  const response = internalServer();
  res.status(response.statusCode).json(response.body);
};
