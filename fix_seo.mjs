import { readFile, writeFile } from "node:fs/promises";
for (const f of ["public/robots.txt", "public/sitemap.xml"]) {
  const raw = await readFile(`E:/Downloads/astelica-kasdea/${f}`, "utf8");
  const crlf = raw.includes("\r\n");
  const t = raw.replace(/\r\n/g,"\n").split("lunie.vtube-info.xyz").join("astelica-kasdea.vtube-info.xyz");
  await writeFile(`E:/Downloads/astelica-kasdea/${f}`, crlf ? t.replace(/\n/g,"\r\n") : t, "utf8");
  console.log(`  ${f}: done`);
}
