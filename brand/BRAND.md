# Lefties Carpet Cleaning — Brand Sheet

**Version 1.0 · 21 August 2026**
Built from `modeern_refresh_vecorise3.png` (20 Aug 2026). All assets in this folder are derived from that single master.

---

## 1. Read this first: the one real limitation

**There is no vector version of this logo.** The source is AI-generated raster art at 2560 × 2048 px. Everything here is a pixel image, cleaned and cut out, not redrawn.

What that means in practice:

| | Native pixels | Max clean print width @300 dpi | @200 dpi (signage, vehicle wrap) |
|---|---|---|---|
| Horizontal lockup | 1765 × 813 | **149 mm** | 224 mm |
| Droplet mark alone | 409 × 535 | **35 × 45 mm** | 52 × 68 mm |

Anything larger is interpolation — it will look soft. Files labelled `2048-print` for the mark are upscaled and are provided for convenience only.

**Recommended next step:** have the logo redrawn as a true vector (SVG/AI/EPS). It's a 1–2 hour job for a designer given these files as reference, and it removes the ceiling above permanently — van livery, pull-up banners, embroidery, anything. Until then, avoid committing to large-format print.

---

## 2. Which source file was used, and why

Four candidate files were on the Desktop, all 2560 × 2048 RGBA with no transparency (fully opaque backgrounds).

| File | What it is | Verdict |
|---|---|---|
| `modeern_refresh_vecorise.png` | Watercolour logo on a stained cream-fabric photo mockup | **Rejected** — a presentation mockup, not an asset. Textured background, watercolour splatter halo around the droplet |
| `modeern_refresh_vecorise2.png` | **Byte-for-byte identical** to the above (verified: zero differing pixels) | **Rejected** — exact duplicate, safe to delete |
| `modeern_refresh_vecorise3.png` | Clean flat art on near-white. **Teardrop** droplet mark | ✅ **MASTER** |
| `Modernize_and_vectorize_t...Retain_Refine.png` | Clean flat art on white. **Sphere/orb** mark, different swash-script "L" | Rejected as master — see below |

**Why file 3 won:**

1. **The mark is a teardrop, not an orb.** File 4's sphere reads as a bubble or a marble, not water. It also sits tight against the "L" and visually collides with it. File 3's teardrop is unambiguous and has breathing room.
2. **The wordmark is more legible.** File 3's "Lefties" is a bolder, straighter-sided italic that holds up at small sizes. File 4's looping swash "L" is prettier but tangles with the mark and falls apart on a van door or a 46 px website header.
3. Background uniformity favoured file 4 slightly (std dev 0.2 vs 1.4), but that's a trivial difference to key out and doesn't outweigh the design points.

**Watermarks:** every one of the four files carries a faint white "Ai" sparkle watermark in the top-left corner (approx. 60–110 px in from each edge, luminance ~224 against a ~253 background — nearly invisible but present). It was removed from the master before cutting out, and sits well outside the artwork bounds so nothing was lost.

---

## 3. Logo variants — and when to use each

### Primary — horizontal lockup
`logo/lefties-logo-horizontal-colour-*`
Droplet + Lefties + CARPET CLEANING + tagline. **The default.** Website header (desktop), letterhead, quotes, invoices, email signature.

