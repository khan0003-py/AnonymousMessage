import { z } from "zod";

export const messageSchmea = z.object({
  content: z
    .string()
    .min(10, "Content must be of atleast 10 characters")
    .max(10, "Content must be no longer than 300 characters"),
});
