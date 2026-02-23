import { z } from "zod";

export const ContactSchema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.email("Invalid email address"),
    subject: z.string().optional(),
    message: z.string().min(1, "Message is required",)
});