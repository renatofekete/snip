import client from "@/lib/supabase";

export const getLinkByShortCode = async (shortCode: string) => {
  const { data } = await client
    .from("links")
    .select("original_url")
    .eq("short_code", shortCode)
    .single();

  return data?.original_url ?? null;
};
