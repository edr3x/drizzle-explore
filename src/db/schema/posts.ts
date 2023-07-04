import { pgTable, text, varchar, uuid } from "drizzle-orm/pg-core";
import { InferModel } from "drizzle-orm";

import { users } from "./users";

export const posts = pgTable("posts", {
    id: uuid("id").primaryKey(),
    title: varchar("title"),
    description: text("description"),
    userId: uuid("user_id").references(() => users.id),
});

export type Post = InferModel<typeof posts, "select">;
export type NewPost = InferModel<typeof posts, "insert">;
