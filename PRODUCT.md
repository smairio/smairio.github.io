# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Tunisian small-business owners, roughly 35–60: lawyers, car-rental agencies, auto-écoles, wedding venues (salles des fêtes), guest houses (maisons d'hôtes), training centers. They run their business on paper notebooks, phone calls and a Facebook page. They are wary of young agencies — "agencies took my money and disappeared" is the objection heard in every meeting. They live on Facebook and WhatsApp, browse on mid-range Android phones over 4G, often outdoors or in a shop under harsh light. Secondary viewer: the same owner during a face-to-face meeting, being shown this site on the founder's phone as the pitch itself.

## Product Purpose

LamdaSoft is a two-person Tunisian agency (a developer and a salesman) selling websites, mobile apps, custom management tools, document digitalisation with AI, and cloud hosting to SMBs. The site's single job is converting a suspicious visitor into one WhatsApp conversation. Success = a WhatsApp message received. (User-confirmed 2026-07-26: serves all of Tunisia, no city anchor.)

## Positioning

Honesty as the mechanism, because trust — not technology — is the constraint. The claim a competitor could not truthfully copy: nothing on this site is invented — demos are labelled demos, the guarantee is written (50% at order, balance only if satisfied), claims are verifiable ("option d'hébergement de vos données en Tunisie", never "conforme"), and the agency says out loud that it is new. The offer is outcome-led: « Digitalisez votre entreprise » — from paper and phone chaos to simple tools.

## Operating Context

Sales happen through walk-ins, warm intros and WhatsApp — the site is checked _after_ first contact, or shown live in meetings from the founder's laptop/phone (`npm run preview` offline). Buyers pay cash/transfer with an avance; invoices matter to lawyers. The 7 portfolio demos (6 trade demos + AI document scan) are separate projects, all currently « En construction ». Blog exists for before/after content, currently empty by design. Strategy source of truth: `plans/first-client-plan.md` (outside this repo).

## Capabilities and Constraints

- Astro v6 + Tailwind v4 static site (AstroWind base), deployed to GitHub Pages on push to `main`; lamdasoft.tn cutover is issue #8.
- French only at launch. Arabic (RTL) and English deferred until a client justifies them.
- WhatsApp click-to-chat is the only conversion path; no contact forms, ever. All contact data lives in `src/contact.ts`.
- UNDECIDED FACT: the real phone/WhatsApp number. Placeholder `+216 00 000 000` ships as a visible TODO; every CTA is dead until replaced. (User signalled intent to provide it 2026-07-26 but no number was received — asked twice.)
- Must stay fast on 4G / mid-range Android; self-contained (no external CDNs, fonts self-hosted); demoable offline.
- Pricing truth: « À partir de 500 TND » on sites/apps only; everything else « sur devis ».

## Brand Commitments

- Name: **LamdaSoft** — keep the `Lamda` spelling. No logo, no photos, no palette exist (user-confirmed 2026-07-26: author everything).
- The six content rules in `AGENTS.md` are binding product law: no invented proof; demos labelled as demos; no compliance/certification claims; French only; services generic / proof concrete; WhatsApp-only conversion.

## Evidence on Hand

None. Zero clients, zero testimonials, zero case studies, zero photography, zero logo. The 7 demos are real projects-in-progress but not yet showable. Future work must not fabricate any of these; empty states must say why they are empty. External proof available later: registered auto-entrepreneur status (planned), local +216 number, lamdasoft.tn domain.

## Product Principles

1. **Never invent proof.** An honest empty state beats a dressed-up lie; one caught exaggeration ends the reputation in a small city.
2. **One path.** Every section funnels to the same action: open WhatsApp with a pre-filled message.
3. **The phone is the venue.** Design for a mid-range Android on 4G in daylight first; the desktop is the secondary screen.
4. **Plain French, verb-first.** The reader is a busy owner, not a tech buyer; one typo costs more than one missing feature.
5. **Show, don't tell.** Demos and concrete specifics do the persuading; adjectives don't.

## Accessibility & Inclusion

AA contrast minimum (harsh-light readability pushes toward higher). `prefers-reduced-motion` fully respected — animation is enhancement, never information. Non-tech readers: no jargon, no anglicisms where French serves.
