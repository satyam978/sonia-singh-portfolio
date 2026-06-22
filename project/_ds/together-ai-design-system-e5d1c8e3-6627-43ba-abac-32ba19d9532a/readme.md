# Together AI — Design System

> The design language of **Together AI**, the AI-native cloud: model inference, GPU
> clusters, and fine-tuning infrastructure for developer teams. This system encodes the
> brand's web surface — a near-black hero, a long ribbon of white technical content, and
> a single recurring piece of brand chrome: the three-color orange→magenta→periwinkle
> gradient ribbon. **The gradient is the brand.** There is no other illustration system.

## Sources

This system was authored from a **written brand specification** (the Together AI brand
guidelines document). No codebase, Figma file, or font binaries were attached. Where the
spec referenced proprietary assets, the nearest open substitutes were used and flagged —
see **Font substitution** below.

- Brand reference: together.ai marketing surface (hero / product / pricing / research /
  testimonials / footer).
- No source repo or Figma link was provided. If you have either, re-attach via the Import
  menu so the UI kit can be tightened against real component code.

---

## Brand at a glance

Together AI is AI cloud infrastructure presented with restraint and a single bold gesture.
Everything is dual-surface — a `#010120` near-black band, then a white band, then dark
again — with **no in-between greys**. The one decorative element is the brand gradient
ribbon, used at hero scale only. Two typefaces do the talking: a geometric display sans
for sentence-case narrative, and an uppercase monospace for every technical label. That
contrast — serious-mono labels, modern sentence-case headlines — is the brand's tonal joke.

### Font substitution ⚠️

The two primary faces are **proprietary** and were not supplied:

| Brand face | Role | Substitute used | Notes |
|---|---|---|---|
| **The Future** | Display sans (headlines + body) | **Inter** 400/500, `ss01` on | Tighten tracking ~0.6% at display sizes; never use ≥600. |
| **PP Neue Montreal Mono** | Uppercase mono (eyebrows, labels, buttons) | **JetBrains Mono** 500 | `text-transform: uppercase`, tracking bumped to ~0.04em. |

Substitutes are aliased to the brand family names in `tokens/fonts.css`, so all tokens
keep reading `The Future` / `PP Neue Montreal Mono`. **Please supply the licensed web-font
binaries** and we'll swap the `@font-face` blocks.

---

## CONTENT FUNDAMENTALS — how the brand writes

**Voice:** confident, technical, builder-to-builder. Together speaks to developers as
peers who ship. Copy is plain and declarative, never hyped.

- **Casing is the whole system.** Headlines are **sentence case** in the display sans
  ("Build what's next on the AI Native Cloud"). Every *label* — eyebrows, button text,
  table headers, tags — is **ALL-CAPS MONO** ("PRICING", "INFERENCE", "ON-DEMAND",
  "GA-DEC '25"). Never mix: a headline is never all-caps; a button label is never
  sentence-case mono.
