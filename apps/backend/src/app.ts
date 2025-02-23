import express, { RequestHandler } from "express";
import os from "os";
import { errorHandler } from "./middleware/error-handler";
import { performanceMonitor } from "./middleware/performance";
import { addRequestId } from "./middleware/request-id";
import { corsMiddleware } from "./middleware/cors";
import { defaultRateLimiter } from "./middleware/rate-limit";
// import exampleRouter from "@/domains/example/example.routes";
// import usersRoutes from "@/domains/users/users.routes";

const app = express();

// Add request ID first for logging
app.use(addRequestId);

// performance monitoring
app.use(performanceMonitor);

// CORS
app.use(corsMiddleware());

// Rate limiting
app.use(defaultRateLimiter as unknown as RequestHandler);

// Parse JSON bodies
app.use(express.json());

// Health check endpoint
app.get("/health", (_req, res) => {
  const health = {
    uptime: process.uptime(),
    timestamp: Date.now(),
    memory: process.memoryUsage(),
    cpu: os.cpus(),
    loadavg: os.loadavg(),
  };

  res.status(200).json(health);
});

// Routes
// app.use("/api/example", exampleRouter);
// app.use("/api/users", usersRoutes);

// Error handling should be last
app.use(errorHandler);

export { app };
