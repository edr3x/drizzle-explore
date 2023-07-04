import { pgEnum, pgTable, text, uuid, varchar } from "drizzle-orm/pg-core";
import { InferModel } from "drizzle-orm";

export const roleEnum = pgEnum("role", ["admin", "user"]);

export const users = pgTable("users", {
    id: uuid("id").defaultRandom().primaryKey().notNull(),
    fullName: text("full_name").notNull(),
    email: varchar("email", { length: 256 }).notNull(),
    phone: varchar("phone", { length: 256 }).notNull(),
    role: roleEnum("role").default("user").notNull(),
});

export type User = InferModel<typeof users, "select">;
export type NewUser = InferModel<typeof users, "insert">;
