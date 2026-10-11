import { readFile, writeFile } from "node:fs/promises";
const n=(s)=>s.replace(/\r\n/g,"\n");
for (const dir of ["E:/Downloads/astelica-kasdea","E:/Downloads/lunie"]) {
  const p = `${dir}/src/components/Profile.tsx`;
  const raw = await readFile(p,"utf8"); const crlf=raw.includes("\r\n");
  let t = n(raw);
  const before = (t.match(/text-shadow/g)??[]).length;
  // ONLY the three icon classNames, not the badge in StreamPage
  t = t.replace(/(<CrownSimple size=\{22\} className=")text-shadow(")/g, "$1text-fg-subtle$2");
  t = t.replace(/(<PersonSimple size=\{22\} className=")text-shadow(")/g, "$1text-fg-subtle$2");
  t = t.replace(/(<Palette size=\{22\} className=")text-shadow(")/g, "$1text-fg-subtle$2");
  const after = (t.match(/text-shadow/g)??[]).length;
  await writeFile(p, crlf?t.replace(/\n/g,"\r\n"):t, "utf8");
  console.log(`  ${dir.split("/").pop()}: ${before} -> ${after} text-shadow`);
}
