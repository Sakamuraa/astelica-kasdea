# Astelica Kasdea

Situs perkenalan identitas VTuber **Astelica Kasdea**. Dibangun dari template
keluarga yang sama dengan Mizu, Pingu, Sierra, Deidey, Kanata, dan Lunie, tapi
tema dan datanya milik Kasdea sendiri.

## Yang terverifikasi

Tidak ada satu pun string di halaman ini yang tidak bisa ditelusuri ke sumbernya.

| | Sumber |
|---|---|
| Nama, bio | Deskripsi kanal YouTube + bio X |
| Avatar | `yt3.googleusercontent.com`, crop kanal |
| Tanggal gabung | `/about` kanal — **26 Januari 2021** |
| Format **Live 2D** | Bio X-nya sendiri: *"L2D by @biittertaste & @saikafuri"* |
| Kredit karakter | Baris yang sama di bio X-nya |
| Kanal | Dua akun yang dia pakai, plus alamat bisnis di bio X |
| Hashtag | Post "character sheet"-nya sendiri, yang dia beri label sendiri |
| Series | Dibaca dari judul feed |

Bio X-nya, persis:
> Hi! Virtual fallen angel living in her dreams, Kasdea here! 🥀 • 🎨 #kasdeart • L2D by @biittertaste & @saikafuri • Business inquiries ✉️ kasdeavt@gmail.com

Karena bio itu menyebut rig-nya secara langsung sambil memberi kredit, `Live 2D`
di sini adalah klaim **bersumber**, bukan tebakan. Di baris Paradox: bio itu
adalah satu-satunya tempat nama itu disebut, dan disebut olehnya sendiri.

### Hashtag

Lima tag, dan ini beda dari site-site lain di keluarga ini. Yang lain harus
memilih tag mana dari seorang kreator yang layak ditampilkan, karena timeline-nya
juga berisi tag acara dan komunitas. Kasdea punya post yang justru **kunci tag**:

```
General: #AstelicaKasdea
Live:    #LicaLive
Art:     #kasdeart
Music:   #utanodea
Meme:    #kasdeakocak
```

Jadi daftar di halaman ini adalah taksonomi dia sendiri, dengan urutan dia sendiri.
`#kasdeart` juga menggerakkan `/fanart`, jadi route itu mencari tag yang memang dia
tandai untuk keperluan itu.

Tag `#DeaReverie`, `#VtuberID`, `#VTuberEN`, `#VTuberUprising` ada di post yang
sama tapi tidak ditampilkan: yang pertama terbaca sebagai proyek, sisanya tag
komunitas yang ia pakai sekali, bukan label yang ia definisikan.

## Palet

```
base / midtone ......... #D96277   rose, merah yang mengalir di rambutnya
shadow ................ #48202E   marun pekat di tanduk, mahkota mawar, choker
highlight / glow ...... #FFB3B8   emas hangat di bawah mata dan di rantai
```

Hitungan kontras diukur, bukan dikira-kira. Tiga pasang tidak bisa memakai tone
brief secara langsung:

- **Rose `#D96277` tidak bisa jadi teks** di ground mana pun — 3.3:1 di terang,
  3.9:1 di gelap. Jadi `--accent` memakai rose lebih dalam di light, dan
  highlight di dark.
- **Putih di atas rose** cuma 3.1–3.3:1, jadi teks di atas fill rose memakai
  marun yang lebih gelap dari shadow (`#2E1019` → 4.95:1).
- **`--ink` berbalik mengikuti tema**, karena tombol utamanya `bg-ink text-bg`
  dan keduanya harus berlawanan.

## Tipografi

- **Cinzel** untuk display — digambar dari prasasti Romawi abad pertama, dan
  bobot kapital itu ikut dibawa ke huruf kecil, jadi setiap heading terbaca
  seperti **dipahat**, bukan diketik. Itu alasannya: "fallen angel" di sini dibaca
  sebagai kerajaan yang jatuh, dan kerajaan meninggalkan prasasti. Cinzel hanya
  untuk display karena x-height-nya rendah — bukan muka teks.
- **Epilogue** untuk body — sembilan bobot pada satu sumbu, dan tidak bersaing
  dengan display face yang sedeklaratif ini. Teks dibaca, heading dipandangi.

Keduanya dipasang sebagai variable font; build hanya menarik dua berkas
woff2 per subset.

## Stack

- Vite + React + TypeScript
- Tailwind v4 (token warna di `src/index.css`)
- Vercel Serverless Functions di `api/` — `content`, `viewers`, `chat`,
  `tweets`, `fanart`
- Data diambil real-time dari YouTube dan X, dengan snapshot fallback

## Menjalankan

```bash
npm install
npm run dev     # tidak menyajikan /api/* (itu serverless)
npm run build   # tsc -b && vite build
npm run lint
```

Deploy: import repo ini di Vercel. Build command `npm run build`, output
`dist`, folder `api/` terbaca sebagai Node functions.

## Credits

- **Developed by Sakamura**
- Gambar dan video milik [@AstelicaKasdea](https://www.youtube.com/@AstelicaKasdea)
- Fan art di `/fanart` milik kreatornya masing-masing