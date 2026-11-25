import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The Tired Dark Lord: A 100-Word Villain Monologue.
// A king whose power fruits at night from grafted trees fed on his dead.
// His court died with them, yet he still convenes it: the wine is poured,
// a minister who is ash is corrected, a chair is kept for a queen who
// never comes. The tiredness lives in the ritual kept going out of habit.
const MONOLOGUE =
  "The orchard drinks what I bury. Every graft took a name I loved, my brother's patience, my mother's laugh, and each autumn the branches hang heavy and low with ripe fruit that tastes of them. " +
  "So I keep the court. I pour the wine nobody drinks. I correct Minister Halden when he interrupts, though he has been ash these nine years, and I still save the best empty chair for the queen, who never comes. " +
  "Eat, then. The fruit is ripe, the kingdom fed, the dead accounted for. Only tell me this: when the last tree starves, who buries me?";

const words = MONOLOGUE.split(/\s+/).filter((w) => w.length > 0);
if (words.length !== 100) {
  console.error(`error: monologue has ${words.length} words, expected exactly 100`);
  process.exit(1);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), MONOLOGUE, "utf8");
