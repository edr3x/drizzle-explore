import { eq } from "drizzle-orm";
import { db } from "../db/connect";
import { NewPost, posts } from "../db/schema/posts";
import { CreatePostInput } from "../validators/post.schema";
import { users } from "../db/schema/users";
import { CustomError } from "../utils/custom_error";

export async function getAllPosts() {
    return await db.select().from(posts);
}

export async function getPostsByUser(userId: string) {
    const userDetails = await db
        .select()
        .from(users)
        .where(eq(users.id, userId));

    if (userDetails.length === 0) {
        throw new CustomError(404, "User not found");
    }

    return await db.select().from(posts).where(eq(posts.userId, userId));
}

export async function getPostById(postId: string) {
    const postDetails = await db
        .select()
        .from(posts)
        .where(eq(posts.id, postId));

    if (postDetails.length === 0) {
        throw new CustomError(404, "Post not found");
    }

    return postDetails[0];
}

export async function createPost(userId: string, post: CreatePostInput) {
    const userDetails = await db
        .select()
        .from(users)
        .where(eq(users.id, userId));

    if (userDetails.length === 0) {
        throw new CustomError(404, "User not found");
    }

    const insertvalue: NewPost = {
        ...post,
        userId: userId,
    };

    await db.insert(posts).values(insertvalue);

    return "Post created successfully";
}
