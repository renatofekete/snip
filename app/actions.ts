"use server";

import { linkSchema } from "@/lib/validations";
import client from "@/lib/supabase";
import { generateShortCode } from "@/lib/utils";

export const createLink = async (prevState: any, formData: FormData) => {
  const url = formData.get("url") as string;

  const result = linkSchema.safeParse(url);

  if (!result.success) {
    return { error: result.error.issues[0].message };
  }

  const shortCode = generateShortCode();

  try {
    const { data, error } = await client.from("links").insert({
      original_url: result.data,
      short_code: shortCode,
    });

    if (error) {
      return { error: error.message };
    }

    return { shortCode };
  } catch (e) {
    return { error: "Something went wrong" };
  }
};
