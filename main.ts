// One Line, One Laugh — writes the entry's single funny line to /output/entry.txt.
// Deterministic: no clock, no randomness, no network. Node 22, stdlib only.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "My landlord raised the rent again, citing market rates. I looked outside. The market is one guy.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
// No trailing newline: the byte count is this round's first tie-break.
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
