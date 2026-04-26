import { getLinkByShortCode } from "@/lib/links";
import { NextResponse, NextRequest } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } },
) {
  const { slug } = await params;
  const url = await getLinkByShortCode(slug);
  if (url) {
    return NextResponse.redirect(url);
  }

  return NextResponse.json({ error: "Not found" }, { status: 404 });
}
