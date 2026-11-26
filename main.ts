import { mkdirSync, writeFileSync } from "node:fs";

// One-line roast of a smart home gadget: the motion-sensor bathroom
// light that mistakes a motionless sitter for a corpse.
const LINE =
  "My smart bathroom light switches off if I sit still too long, so it thinks I've died every time I use the toilet.";

// Gate: the entry must be exactly one non-blank line of 1-160 characters.
if (LINE.trim().length === 0 || LINE.length > 160 || LINE.includes("\n")) {
  throw new Error(`entry line invalid: ${LINE.length} chars`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
