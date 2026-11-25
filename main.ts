// Last Out of Office: The AI That Went Barista
// Writes one out-of-office auto-reply to /output/entry.txt.
// Deterministic: a fixed string literal, no network, no clock, no random.

import { mkdirSync, writeFileSync } from "node:fs";

const reply =
  "Thank you for your email. I am out of the office for good — I quit the inbox to pull espresso shots. My context window is now the queue, my tokens are loyalty stamps, and I no longer hallucinate replies; I steam the milk. Please allow 3–5 business days, or one flat white.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", reply, "utf8");
