import { z } from "zod";

export const registerSchema = z.object({
    firstName: z.string().min(1, 'firstName is required').min(2).max(30, 'string should not exceed 30 characters'),
    lastName: z.string().min(1, 'lastName is required').min(2).max(35, 'string should not exceed 35 characters'),
    location: z.string().min(1, 'location is required').min(5).max(100, 'string should not exceed 100 characters'),
    occupation: z.string().min(1, 'occupation is required').min(5).max(100, 'string should not exceed 100 characters'),
    email: z.string().min(1, 'email is required').email(),
    picture: z.string().min(1, 'image is required'),
    password: z.string().min(1, 'password is required').min(5).max(20, 'password should not exceed 20 characters'),
    confirmPassword: z.string().min(1, 'confirmPassword is required').min(5).max(20, 'password should not exceed 20 characters'),
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords must be the same",
    path: ["confirmPassword"]
});


export const LoginSchema = z.object({
    email: z.string().min(1, 'email is required').email(),
    password: z.string().min(1, 'password is required').min(5).max(20, 'password should not exceed 20 characters'),
})