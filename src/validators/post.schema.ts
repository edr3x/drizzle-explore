import { z, TypeOf } from "zod";

export const createPostSchema = z.object({
    body: z.object({
        title: z.string().min(1).max(255),
        description: z.string(),
    }),
});

export type CreatePostInput = TypeOf<typeof createPostSchema>["body"];
