import { vi, describe, it, expect } from "vitest";
import { tailwindAria } from ".";

describe("tailwind-aria", () => {
  const addVariant = vi.fn();
  tailwindAria(addVariant);

  it("should add boolean variants (eg: aria-atomic=true)", () => {
    expect(addVariant).toHaveBeenCalledWith(
      "aria-atomic",
      '[aria-atomic="true"]&'
    );
    expect(addVariant).toHaveBeenCalledWith(
      "peer-aria-atomic",
      ':merge(.peer)[aria-atomic="true"] ~ &'
    );
    expect(addVariant).toHaveBeenCalledWith(
      "group-aria-atomic",
      ':merge(.group)[aria-atomic="true"] &'
    );
  });

  it("should add enumerable variants (eg: aria-current=page)", () => {
    expect(addVariant).toHaveBeenCalledWith(
      "aria-current-page",
      '[aria-current="page"]&'
    );
    expect(addVariant).toHaveBeenCalledWith(
      "peer-aria-current-page",
      ':merge(.peer)[aria-current="page"] ~ &'
    );
    expect(addVariant).toHaveBeenCalledWith(
      "group-aria-current-page",
      ':merge(.group)[aria-current="page"] &'
    );
  });
});
