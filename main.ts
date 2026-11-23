import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One letter for your day: K — for "knackered".
// A day that wiped me out completely: utterly exhausted, done in.
// K is the sharp, non-obvious initial for it — it sounds like the word
// starts, and it beats the obvious picks (A for amazing, Z for zero sleep).
const LETTER = "K";
const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, LETTER, "utf8");
// Robustness: the gate requires exactly one character — verify the byte
// count we actually wrote, and fail loudly instead of passing silently.
const written = Buffer.byteLength(LETTER, "utf8");
if (written !== 1) {
  throw new Error(`expected to write exactly 1 byte, wrote ${written}`);
}
