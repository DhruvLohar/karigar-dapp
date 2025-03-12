import { z } from "zod";

export const formSchema = z.object({
  title: z.string().min(5, { message: "Title must be at least 5 characters." }).default(""),
  description: z.string().min(20, { message: "Description must be at least 20 characters." }).default(""),
  workshopType: z.string({ required_error: "Please select a workshop type." }).default("craft"),
  workshopLevel: z.string({ required_error: "Please select a workshop level." }).default("beginner"),
  date: z.date({ required_error: "Please select a date." }).default(() => {
    const date = new Date();
    date.setDate(date.getDate() + 14); // 2 weeks from now, based on pre-workshop preparation
    return date;
  }),
  duration: z.number().min(1).max(8).default(3), // 3 hours based on timeline (15min + 30min + 2hr + 15min)
  address: z.string().min(5, { message: "Address must be at least 5 characters." }).default(""),
  price: z.string().refine((val) => !isNaN(Number(val)), { message: "Price must be a number." }).default("100"), // Based on pricing recommendation of $85-120
  materials: z.string().optional().default("Basic tool kit, Raw materials, Protective equipment, Handouts, Reference materials"), // From materials checklist
  maxParticipants: z.string().refine((val) => !isNaN(Number(val)), { message: "Must be a number." }).default("12"), // U-shape seating suggests smaller group
  teachingMethod: z.enum(["demonstration", "hands-on", "combined"], {
    required_error: "Please select a teaching method.",
  }).default("combined"), // Based on timeline showing both demo and hands-on practice
  includeTakeHome: z.boolean().default(true), // Based on materials and creation mentions
});
