"use client";

import { createLink } from "@/app/actions";
import { useActionState } from "react";

export default function ShortenForm() {
  const [state, formAction] = useActionState(createLink, null);
  return (
    <form action={formAction}>
      <input type="text" name="url" placeholder="Enter URL" />
      <button type="submit">Shorten</button>
      {state?.error && <p>{state.error}</p>}
      {state?.shortCode && <p>snip.vercel.app/{state.shortCode}</p>}
    </form>
  );
}
