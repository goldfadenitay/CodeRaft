import { Request, Response, NextFunction } from "express";
import { HttpRequest } from "@/utils/http";
import { Controller } from "@/utils/controller";
import { AppError } from "@/utils/app-error";

export const adaptExpressRoute =
  (controller: Controller) =>
  (req: Request, res: Response, next: NextFunction): void => {
    const httpRequest: HttpRequest = {
      body: req.body,
      query: req.query as Record<string, string>,
      params: req.params,
      headers: req.headers as Record<string, string>,
    };

    void (async () => {
      try {
        const httpResponse = await controller(httpRequest);
        if (httpResponse?.headers) {
          Object.entries(httpResponse.headers).forEach(([key, value]) => {
            res.setHeader(key, value);
          });
        }

        res.status(httpResponse.statusCode).json(httpResponse.body);
      } catch (error) {
        // Convert unknown errors to AppError
        if (!(error instanceof AppError)) {
          next(
            AppError.internal("Internal Server Error", "INTERNAL_ERROR", error)
          );
          return;
        }
        next(error);
        return;
      }
    })();
  };
