import { Router } from "express";

import * as UserController from "../controllers/user.controller";
import { verifyInput } from "../middlewares/validator.middleware";
import { createUserSchema } from "../validators/user.schema";

const router = Router();

router.get("/", UserController.getAllUserController);
router.get("/:id", UserController.getUserData);
router.post(
    "/",
    verifyInput(createUserSchema),
    UserController.createUserController,
);

export default router;
