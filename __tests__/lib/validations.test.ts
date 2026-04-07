import { linkSchema } from "@/lib/validations";

describe("linkSchema", () => {
  test("valid URL", () => {
    const result = linkSchema.safeParse("https://google.com");
    expect(result.success).toBe(true);
  });

  test("invalid URL", () => {
    const result = linkSchema.safeParse("invalid");
    expect(result.success).toBe(false);
    expect(result.error?.issues[0].message).toBe("Please enter a valid URL");
  });

  test("URL too long", () => {
    const result = linkSchema.safeParse(
      "https://example.com/" + "a".repeat(2000),
    );
    expect(result.success).toBe(false);
    expect(result.error?.issues[0].message).toBe(
      "URL must be less than 2000 characters",
    );
  });

  test("Empty string", () => {
    const result = linkSchema.safeParse("");
    expect(result.success).toBe(false);
    expect(result.error?.issues[0].message).toBe("Please enter a valid URL");
  });
});
