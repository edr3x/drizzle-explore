import { z, TypeOf } from "zod";

export const createUserSchema = z.object({
    body: z.object({
        fullName: z.string({
            required_error: "Full Name is required",
        }),

        email: z
            .string({
                required_error: "Email is required",
                invalid_type_error: "Email must be a string",
            })
            .email("Not a valid email"),

        phone: z.string({
            required_error: "Phone is required",
        }),
    }),
});

export type CreateUserSchema = TypeOf<typeof createUserSchema>["body"];
