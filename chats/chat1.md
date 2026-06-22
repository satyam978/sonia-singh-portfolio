# Sonia Singh Portfolio Site

_Started 2026-06-22 19:20 UTC_

---

## User

I want to create a personal website for a client. Take reference from the screenshot attached. And for context the client is Sonia Singh a news anchor and journalist. I will be adding some details about her past work as well as some companies she has worked with. "Hardly any knowledgeable journalist is unaware of Sonia Singh, who has made an incomparable contribution to the Hindi journalism world . Sonia Singh has been a well-known name in the electronic media , although  she has maintained a distance from the media for the past few years. We are mentioning Sonia Singh here because today is her birthday.  

When she left the TV news industry in 2012 , she was associated with Aaj Tak, serving as the channel's deputy editor. She also managed the channel's business desk. During that time, she was considered one of the best news anchors. Sonia Singh had carved a unique identity for herself in the TV news industry, and through her talent, she had achieved the level of success everyone dreams of in a very short time .

Sonia was also one of those anchors who  gained fame not only through anchoring but also through reporting and this was possible because she honed her talent in a very short time.

Her reporting on the automobile sector also established her identity , as her Aaj Tak show,  " Chakke Pe Chakka ,"  was immensely popular , and she anchored and reported on it. Back then, she became a source of inspiration for students pursuing careers in journalism , and she continues to be. She was as composed in her personal life as  she was in her anchoring.

Although Sonia was associated with Aaj Tak for a long time  , but before this she had worked with Zee News. Originally from Delhi, Sonia had covered Seoul Motor Show  , Paris Motor  Show  , Geneva Motor Show, besides many news events abroad for Aaj Tak. Sonia  , who  studied English (Hons) and then Master in Business Administration (MBA) from Delhi University"

## Assistant

_[tool: read_skill_prompt]_

_[tool: view_image]_

_[tool: update_todos]_

Building now! I have everything I need from the reference and bio.

_[tool: update_todos]_

_[tool: write_file]_

_[tool: ready_for_verification]_

_[tool: save_screenshot]_

_[tool: multi_screenshot]_

_[tool: show_to_user]_

Your website is live in the preview! Here's what's been built:

**Sonia Singh — Personal Website** includes 6 sections:

1. **Hero** — Large crimson serif name with blush background block, circular photo, Career Highlights cards (Aaj Tak, Zee News, India Today), and a "Get In Touch" CTA — styled after your reference
2. **About Me** — Full bio with pull quote, her photo, and 4 stats (15+ years, 3 networks, 3 international motor shows, 1 iconic show)
3. **My Journey** — Timeline: Zee News → TV Today/India Today → Aaj Tak
4. **Shows & Work** — 4 cards: Chakke Pe Chakka, Global Motor Show Coverage, Business Desk, On-Ground Reporting
5. **Previously Seen On** — Main roles (Aaj Tak, Zee News, India Today) in a white bar, then freelance chips (Doordarshan, RSTV, Times of India, PTI, The Quint)
6. **Contact + Footer**

**Design choices:** Playfair Display serif for headlines (journalistic, prestigious), DM Sans for body, crimson `#9B1C1C` from her business card, subtle hexagon background pattern matching your reference.

Let me know what you'd like to change — copy edits, layout tweaks, colors, adding more sections, or anything else!

## User

Address these comments from my teammates:

**Satty**:
<teammate-comment>Resolve all the comments</teammate-comment>

## Assistant

_[tool: get_comments]_

_[tool: read_file]_

Now I can map every comment to its anchor in the file. Let me address all 6:

1. **Hero name font** → match nav logo (weight 700, letter-spacing -0.01em)
2. **Remove outer red circle** → strip box-shadow from hero photo
3. **Replace with B&W photo** → apply grayscale filter to the about photo
4. **"Remove this too"** → remove the red border on the about photo (same visual theme as the red ring)
5. **"Remove this as well"** → remove the about-stats boxes (below the photo)
6. **Remove side hyperlinks** → remove the side-nav entirely

_[tool: str_replace_edit]_

Now let me resolve all the comments and verify the result.

_[tool: resolve_comments]_

_[tool: ready_for_verification]_

_[tool: save_screenshot]_

All 6 of Satty's comments are resolved ✓

Here's what changed:

- **Hero name** — font weight lightened to match the navbar logo style (700, same letter-spacing)
- **Red ring removed** — the double crimson border around the hero photo is gone
- **About photo** — now displays in black & white (grayscale) to match the B&W press photo style
- **About photo red border** — removed (consistent with removing the red ring)
- **Stats boxes** — the 4 stat blocks below the about photo are removed
- **Side nav links** — the vertical "my journey / previously seen on / get in touch" hyperlinks on the right edge are gone

Let me know if anything else needs adjusting!

## User

Go through the pasted text

## Assistant

_[tool: read_file]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: read_file]_

Now I have everything. Making all 4 edits in one go — CSS, HTML restructure, and JS.

_[tool: str_replace_edit]_

_[tool: ready_for_verification]_

The scroll animations are live on the About Me section. Here's what was implemented:

**Choreographed reveal sequence** (triggers once when 20% of the section enters the viewport):

| Element | Animation | Timing |
|---|---|---|
| **"About Me" label** | Fade + slide up 20px | 0s — instant |
| **Headline** | Swerves in from left (−120px, −4°), glow sweeps away | 0.2s delay, 0.9s cubic-bezier |
| **Profile photo** | Scales up from 85%→100% + fade | 0.7s delay |
| **Quote border** | Red line draws downward 0→100% height | 1.0s delay |
| **Quote text** | Fade + drift up 15px | 1.9s delay (after border finishes) |
| **Body paragraphs** | Fade + slide up 20px | 2.1s delay |

- Scroll past and back — **won't replay** (IntersectionObserver unobserves after first fire)
- Fully responsive — columns stack vertically on mobile
- No external libraries — pure CSS transitions + Intersection Observer

## User

Look at the comments and resolve them. Also replace the picture in about me with the picture attached.

## Assistant

_[tool: get_comments]_

Two changes: swap the photo + replace nav social text with icons (LinkedIn, Twitter, Instagram). Let me read the current nav first.

_[tool: read_file]_

_[tool: grep]_

_[tool: grep]_

_[tool: read_file]_

Got it. Now making both changes in one edit — icons + new photo.

_[tool: str_replace_edit]_

_[tool: resolve_comments]_

_[tool: ready_for_verification]_

_[tool: save_screenshot]_

Both changes are live ✓

- **Nav icons** — LinkedIn, X (Twitter), and Instagram SVG icons replace the text labels, top-right corner
- **About Me photo** — updated to the new colour photo you attached

Let me know what else you'd like to adjust!