### Compact — horizontal, no tagline
`logo/lefties-logo-compact-notagline-colour-*`
Same lockup with "Upholstery & Fabric Revival" removed. **Use this any time the logo will render under about 260 px wide** — the tagline becomes unreadable mush below that. Website header (it's currently sized to 46 px tall — use compact there), mobile nav, small ads, business card.

### On dark — colour droplet, white type
`logo/lefties-logo-horizontal-ondark-colourdrop-*`
`logo/lefties-logo-compact-notagline-ondark-colourdrop-*`
Keeps the glossy blue droplet, turns all type white. **Preferred for dark backgrounds** — footer, dark hero sections, navy social tiles. Retains the water character.

### Reverse — all white knockout
`logo/lefties-logo-horizontal-white-reverse-*`
`logo/lefties-logo-compact-notagline-white-*`
Single-colour white silhouette. Use where the droplet's gradient can't survive: one-colour printing, embroidery, etching, over photography, or on mid-tone brand blue where the colour droplet would disappear. Verified legible on navy, on black, and on Reef blue (#0071B6).

### Mono navy
`logo/lefties-logo-horizontal-navy-mono-*`
`logo/lefties-logo-compact-notagline-navy-*`
Single-colour #011B45. Fax-grade reproduction, newspaper ads, stamps, single-colour merch, any context where colour isn't available or isn't paid for.

> **Note on the one-colour marks:** in mono and reverse the droplet is a **solid silhouette** with no internal highlights. This is deliberate. The gloss highlights in the colour version are soft gradients — thresholding them into flat shapes produced ragged, blotchy fragments that read as damage rather than reflection. A clean solid teardrop is the correct one-colour reduction and it holds down to favicon size.

### Droplet mark alone
`mark/lefties-mark-droplet-{colour,white,navy}-*` — square canvas, centred, 14% padding.
Social profile pictures where the name appears next to the avatar anyway, app icons, favicons, watermarks on photos, a repeating pattern element.

### Favicons
`mark/lefties-favicon-{32,64,180,512}.png` (colour)
`mark/lefties-favicon-{32,64}-navy-solid.png`
**Use the navy-solid version at 32 px and below.** The glossy colour droplet is legible at 32 px but soft; the flat navy silhouette is crisper in a browser tab.

### Stacked / square lockup
`lockup/lefties-lockup-stacked-{colour,white,navy}-*`
Droplet above, name below. Use where the space is square or portrait — Instagram grid posts, vehicle rear doors, uniform chest print, sandwich boards, square ads.

### Instagram profile
`lockup/lefties-instagram-profile-1080-whiteBG.png` — **use this one.** Flattened white background, 1080 × 1080, artwork sized to 62% so nothing clips in Instagram's circular crop.
`lockup/lefties-instagram-profile-1080-navyBG.png` — navy alternative, colour droplet with white type.
`lockup/lefties-instagram-profile-1080-transparent.png` — transparent source if you want to place it on a custom background. Instagram does not honour transparency, so don't upload this one directly.

---

## 4. Colour palette

Sampled directly from the artwork pixels (median of fully-opaque interior pixels per element — not eyedropped off a screenshot). CMYK values are naive conversions for reference only; get a proof before committing to a print run.

| Name | Hex | RGB | CMYK (approx.) | Where it comes from |
|---|---|---|---|---|
| **Lefties Navy** | `#011B45` | 1, 27, 69 | 99 / 61 / 0 / 73 | "CARPET CLEANING" caps, rule lines. Primary dark |
| **Wordmark Deep** | `#00387F` | 0, 56, 127 | 100 / 56 / 0 / 50 | Bottom of the "Lefties" gradient |
| **Lefties Blue** | `#006EBF` | 0, 110, 191 | 100 / 42 / 0 / 25 | Middle of the "Lefties" gradient. **The core brand blue** |
| **Wordmark Light** | `#0095E0` | 0, 149, 224 | 100 / 33 / 0 / 12 | Top of the "Lefties" gradient |
| **Droplet Sky** | `#37B3F2` | 55, 179, 242 | 77 / 26 / 0 / 5 | Droplet mid-tone |
| **Droplet Ice** | `#6AEEFA` | 106, 238, 250 | 58 / 5 / 0 / 2 | Droplet bright rim |
| **Tagline Blue** | `#1884B5` | 24, 132, 181 | 87 / 27 / 0 / 29 | "Upholstery & Fabric Revival" |
| **Specular White** | `#FFFFFF` | 255, 255, 255 | 0 / 0 / 0 / 0 | Droplet highlights |

**The wordmark is a vertical gradient**, not a flat colour: `#0095E0` at the cap line → `#006EBF` through the x-height → `#00387F` at the baseline. If you're recreating brand elements in Canva, a linear gradient at roughly 90° between Wordmark Light and Wordmark Deep will match.

**Working set for everything else:** Lefties Navy for text, Lefties Blue for links and buttons, Droplet Sky for accents and highlights, white for surfaces. That's enough — resist adding more.

---

## 5. Typography

**Honest assessment: none of this is a real, licensable typeface.** It's AI-generated custom lettering. The giveaway is that the two "e"s in *Lefties* are not the same glyph — the first has a near-horizontal bar and a tighter aperture; the second is narrower with a more slanted bar and a different terminal angle. A real font repeats glyphs exactly. Don't go looking for the font; it doesn't exist.

**So: treat "Lefties" as a fixed image asset. Never re-typeset it.** Use the PNGs in this folder. If you need it at a size the pixels won't support, that's the vector redraw argument from section 1.

### What the lettering actually is

**"Lefties" (display):** Bold-to-extra-bold, sloped ~15–17°, near-monoline with slight modulation. Rounded, brush-like terminals cut on the diagonal. Straight-sided geometric "L" with a wedge foot, which doesn't match the rounded lowercase construction — a hybrid. Genuine "ft" ligature: the f's crossbar runs continuously into the t, and the f carries a deep curved descender. Slanted oval "i" dot, set well right of the stem. Open "s" spine. Overall: a bold humanist italic sans crossed with advertising script.

**"CARPET CLEANING" (caps):** Geometric sans, near-monoline, wide letterspacing around 0.14–0.18em. Circular C with vertically-cut terminals, pointed-apex A, straight-legged R, equal-arm E. Flanked by thin horizontal rules.

**"Upholstery & Fabric Revival" (tagline):** A true italic (not an oblique) humanist sans — note the **single-storey "a"**, which rules out Lato and most grotesques. Horizontal-bar e, straight y descender, angled cut terminals, italic ampersand.

### Google Font recommendations (free, work in Canva and on the web)

| Role | First choice | Alternates | Notes |
|---|---|---|---|
| Headlines / display companion | **Nunito ExtraBold Italic** | Mulish Black Italic, Raleway Bold Italic | Closest to the wordmark's rounded, sloped, humanist weight. Use for headlines *next to* the logo — never to rebuild it |
| Caps / subheads / buttons | **Montserrat SemiBold** | Jost Medium, Poppins Medium | Set at `letter-spacing: 0.15em; text-transform: uppercase` to match "CARPET CLEANING" |
| Tagline / body italic | **Source Sans 3 Italic** | Fira Sans Italic, PT Sans Italic | Chosen for the single-storey italic "a", which matches the artwork. Lato's italic "a" is double-storey and will look wrong |
| Body text | **Source Sans 3** or **Mulish** | — | Pairs with either of the above |

---

## 6. Clear space and minimum sizes

### Clear space

**x = ¼ the height of the droplet.**

At master scale the droplet is 409 × 535 px, so x = 134 px — about **7.6% of the lockup's total width**. Keep at least x of empty space on all four sides. Nothing intrudes: no text, no photo edges, no buttons, no other logos.

Quick version for Canva: if the logo is 800 px wide, leave ~60 px clear all round.

For the **mark alone**, x = ¼ of its own height. The square mark files already have 14% padding built in — that's slightly less than x, so don't crop them further.

### Minimum sizes

| Asset | Screen minimum | Print minimum |
|---|---|---|
| Full horizontal lockup (with tagline) | **260 px wide** | 45 mm wide |
| Compact lockup (no tagline) | **160 px wide** | 28 mm wide |
| Stacked lockup | **180 px wide** | 32 mm wide |
| Droplet mark alone | **24 px** | 6 mm |

Below 260 px the tagline stops being readable — switch to the compact variant rather than shrinking further. This was tested by rendering the lockup at 260 px and checking legibility, not estimated.

---

## 7. What not to do

- **Don't re-typeset "Lefties."** There is no font. Use the supplied files.
- **Don't stretch or squash.** Scale proportionally, always.
- **Don't rotate the lockup.** The droplet sits upright because it's a falling drop; tilting it breaks the read.
- **Don't recolour the droplet** to fit a campaign. It's blue water. Green or purple water is a different product.
- **Don't add effects** — no drop shadows, outer glows, bevels, or outlines. The droplet already carries its own gloss; anything on top reads as amateur.
- **Don't place the colour logo on a mid-tone or busy background.** Use the reverse (white) or on-dark variant. Over photography, always reverse.
- **Don't put the colour droplet on mid-blue.** It vanishes. Use `-white-reverse` on anything in the Lefties Blue range.
- **Don't use the transparent Instagram file as your profile picture.** Instagram flattens transparency to black. Use the `whiteBG` version.
- **Don't upscale beyond the limits in section 1.** It will look soft and clients notice.
- **Don't reintroduce the orb.** Pick one mark and stay with it — see section 8.
- **Don't recreate the lockup by placing the mark and typing the name.** Spacing, size relationships and the rule lines are all fixed. Use a supplied lockup file.
- **Don't use `modeern_refresh_vecorise.png` or `...2.png` for anything.** They're mockups with a printed fabric background baked in.

---

## 8. Conflict with the live website — read this

The rebuilt site at `~/Desktop/Lefties.claude/lefties-website/` **does not match this new logo.** Here's what's actually there, checked in the files rather than assumed:

**Correction to one assumption:** there is no `corelogotransparent.png` anywhere in the Lefties tree. The site uses `assets/img/logo.png` (440 × 193, RGBA) and `assets/img/logo-reverse.png`, referenced 17 and 16 times respectively across the HTML. The same two files appear identically in `lefties/`, `lefties-push/` and `lefties-website/` (verified by checksum) — three copies of one site.

**The good news: the conflict is much smaller than expected.** The site logo is not a foreign identity — it's the *previous generation of this same design* (dated 19 Aug, one day before the new files). Same "Lefties" wordmark family, same "CARPET CLEANING" caps, same tagline. Two things differ:

1. **The mark.** The site uses the **orb/sphere**; the new master uses the **teardrop**. This is the one genuine identity decision you need to make. My view: teardrop. It says "water" instantly, an orb says "bubble" or "globe," and the orb crowds the L.
2. **The palette**, and only partly.

| Site CSS token | Value | Closest new brand colour | Distance | Verdict |
|---|---|---|---|---|
| `--reef` | `#0071B6` | Lefties Blue `#006EBF` | 9.5 | **Effectively identical.** Leave it |
| `--ink` | `#10243E` | Lefties Navy `#011B45` | 18.8 | Very close. Optional tweak |
| `--reef-dark` | `#005A92` | Wordmark Deep `#00387F` | 38.9 | Noticeable but defensible as a shade |
| `--reef-lite` | `#6BC6FF` | Droplet Sky `#37B3F2` | 56.9 | **Update this one** — new is more saturated |
| `--ink-soft` | `#1B3557` | Tagline Blue `#1884B5` | 122.8 | Different roles; no action needed |

**A defect worth knowing about:** the site's current `logo-reverse.png` is **broken**. The white knockout left the orb in full colour, and chunks of "CARPET CLEANING" are missing — it renders as "C RPET CLEANING" with pieces eaten out of the letterforms. It's live in the footer on every page. Whatever else you decide, this needs replacing.

### What reconciliation actually takes

Roughly **30–45 minutes**, mostly file swapping. I've prepared drop-in replacements in `brand/website-dropin/`, padded to the site's existing 440:193 aspect ratio so **no HTML edits are required** — the `width="440" height="193"` attributes on all 33 img tags stay valid:

- `logo.png` (880 × 386, compact lockup, colour) → replaces `assets/img/logo.png`
- `logo-reverse.png` (880 × 386, white knockout) → replaces `assets/img/logo-reverse.png`, and fixes the broken file
- `favicon.png`, `favicon-32.png`, `apple-touch-icon.png` → replace the matching files

Then optionally, in `assets/css/lefties.css`:
```css
--ink: #011B45;        /* was #10243E */
--reef-lite: #37B3F2;  /* was #6BC6FF */
```

Two things left over:
- **`og-image.jpg`** (the social share card) still carries the old identity and needs rebuilding by hand.
- **Site fonts** are Bricolage Grotesque 700/800 for headings and Karla for body. Neither is close to the logo's geometric caps or humanist italic. This is not urgent — a logo doesn't have to share the UI typeface — but if you want tighter cohesion, Montserrat for headings and Source Sans 3 for body would echo the lockup directly.

Remember all three site folders (`lefties/`, `lefties-push/`, `lefties-website/`) hold identical copies. Whichever one actually deploys, swap the assets there — or in all three to avoid confusion later.

---

## 9. Getting these into Canva

Canva's API is read-only for brand kits, so these can't be pushed in programmatically — they need uploading through the Canva UI (Brand Hub → Brand Kit → Logos, and Brand Kit → Colours for the hex codes).

Filenames are written to make that obvious. The pattern is:

```
lefties-{what}-{variant}-{colourway}-{size}.png
```

Upload to Canva's Logos section:
- `logo/lefties-logo-horizontal-colour-w1600@2x.png` — primary
- `logo/lefties-logo-compact-notagline-colour-w1600@2x.png` — small-size version
- `logo/lefties-logo-horizontal-white-reverse-w1600@2x.png` — for dark backgrounds
- `logo/lefties-logo-horizontal-navy-mono-w1600@2x.png` — one-colour
- `mark/lefties-mark-droplet-colour-1024@2x.png` — mark alone
- `lockup/lefties-lockup-stacked-colour-w2000@2x.png` — square formats

Then paste the eight hex codes from section 4 into Brand Kit → Colours, and set Montserrat + Source Sans 3 as the brand fonts.

---

## 10. Folder map

```
brand/
├── BRAND.md                    ← this file
├── logo/                       horizontal lockups, web sizes (@1x 800px, @2x 1600px)
├── mark/                       droplet alone (square) + favicons
├── lockup/                     stacked/square lockups + Instagram profile files
├── print/                      largest available size of every variant
├── website-dropin/             exact replacements for the live site's asset filenames
└── _source/
    └── lefties-MASTER-horizontal-transparent-1765x813.png
```

`_source/` holds the archival cutout at full native resolution with a clean alpha channel. **Every other file in this folder was derived from it.** If you ever need a variant that isn't here, start from that file — not from the originals on the Desktop.

### How the cutout was made

For the record, since "remove the white background" is where most logo cutouts go wrong:

The background was keyed on a combined saturation-and-darkness score rather than on brightness alone, because a brightness key eats the white specular highlights inside the droplet. Background pixels were then identified by **connectivity** — flood-filled inward from the image border — so that enclosed white regions survive by default. Enclosed regions inside the droplet's bounds were kept opaque (the gloss highlights); enclosed regions everywhere else were knocked through (the counters of e, o, p, R, A, G and so on). Antialiased edge pixels were colour-decontaminated by un-premultiplying against the measured background colour, which is what removes the white halo you'd otherwise get on dark backgrounds.

Verification: every ink pixel came out fully opaque (alpha = 255, no pinholes), and compositing the cutout back over the original background reproduces the source to within a mean error of 1.3 levels out of 255. Each variant was then rendered over white, navy, black, magenta and mid-blue and inspected.
