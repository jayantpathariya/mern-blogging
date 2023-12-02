import * as z from "zod";

export const SignInSchema = z.object({
  email: z.string().email("Please enter a valid email."),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters long.")
    .regex(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/,
      "Password must contain at least one uppercase letter, one lowercase letter, and one number."
    ),
});

export const SignUpSchema = z.object({
  fullname: z
    .string()
    .min(3, { message: "Name must be at least 3 characters long." })
    .refine((data) => data.trim() !== "", {
      message: "Name cannot be empty.",
      path: ["fullname"],
    }),
  email: z.string().email("Please enter a valid email."),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters long.")
    .regex(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/,
      "Password must contain at least one uppercase letter, one lowercase letter, and one number."
    ),
});
