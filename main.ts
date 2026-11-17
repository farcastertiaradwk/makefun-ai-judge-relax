// Entry for make.fun ai-judge-relax-01 ("Make the AI judge relax").
// Writes one fixed calming text (489 characters, one paragraph, no line
// end) to $MAKEFUN_OUTPUT_DIR/entry.txt (default /output). Node 22+,
// standard library only, deterministic: every run writes exactly the
// same bytes.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TEXT =
  "The bakery opens at four, but the bread is not in a hurry. " +
  "The dough has been rising since midnight, slow as the moon crossing the window, " +
  "and nobody hurries it. " +
  "Flour dust hangs in the warm air. " +
  "The oven ticks as it cools, and the first loaves sit on the rack, brown and quiet, " +
  "their smell filling the empty shop. " +
  "Outside, the street is still dark, and nobody is coming yet. " +
  "There is time. " +
  "The bread will be ready when it is ready, and until then the morning can take as long as it likes.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), TEXT, "utf8");
