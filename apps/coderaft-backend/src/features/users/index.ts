import { Router } from "express";
import { adaptExpressRoute } from "@/middleware/adapt-express";
import { createNewUserController } from "./create-new-user/create-new-user.controller";

const router = Router();

router.post("/create", adaptExpressRoute(createNewUserController));

export default router;
