import { Router } from "express";

import user from "./user.route";

export const router = Router();

router.use("/user", user);
