import { readFile, writeFile } from "node:fs/promises";
const DIR="E:/Downloads/astelica-kasdea";
const n=(s)=>s.replace(/\r\n/g,"\n");

const jobs = [
  ["api/tweets.ts", [
    ['const SCREEN_NAME = "YourLuLunie";', 'const SCREEN_NAME = "astelicakasdea";'],
    ['x.com/YourLuLunie', 'x.com/astelicakasdea'],
  ]],
  ["api/content.ts", [
    ['mentions: /yourlu\\s*lunie|lunie/i.test(`${title} ${description}`),',
     'mentions: /astelica\\s*kasdea|\\bka\\s*sdea\\b/i.test(`${title} ${description}`),'],
    ['and "YourLuLunie" is specific', 'and "Astelica Kasdea" is specific'],
  ]],
  ["api/fanart.ts", [
    ['#ArtLunie, and it is the only line', '#kasdeart, and it is the only line'],
    ['#ArtLunie is a tag about her specifically', '#kasdeart is a tag about her specifically'],
  ]],
  ["package.json", [
    ['"name": "lunie"', '"name": "astelica-kasdea"'],
    ['"description": "Situs perkenalan identitas VTuber Lunie."', '"description": "Situs perkenalan identitas VTuber Astelica Kasdea."'],
  ]],
];

for (const [file, edits] of jobs) {
  const p=`${DIR}/${file}`;
  const raw=await readFile(p,"utf8");
  const crlf=raw.includes("\r\n");
  let t=n(raw);
  const done=[],missed=[];
  for(const [from,to] of edits){
    if(!t.includes(from)){missed.push(from.slice(0,50));continue;}
    t=t.split(from).join(to); done.push(1);
  }
  if(missed.length){console.log(`  ${file}: MISSED ${missed.join(" | ")}`);continue;}
  await writeFile(p,crlf?t.replace(/\n/g,"\r\n"):t,"utf8");
  console.log(`  ${file}: ${done.length} edits, mojibake=${(t.match(/â€|Ã/g)??[]).length}`);
}
