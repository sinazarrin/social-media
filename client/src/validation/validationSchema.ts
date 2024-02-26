import { z } from "zod";


export const registerSchema = z.object({
    firstName: z.string().min(1,'firstName is required').min(2).max(30),
    lastName: z.string().min(1,'lastName is required').min(2).max(35),
    location: z.string().min(1,'location is required').min(5).max(100),
    occupation: z.string().min(1,'occupation is required').min(5).max(100),
    email: z.string().min(1,'email is required').email(),
    password: z.string().min(1,'password is required').min(5).max(20),
    confirmPassword: z.string().min(1,'confirmPassword is required').min(5).max(20),
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords must be the same",
    path: ["confirmPassword"]
});
