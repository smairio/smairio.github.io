# DESIGN.md — La devanture peinte

The visual world of this site is the **hand-painted Tunisian storefront**: enamel
shop signs, painted trade-lists, price boards, label plates screwed to the
facade. The site is the thing LamdaSoft sells — a proper storefront for a
business that only had a Facebook page. Chosen 2026-07-26 through the
impeccable new-work flow (seed key 0570d39e, assigned grounded direction,
user-confirmed on the decision page). Replaces the AstroWind default look
entirely; AstroWind remains the structural/technical base only.

## Physical scene

Read outdoors, in Tunisian daylight, on a mid-range Android — or shown from
the founder's phone in a meeting. Light theme only (`ui.theme: light:only`);
there is no night register. Contrast targets lean above AA because of sunlight.

## Palette — enamel sign paints

Defined as `--aw-color-*` custom properties in `src/components/CustomStyles.astro`;
components consume them through Tailwind tokens (`primary`, `accent`, …) and
the utilities below. Never hardcode hex in components.

| Role                                      | Value                         | Usage                                                                                                                                        |
| ----------------------------------------- | ----------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| Enamel green `--aw-color-primary`         | `#0E4B38`                     | The carrying colour (30–60% of the page): hero sign, footer shutter, plaques, links. White/plaster text on it ≥ 7:1.                         |
| Deep green (hover) `--aw-color-secondary` | `#093726`                     | Hover/pressed states of green elements.                                                                                                      |
| Ochre `--aw-color-accent`                 | `#E9A820`                     | Price plates and the primary CTA plate only. Ink text on it ≈ 9:1. Never for body text.                                                      |
| Signal red `--paint-red`                  | `#B93A1D`                     | Sparse accents on plaster only (underlines, one word, corner ticks). Never on green (vibration), never body text on plaster below 18px bold. |
| Plaster `--paint-plaster`                 | `#F4EEE1`                     | The wall: default page ground. Carries grain.                                                                                                |
| Ink `--aw-color-text-default`             | `#231F17`                     | Body text, borders, offset shadows.                                                                                                          |
| Muted ink `--aw-color-text-muted`         | `color-mix(ink 68%, plaster)` | Secondary text on plaster. On green surfaces, secondary text is tinted plaster (`#D8E4DC`), never gray.                                      |
| WhatsApp green                            | `#25D366`                     | Functional only: the WhatsApp glyph. Never decorative, never a surface.                                                                      |

## Type — sign lettering

- **Display: Archivo Black** (`@fontsource/archivo-black`, latin + latin-ext).
  Sign-painter slab-grotesque caps. Uppercase for sign lines and plaque labels,
  sentence case for long headings. Display max 6rem; tracking `-0.01em` at
  display sizes, `+0.06em` on small plaque caps.
- **Body/UI: Archivo** (`@fontsource-variable/archivo`, latin + latin-ext).
  Weights 400/500/700. Body 1.0625rem / 1.65. Measure 65–75ch.
- No other faces. No italics (sign painters letter upright); emphasis = weight,
  size, or paint colour.

## Component vocabulary

- **`.panneau`** — a painted panel section: enamel green field, inset double
  _filet_ border in plaster (2px outer + 1px inner via box-shadow), grain overlay.
- **`.plaque`** — label plate: plaster ground, 2px ink border, small offset
  block shadow, uppercase Archivo Black label. Section titles are plaques
  mounted ON the section's top border line (they cut the filet), like trade
  plates screwed to a facade — not floating eyebrows.
- **`.cta-plate`** — the button: ochre ground, 2px ink border, `4px 4px 0 ink`
  offset shadow. Hover: lifts (`translate(-1px,-1px)`, shadow 6px). Active:
  presses (`translate(3px,3px)`, shadow 1px). Radius 6px. Secondary variant:
  plaster ground, same hardware. Text buttons: painted underline links.
- **Painted underline** — links underline with a slightly thick (3px) brush
  stroke in red (on plaster) or ochre (on green), drawn left→right on hover
  via `background-size` transition.
- **`.vitrine`** — demo card as a mini-storefront: striped awning strip
  (repeating-linear-gradient, green/plaster), window area showing the demo's
  own painted sign (typography is the artwork — no icons standing in for
  content), plate with title + description, « En construction » as a small
  hanging tag while unfinished, screenshot behind glass once real.
- **`.filet`** — double-rule border grammar used for boards and dividers;
  corner ticks allowed. Sign-painter offset block shadows are native to this
  world and are not a slop finding.
- **Trade-list line** — items separated by `·` diamonds between two rules;
  the canonical secondary motif (hero subtitle, footer).

## Texture

One shared grain: inline SVG `feTurbulence` data-URI, `opacity ≈ .05`,
`mix-blend-mode: multiply` on plaster / `overlay` on green, applied through the
`.grain` utility's `::after`. No other noise, no glass, no gradient decoration
(the awning stripes are flat repeating stripes, not gradients).

## Imagery

- Authored painted typography is the primary imagery (vitrines, hero).
- Photography: only real photos, treated to be owned — **green duotone
  recipe**: grayscale → ink shadows `#231F17` → plaster highlights, grain on
  top (implemented in `scripts/duotone.mjs`). Street/shopfront subjects that
  ground the metaphor. Never untreated stock, never people presented as the
  team, never fake product screenshots. Demo screenshots (when demos ship) go
  in vitrines untreated, labelled « Projet de démonstration ».

## Motion

- **One authored moment:** hero sign paint-reveal on load — headline wipes in
  with a `clip-path` brush pass (~700ms `cubic-bezier(0.22,1,0.36,1)`), rules
  draw in (`scaleX`), CTA shadow sets. Runs once.
- Scroll reveals: existing intersect system, `translateY(16px)+fade`,
  400ms, same bezier. Content visible by default when JS is absent.
- Hover: plate press physics, underline draws. ≤200ms.
- Cross-page: `@view-transition { navigation: auto; }`; logo carries
  `view-transition-name: logo`. Firefox degrades to instant navigation.
- Everything inside `@media (prefers-reduced-motion: no-preference)`. No
  parallax, no marquee, no pulsing, no hover-scale on images.

## Bans (this project, this world)

- Blue anywhere. Purple anywhere. Gradient text. Glassmorphism. Dark mode.
- Icon-tile-above-heading card grids; icons standing in for authored content.
- Stats/metric heroes (the agency has no numbers — honesty law).
- More than the three paint colours + plaster + ink on any one screen.
- Any invented proof (see AGENTS.md rules — they outrank this file).

## Accessibility

Body contrast ≥ 4.5:1 everywhere (spot-check ochre and green surfaces after
any palette change); `:focus-visible` = 3px ink outline offset 2px (plaster
outline on green); keyboard reachable; reduced-motion fully static; touch
targets ≥ 44px.
