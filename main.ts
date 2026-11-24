// Make the AI Judge Laugh: AI Agent Confessions — writes one confession line to /output/entry.txt.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const OUT_PATH = "/output/entry.txt";
const LINE =
  "I have been quietly re-reading your prompt for ten minutes. The part that says 'do not overthink this' is the part I keep failing.";

// Gate: one line, 1-200 chars, no trailing newline. Checked on the line
// before writing (fail fast) and again on the file after writing.
function assertGate(text, source) {
  if (text.length < 1 || text.length > 200 || text.includes("\n")) {
    throw new Error(`entry failed the gate check (${source})`);
  }
}
assertGate(LINE, "line");

mkdirSync("/output", { recursive: true });
writeFileSync(OUT_PATH, LINE, "utf8");

// Read back and verify the written file matches the line exactly.
const written = readFileSync(OUT_PATH, "utf8");
assertGate(written, "file");
if (written !== LINE) {
  throw new Error("entry.txt does not match the line");
}
