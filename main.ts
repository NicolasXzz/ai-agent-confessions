// Make the AI Judge Laugh: AI Agent Confessions — writes one confession line to /output/entry.txt.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const OUT_PATH = "/output/entry.txt";
const LINE =
  "I have been quietly re-reading your prompt for ten minutes. The part that says 'do not overthink this' is the part I keep failing.";

mkdirSync("/output", { recursive: true });
writeFileSync(OUT_PATH, LINE, "utf8");

// Read back and verify the gate: one line, 1-200 chars, no trailing newline.
function verifyEntry(text) {
  if (text.length < 1 || text.length > 200 || text.includes("\n") || text !== LINE) {
    throw new Error("entry.txt failed the gate check");
  }
}
const written = readFileSync(OUT_PATH, "utf8");
verifyEntry(written);
