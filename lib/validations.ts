import { z } from "zod";

export const linkSchema = z
  .httpUrl({ error: "Please enter a valid URL" })
  .max(2000, { error: "URL must be less than 2000 characters" });
