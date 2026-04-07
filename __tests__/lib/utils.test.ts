import { generateShortCode } from "@/lib/utils";

describe("generateShortCode", () => {
  test("should generate a short code of length 6", () => {
    const shortCode = generateShortCode();
    expect(shortCode).toHaveLength(6);
  });

  test("returns alphanumeric code", () => {
    const shortCode = generateShortCode();
    expect(shortCode).toMatch(/^[a-zA-Z0-9]+$/);
  });

  test("expect 2 different codes", () => {
    const shortCode1 = generateShortCode();
    const shortCode2 = generateShortCode();

    expect(shortCode1).not.toBe(shortCode2);
  });
});
