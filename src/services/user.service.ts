import { eq } from "drizzle-orm";

import { db } from "../db/connect";
import { users } from "../db/schema/users";
import { CreateUserSchema } from "../validators/user.schema";

export async function getAllUsers() {
    return await db
        .select({
            id: users.id,
            fullName: users.fullName,
            role: users.role,
        })
        .from(users);
}

export async function getUserData(id: string) {
    const userData = await db.select().from(users).where(eq(users.id, id));

    return userData[0]; // NOTE: drizzle have not implemented FindOne method yet so have to do this
}

export async function createUser(data: CreateUserSchema) {
    const user = {
        fullName: data.fullName,
        email: data.email,
        phone: data.phone,
    };

    await db.insert(users).values(user);

    return "User created successfully!";
}