- **Person:** addresses "you" the builder ("Build what's next", "Start building on
  Together AI"). First-person plural ("we") only for the company's own claims.
- **Technical specificity is the flex.** Real model names, GPU SKUs, token prices, dated
  release tags. The copy proves competence with specifics, not adjectives.
- **No emoji.** Ever. The mono labels carry all the "technical texture" the brand needs.
- **Tone of the joke:** the platform is serious enough to label sections in a monospace,
  modern enough to not put the headline in it. Lean into that contrast.

Examples to match:
- Eyebrow → `INFERENCE` · `THE TOGETHER PLATFORM` · `GA-DEC '25`
- Headline → "Build what's next on the AI Native Cloud" · "Grounded in cutting-edge research"
- Button → `GET STARTED` · `CONTACT SALES` · `SIGN IN`
- Caption / stat → `200+ MODELS` · `99.9% UPTIME`

---

## VISUAL FOUNDATIONS

**Color.** Dual-surface, no middle greys. `--color-canvas-dark` (`#010120`) and
`--color-canvas` (`#ffffff`) alternate band-to-band; that contrast carries elevation more
than any shadow. `--color-hairline` (`#ebebeb`) is the *only* soft surface — table-header
rows, toggle rails, 1px dividers. The signature decoration is one fixed three-stop
gradient (`#fc4c02` → `#ef2cc1` → `#bdbbff`); treat it as a single object — never crop to
one color, reorder stops, add a fourth, or shrink it to icon size. Mint (`#c8f6f9`) is the
only accent outside the gradient — hero secondary pills and pastel stat tiles.

**Type.** Two faces, covered above. Display sans 400/500 with negative tracking
(−1.92px @ 64px down to −0.16px @ 16px) for the poured-on-the-page feel; uppercase mono
500 with positive tracking (0.05–0.55px) for labels. Never let mono carry a paragraph;
never let the display sans carry a button label.

**Spacing.** 4px base unit. Marketing bands use 80px top/bottom (`--space-section`).
Cards sit at 24px interior, stat tiles at 32px. Pricing tables tighten — 12px vertical
rows — so they read like a sheet, not a marketing component.

**Backgrounds.** Flat color fields only. No photographic hero, no repeating texture, no
pattern. The single atmospheric effect is the gradient ribbon SVG in the hero. A dark
code-editor surface inside the white product band acts as a one-step polarity lift. The
giant `together.ai` wordmark at page bottom is tinted toward `--color-hairline` so it
reads as a faint stencil sign-off.

**Cards.** Lightly rounded (4px), hairline border, **no shadow**. They never float. On
dark bands the border is `--color-divider-dark` (`#26263a`). Elevation = surface contrast
+ hairline, full stop. The one soft drop-shadow (`rgba(1,1,32,0.1) 0 4px 10px`) belongs
*only* to the floating chat-launcher orb.

**Corner radii.** 4px is canonical everywhere. 3.25px appears only inside pricing sub-tabs
and outline buttons. 8px for feature-tab pills. `9999px` (full pill) exclusively for the
chat orb — the CTA pill is a slightly-rounded rectangle, never a full pill.

**Borders & dividers.** 1px solid hairline on light, 1px `#26263a` on dark. That's the
whole border system.

**Motion.** Restrained. Fades and short eases; no bounce, no decorative loops. Hover =
slight opacity / fill shift; press = subtle. Nothing flashy — the brand's confidence is in
the typography and contrast, not animation.

**Transparency / blur.** Minimal. Dark-band soft surfaces are *pre-blended* opaque values
(`#26263a`, `#313641`) rather than live translucency, so they stay crisp.

---

## ICONOGRAPHY

The brand surface is **nearly icon-free** — its visual identity rests on type and the
gradient, not an icon set. Where small UI glyphs appear (nav chevrons, table model marks,
the chat-orb glyph, social icons in the footer), they are simple line icons at a single
stroke weight.

- **No proprietary icon font** was supplied. We substitute **Lucide** (CDN) — a clean,
  consistent 2px-stroke line set that matches the brand's restraint. ⚠️ Substitution:
  swap for the real icons if/when a sprite or set is provided.
- **Emoji:** never used.
- **Unicode glyphs as icons:** avoid; use Lucide.
- **Logo / wordmark:** `together.ai`, lowercase, set in the display sans. See
  `assets/together-wordmark.svg` (text wordmark) and the footer stencil treatment.

Keep icons sparse. When in doubt, use a mono-caps label instead of an icon.

---

## INDEX — what's in this system

**Root**
- `styles.css` — global entry point (consumers link this). `@import` lines only.
- `readme.md` — this guide.
- `SKILL.md` — Agent-Skill manifest for downloadable use.

**`tokens/`** — CSS custom properties
- `fonts.css` · `colors.css` · `typography.css` · `spacing.css` · `radius.css`

**`assets/`** — `together-wordmark.svg`

**`guidelines/`** — foundation specimen cards (Design System tab): color, type, spacing,
gradient, elevation, radius.

**`components/`** — reusable React primitives (namespace shown by `check_design_system`):
- `buttons/` — `Button`, `IconButton`
- `surfaces/` — `Card`, `StatCard`
- `data/` — `Badge`, `DataTable`, `TogglePill`
- `forms/` — `Input`
- `navigation/` — `NavBar`, `Eyebrow`

**`ui_kits/together-website/`** — high-fidelity click-through of the marketing surface
(hero → product → research → pricing → testimonials → footer wordmark).
