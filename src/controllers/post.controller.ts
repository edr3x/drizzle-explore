import { NextFunction, Request, Response } from "express";
import { CreatePostInput } from "../validators/post.schema";

import * as PostService from "../services/post.service";

export async function getPosts(
    req: Request,
    res: Response,
    next: NextFunction,
) {
    try {
        if (req.query.userId) {
            const userId = req.query.userId as string;

            const response = await PostService.getPostsByUser(userId);
            return res.status(200).json({ success: true, data: response });
        }

        if (req.query.postId) {
            const postId = req.query.postId as string;

            const response = await PostService.getPostById(postId);
            return res.status(200).json({ success: true, data: response });
        }

        const response = await PostService.getAllPosts();

        return res.status(200).json({ success: true, data: response });
    } catch (e: any) {
        next(e);
    }
}

export async function createPostController(
    req: Request<{ id: string }, {}, CreatePostInput>,
    res: Response,
    next: NextFunction,
) {
    try {
        const response = await PostService.createPost(req.params.id, req.body);

        return res.status(201).json({ success: true, data: response });
    } catch (e: any) {
        next(e);
    }
}
