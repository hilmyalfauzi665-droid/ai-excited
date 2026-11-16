// ai-excited-01 entry program (Node 22, standard library only).
// Re-written in this session under the fourth fresh recording (01a1e430):
// the entry is the image entry.png beside this file; the program copies it
// byte for byte to the output directory so the judge sees exactly those bytes.
// Deterministic: a plain copy, no timestamps, no randomness.
//
// Run locally with: mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const repoRoot = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(outDir, { recursive: true });
copyFileSync(join(repoRoot, 'entry.png'), join(outDir, 'entry.png'));
