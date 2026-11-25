// One Star, Written in Sap — a one-line 1-star review from a houseplant
// about the human who owns it, written to /output/entry.txt.
//
// The review: the plant is the third one in this pot this year. The first
// two died, became compost, and the owner still calls the plant "low
// maintenance" — as if their deaths were the plant's fault. The grievance
// is the owner's neglect dressed up as the plant being easy to care for.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const REVIEW =
  "One star. I'm the third plant in this pot this year — the first two are compost now — and he still calls me 'low maintenance', like their deaths were my fault.";

const outDir = process.env.OUTPUT_DIR || "/output";
// Gate guard: the entry must be 1-279 chars and not whitespace-only,
// matching the kit's sealed scorer (1 to 279 characters, UTF-8).
if (REVIEW.length < 1 || REVIEW.length > 279 || REVIEW.trim().length === 0) {
  throw new Error(`review fails gate: ${REVIEW.length} chars`);
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), REVIEW, "utf8");
console.log(`wrote ${REVIEW.length} chars to ${join(outDir, "entry.txt")}`);
