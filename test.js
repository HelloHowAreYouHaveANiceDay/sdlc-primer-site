// A tiny test: after a build, the home page must exist and have a title and a heading.
const fs = require("fs");
const html = fs.readFileSync("_site/index.html", "utf8");
const checks = { "has a <title>": /<title>.+<\/title>/, "has an <h1>": /<h1[^>]*>.+<\/h1>/ };
let failed = 0;
for (const [name, re] of Object.entries(checks)) {
  const ok = re.test(html);
  console.log(`${ok ? "PASS" : "FAIL"}  ${name}`);
  if (!ok) failed++;
}
process.exit(failed ? 1 : 0);
