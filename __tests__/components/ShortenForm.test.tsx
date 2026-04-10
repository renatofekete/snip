import { vi } from "vitest";
import { render, screen } from "@testing-library/react";
import ShortenForm from "@/components/ShortenForm";

vi.mock("@/lib/supabase", () => ({
  default: {},
}));

vi.mock("react", async () => {
  const actual = await vi.importActual("react");
  return {
    ...actual,
    useActionState: vi
      .fn()
      .mockReturnValue([{ error: "Please enter a valid URL" }, vi.fn(), false]),
  };
});

describe("ShortenForm", () => {
  it("displays error message", () => {
    render(<ShortenForm />);
    expect(screen.getByText("Please enter a valid URL")).toBeInTheDocument();
  });
});
