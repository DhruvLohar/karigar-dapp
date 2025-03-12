import { z } from "zod";

export const formSchema = z.object({
  title: z.string().min(5, { message: "Title must be at least 5 characters." }),
  description: z.string().min(20, { message: "Description must be at least 20 characters." }),
  workshopType: z.string({ required_error: "Please select a workshop type." }),
  workshopLevel: z.string({ required_error: "Please select a workshop level." }),
  date: z.date({ required_error: "Please select a date." }),
  duration: z.number().min(1).max(8),
  address: z.string().min(5, { message: "Address must be at least 5 characters." }),
  price: z.string().refine((val) => !isNaN(Number(val)), { message: "Price must be a number." }),
  materials: z.string().optional(),
  maxParticipants: z.string().refine((val) => !isNaN(Number(val)), { message: "Must be a number." }),
  teachingMethod: z.enum(["demonstration", "hands-on", "combined"], {
    required_error: "Please select a teaching method.",
  }),
  includeTakeHome: z.boolean().default(false),
});
