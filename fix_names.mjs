import { readFile, writeFile } from "node:fs/promises";
const n=(s)=>s.replace(/\r\n/g,"\n");
const edits={
  "src/components/Channels.tsx":[["Di mana Lunie bisa ditemukan","Di mana Kasdea bisa ditemukan"]],
  "src/components/Fanart.tsx":[["Ilustrasi yang orang buat buat Lunie, diambil dari post bertanda","Ilustrasi yang orang buat buat Kasdea, diambil dari post bertanda"]],
  "src/components/Profile.tsx":[["Tentang Lunie","Tentang Kasdea"]],
  "src/components/Uploads.tsx":[["and Lunie does not stream every day","and Kasdea does not stream every day"]],
  "src/lib/paths.ts":[["`lunie.vtube-info.xyz`","`astelica-kasdea.vtube-info.xyz`"]],
  "src/lib/useFanart.ts":[["const FANART_TAG = \"#ArtLunie\";","const FANART_TAG = \"#kasdeart\";"],["encodeURIComponent(`#ArtLunie`)","encodeURIComponent(`#kasdeart`)"]],
  "src/lib/useTheme.ts":[['const STORAGE_KEY = "lunie-theme";','const STORAGE_KEY = "kasdea-theme";']],
};
for(const[file,list]of Object.entries(edits)){
  const p=file; const raw=await readFile(p,"utf8"); const crlf=raw.includes("\r\n");
  let t=n(raw); let ok=0,miss=[];
  for(const[from,to]of list){ if(!t.includes(from)){miss.push(from.slice(0,40));continue;} t=t.split(from).join(to); ok++; }
  if(miss.length){console.log(`  ${file}: MISS ${miss.join("|")}`);continue;}
  await writeFile(p,crlf?t.replace(/\n/g,"\r\n"):t,"utf8");
  console.log(`  ${file}: ${ok} edits`);
}
