/**
 * Identity strings, sourced from the real channel.
 *
 * Provenance, so nothing here has to be trusted on faith:
 *   - name, bio ................. YouTube channel description + X profile bio
 *   - avatar .................... yt3.googleusercontent.com (channel avatar)
 *   - join date ................. channel /about page, "Jan 26, 2021"
 *   - format .................... her own X bio: "L2D by @biittertaste &
 *                                  @saikafuri"
 *   - character credits ......... the same bio line
 *   - channels .................. the two accounts she posts on, plus the
 *                                  business address in her own X bio
 *   - hashtags .................. her own pinned tag-key post, which labels each
 *                                  one (General / Live / Art / Music / Meme)
 *
 * The content lists are NOT here. They come from /api/content at request time
 * and keep only a bundled snapshot in src/lib/useContent.ts, so there is one
 * place to look for broadcast data instead of two that can drift apart.
 */

export const site = {
  name: "Astelica Kasdea",
  /** Name as it appears on the channel, verbatim. */
  channelTitle: "Astelica Kasdea",
  /**
   * Her channel description, kept exactly as published. Read plainly it says
   * "a fallen angel living in the dream realms"; the second line is the part
   * that actually describes the work: music, singing, drawing, "anything about
   * creative visuals".
   */
  bio: "Hi! I'm a fallen angel living in the dream realms 🥀 I love music, singing and drawing! Anything about creative visuals! Nice to meet you~",
  /**
   * Production origin. The site is served from its own subdomain, so the origin
   * and the site URL are the same thing. Kept in sync with index.html,
   * robots.txt, and sitemap.xml.
   */
  url: "https://kasdea.vtube-info.xyz",
  locale: "id_ID",
  avatar: "/media/avatar-youtube.webp",
  avatarAlt:
    "Ilustrasi Astelica Kasdea: karakter dengan rambut merah muda, tanduk, dan mata bersinar",
  /** Smaller crop used for the nav mark, where the square version is too heavy. */
  avatarSmall: "/media/avatar-x.webp",
  joined: "Bergabung pada Januari 2021",
  /**
   * Character work credits, from the creator's own X bio.
   *
   * The bio says "L2D by @biittertaste & @saikafuri". That is the one place the
   * rig is stated, it is stated by her, and it names both illustrators -- so
   * this is the one row in the family of these sites where "Live 2D" is a claim
   * with a source behind it rather than an inference. Deidey's row works the
   * same way; see the rows where it is absent for the opposite reason.
   *
   * The marks are kept because they are how she wrote them, not normalised into
   * job titles she did not use.
   */
  credits: [
    { role: "L2D", name: "@biittertaste" },
    { role: "L2D", name: "@saikafuri" },
  ],
} as const;

export const channels = {
  youtube: {
    label: "YouTube",
    handle: "@AstelicaKasdea",
    url: "https://www.youtube.com/@AstelicaKasdea",
    note: "Stream dan cover",
  },
  x: {
    label: "X",
    handle: "@astelicakasdea",
    url: "https://x.com/astelicakasdea",
    note: "Update harian",
  },
  email: {
    label: "Email",
    handle: "kasdeavt@gmail.com",
    url: "mailto:kasdeavt@gmail.com",
    note: "Kerja sama",
  },
} as const;

/**
 * Route table.
 *
 * Owned here rather than in App.tsx so the nav and the router cannot disagree
 * about which paths exist. App imports the type; nothing else needs the list.
 */
export const ROUTES = [
  "/",
  "/tentang",
  "/konten",
  "/konten/streams",
  "/konten/video",
  "/konten/clips",
  "/tweets",
  "/fanart",
  "/channel",
] as const;

export type Route = (typeof ROUTES)[number];

/**
 * The tags shown on this site, in the categories she assigns them herself.
 *
 * This one is different from the others in the family and the difference is worth
 * keeping: those pages had to choose which of a creator's tags to show, because a
 * creator's timeline also carries event and community tags that are not about
 * them. She published a post that is a key -- "General: #AstelicaKasdea / Live:
 * #LicaLive / Art: #kasdeart / Music: #utanodea / Meme: #kasdeakocak" -- so the
 * list here is her own taxonomy, in her own order, and not a selection made here.
 *
 * #kasdeart additionally drives /fanart, so that route is searching a tag she
 * names for exactly that purpose rather than borrowing one. See HASHTAG in
 * api/fanart.ts.
 *
 * #DeaReverie, #VtuberID, #VTuberEN and #VTuberUprising sit in the same post but
 * are not listed: the first reads as a project rather than a category, and the
 * rest are community tags she used in passing rather than labels she defined.
 */
export const hashtags = [
  { tag: "#AstelicaKasdea", use: "Umum" },
  { tag: "#LicaLive", use: "Live" },
  { tag: "#kasdeart", use: "Fan art" },
  { tag: "#utanodea", use: "Musik" },
  { tag: "#kasdeakocak", use: "Meme" },
] as const;

/**
 * Series names exactly as they appear in the feed titles.
 * The "kind" column is a plain reading of what the title is about, not a claim
 * from the creator.
 *
 * Read off the titles rather than assumed. Her video tab is covers, nearly all of
 * them, so that is the spine of the column; the streams are game and chat titles
 * that do not repeat a name, and are not a series to claim.
 */
export const series = [
  { name: "Cover by Astelica Kasdea", kind: "Musik" },
  { name: "Handcam", kind: "Stream" },
] as const;

/**
 * Colophon. A credit line naming who built the page. Kept as a footnote, not a
 * showcase section.
 */
export const colophon = {
  /** Credit line. Replaces a former tool list, which described the stack rather than the person. */
  credit: "Developed by Sakamura",
} as const;

/**
 * Nav links.
 *
 * Every href is a full route, never a bare "#anchor". That is the fix for the
 * footer bug: on /konten, "#tentang" and "#channel" resolved against a page that
 * has neither section, so both looked clickable and did nothing. A path always
 * resolves, and the nav and the router now read the same table.
 *
 * `satisfies` ties every href to the Route union, so a typo becomes a type error
 * rather than a link that quietly goes nowhere.
 */
export const navigation = [
  { label: "Tentang", href: "/tentang" },
  { label: "Konten", href: "/konten" },
  { label: "Tweets", href: "/tweets" },
  { label: "Fan Art", href: "/fanart" },
  { label: "Channel", href: "/channel" },
] as const satisfies ReadonlyArray<{ label: string; href: Route }>;