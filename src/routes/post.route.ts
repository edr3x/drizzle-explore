import { Router } from "express";

import * as PostController from "../controllers/post.controller";
import { verifyInput } from "../middlewares/validator.middleware";
import { createPostSchema } from "../validators/post.schema";

const router = Router();

router.get("/", PostController.getPosts);
router.post(
    "/:id",
    verifyInput(createPostSchema),
    PostController.createPostController,
);

export default router;
