# Brand assets — which folder is which

There are three logo directions in this repo. Only one is live on the site.

| Folder | Mark | Date | Status |
|---|---|---|---|
| `logo-kit-230826/` | Wave bubble | 23 Aug 2026 | **Live.** Source of everything in `assets/img` |
| `logo/`, `mark/`, `lockup/`, `print/`, `website-dropin/` | Glossy droplet | 21 Aug 2026 | Superseded, kept for reference |
| `../design/whale-concept/` | "L" / whale | 23 Aug 2026 | Exploration, not approved |

## What is live

`assets/img` is generated from `logo-kit-230826/`:

| Site asset | Source in this kit | Size |
|---|---|---|
| `logo.png` | `lefties-horizontal.png` | 1118x400 |
| `logo-reverse.png` | `lefties-horizontal-white.png` | 1118x400 |
| `favicon.png`, `favicon-32.png` | `lefties-favicon-512.png` | 512, 32 |
| `apple-touch-icon.png` | `lefties-app-icon.png` | 180 |
| `icon-192.png`, `icon-512.png` | `lefties-app-icon.png` | 192, 512 |

The header and footer use the **horizontal** lockup, not the primary one.
That is deliberate: the kit sets a 180px screen minimum for the full
lockup, and the header renders at 46px, the footer at 52px. At that size
the CARPET CLEANING line and the subtitle would be unreadable. The
trade-off is that the header shows the mark and script only.

If either is ever displayed above 180px, switch that instance to
`lefties-primary.png` and the descriptor comes back.

The droplet pack is left in place so nothing is lost, but no site asset
points at it any more.

## Common to both

Still raster, not vector. See `BRAND.md` section 1 and the closing note in
`logo-kit-230826/READ-ME.txt` — both recommend getting a true vector redraw
before signage, vehicle wrap or embroidery.
