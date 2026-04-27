import { vi } from "vitest";
import { getLinkByShortCode } from "@/lib/links";

const mockSingle = vi.fn();

vi.mock("@/lib/supabase", () => ({
  default: {
    from: () => ({
      select: () => ({
        eq: () => ({
          single: mockSingle,
        }),
      }),
    }),
  },
}));

describe("getLinkByShortCode", () => {
  it("returns URL for existing code", async () => {
    mockSingle.mockResolvedValue({
      data: { original_url: "https://google.com" },
    });

    const result = await getLinkByShortCode("abc123");
    expect(result).toBe("https://google.com");
  });

  it("returns null for non-existing code", async () => {
    mockSingle.mockResolvedValue({ data: null });

    const result = await getLinkByShortCode("nonexistent");
    expect(result).toBeNull();
  });
});
