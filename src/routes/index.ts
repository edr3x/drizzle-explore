import { Router } from "express";

import user from "./user.route";
import post from "./post.route";

export const router = Router();

router.use("/user", user);
router.use("/post", post);
