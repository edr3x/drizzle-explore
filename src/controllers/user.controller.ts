import { NextFunction, Request, Response } from "express";
import { CreateUserSchema } from "../validators/user.schema";

import * as UserService from "../services/user.service";

export async function createUserController(
    req: Request<{}, {}, CreateUserSchema>,
    res: Response,
    next: NextFunction,
) {
    try {
        const response = await UserService.createUser(req.body);

        return res.status(201).json({ success: true, data: response });
    } catch (e: any) {
        next(e);
    }
}

export async function getAllUserController(
    _req: Request,
    res: Response,
    next: NextFunction,
) {
    try {
        const response = await UserService.getAllUsers();

        return res.status(200).json({ success: true, data: response });
    } catch (e: any) {
        next(e);
    }
}

export async function getUserData(
    req: Request<{ id: string }>,
    res: Response,
    next: NextFunction,
) {
    try {
        const response = await UserService.getUserData(req.params.id);

        return res.status(200).json({ success: true, data: response });
    } catch (e: any) {
        next(e);
    }
}
