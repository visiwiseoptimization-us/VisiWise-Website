# VisiWise Journal — Figma Design Prompt
### Homepage Journal Section + Full Journal Subpage + SEO Developer Notes

> **Apply existing VisiWise brand** (colors, typography, logo) already established in the Figma file. Do not introduce new styles. This document covers layout, content, structure, and developer annotations only.

---

## PART 1 — HOMEPAGE: "Insights" Section (Update Existing)

### What to keep
The existing article list template is correct — keep it exactly as-is:
- Light/cream background section
- Full-width horizontal divider lines between each article row
- Each row: square thumbnail image left · title + metadata + "Read →" right
- Title: bold, dark olive, large
- Metadata row: Category · read time — lighter weight, smaller size
- "Read →" link below metadata

### What to add

**Show the top 3 articles in this template:**

Row 1:
- Thumbnail: placeholder image (landscape/nature/abstract)
- Title: **Why 55% of Small Businesses Struggle to Get Clients Online — And What Actually Works**
- Meta: Strategy · 7 min read
- Link: Read →

Row 2:
- Thumbnail: placeholder image
- Title: **The 6 Digital Tools Every Service Business Actually Needs**
- Meta: Tools · 5 min read
- Link: Read →

Row 3:
- Thumbnail: placeholder image
- Title: **What Your Website Is Costing You Every Month**
- Meta: Marketing · 6 min read
- Link: Read →

**Add a CTA button below the 3 rows:**
- Label: "View All Articles →"
- Style: outline or secondary button (matches existing button style in the file)
- Placement: centered below the third article row, with 40px top margin
- Links to: the full Journal subpage

**Divider below CTA:** full-width horizontal rule before the next section begins

---

## PART 2 — FULL JOURNAL SUBPAGE (New Page)

Design this as a **dedicated editorial/media publication page** — clean, content-forward, typography-driven. Think Morning Brew or The Hustle, not a standard blog. All content is from VisiWise — authoritative business insights for service business owners.

### Page title in browser tab:
"VisiWise Journal — Digital Marketing Insights for Service Businesses"

---

### Section 1 · Page Header
Full-width, same nav as all other pages.

**Headline (large, centered or left-aligned):**
> The VisiWise Journal

**Sub-headline:**
> Insights for business owners who want to grow smarter. No fluff — just what actually works.

**Below sub-headline — thin horizontal rule**

---

### Section 2 · Category Filter Bar
Directly below the header, before the article list.

Horizontal row of clickable filter pills:
**All · Strategy · Marketing · Tools · SEO · Industry**

- Active filter: filled/solid pill (matches primary button style)
- Inactive filters: outline pill, same size
- Filter bar has a subtle bottom border separating it from the article content

---

### Section 3 · Featured Article (Hero)

Full-width card — this is the editorial "cover story" treatment.

**Layout:** Two-column split
- **Left column (55%):** Large editorial image placeholder — full height of the card, no padding, image fills the frame
- **Right column (45%):** Content, padded 40–48px

Right column content:
- Small badge pill: "Featured · Strategy"
- Publication line: June 2025 · 7 min read
- **Large H2 headline:**
  > Why 55% of Small Businesses Struggle to Get Clients Online — And What Actually Works
- Body teaser (3–4 lines):
  > Most small businesses rely on referrals. That's not a strategy — it's a hope. Here's what the data says about digital visibility for service businesses, and a practical framework to fix it in 90 days.
- "Read the article →" link (bold, accent color, arrow nudges right on hover)

Card: rounded corners, subtle border, slight shadow or border treatment consistent with existing card style

---

### Section 4 · Article List (Remaining 6 Articles)

**Layout:** Use the same horizontal list template from the homepage — image left, content right, full-width dividers between rows. This keeps visual consistency between the homepage preview and the full page.

Each row:
- Square or 4:3 thumbnail (left, ~200px wide)
- Right side: category badge · title (H3) · 1-line teaser · read time · "Read →"

Articles to list (in order):

**Row 1:**
Tag: Tools
Title: **The 6 Digital Tools Every Service Business Actually Needs**
Teaser: Not 60 tools. Not a $2,000/month stack. Here are the six that actually matter.
Meta: 5 min read · May 2025

**Row 2:**
Tag: Marketing
Title: **What Your Website Is Costing You Every Month**
Teaser: A slow site, no clear CTA, and poor local SEO can cost you 10–30 leads a month without you realizing it.
Meta: 6 min read · May 2025

**Row 3:**
Tag: Marketing
Title: **LinkedIn for Service Businesses: A Practical Automation Guide for 2026**
Teaser: LinkedIn has the highest B2B lead-to-client conversion rate of any social platform. Here's how to use it.
Meta: 8 min read · April 2025

**Row 4:**
Tag: Strategy
Title: **How to Choose a Digital Marketing Agency Without Getting Burned**
Teaser: Red flags, green flags, and the five questions to ask before you sign anything.
Meta: 5 min read · April 2025

**Row 5:**
Tag: SEO
Title: **SEO for Local Service Businesses: What Actually Moves the Needle**
Teaser: Four things ranked by impact — and exactly how long each one takes to show results.
Meta: 7 min read · March 2025

**Row 6:**
Tag: Industry
Title: **The Real Cost of DIY Digital Marketing for Service Businesses**
Teaser: The real cost isn't the software subscription. It's 6–12 hours of your time, every week.
Meta: 6 min read · March 2025

---

### Section 5 · Newsletter CTA

Full-width band at the bottom of the article list, before the footer.

**Headline:** Get insights before they're published.
**Body:** Join business owners who read VisiWise weekly — strategy, tools, and market data. No spam. One email a week.
**Form:** Email input field + "Subscribe →" button side by side (pill shape, consistent with site style)
**Fine print below form:** "We respect your inbox. Unsubscribe anytime."

---

### Section 6 · Footer
Same footer as all other pages — no changes.

---

## RESPONSIVE BEHAVIOR

**Desktop (1280px+):**
- Featured article: 2-column split as described
- Article list: image left (~200px), content right, full-width dividers

**Tablet (900px):**
- Featured article: stacks vertically (image top, content below)
- Article list: image shrinks to ~120px or stacks

**Mobile (375–520px):**
- Featured article: image full-width, content below
- Article list rows: thumbnail on top, content below, OR thumbnail removed and text-only rows

---

## PART 3 — SEO METADATA DEVELOPER ANNOTATION

> **For the developer who codes from this Figma file:** The SEO metadata for each page is in `VisiWise_SEO_Head_Code.md`. Paste the relevant code block into the `<head>` tag of each exported page. This adds no visual elements and does not affect any layout, spacing, or design. It is purely invisible metadata.

**Per page, use:**

| Figma Page | Code Block to Use |
|---|---|
| Home | "Page 1 — Home" block |
| Explore Services | "Page 2 — Explore Services" block |
| About | "Page 3 — About" block |
| Journal (list page) | "Page 4 — Journal" block |
| Contact | "Page 5 — Contact" block |
| Each article page | The per-article schema block from `VisiWise_Journal_SEO_Framework.md` — find the article by title and paste its full `<head>` block |

**For each individual article page, the `<head>` code includes:**
- Meta description (unique per article)
- Open Graph title + description + image (controls LinkedIn/social share preview)
- Twitter Card
- Canonical URL (the article's permanent URL slug)
- `BlogPosting` JSON-LD — tells Google this is authoritative article content
- `FAQPage` JSON-LD — the primary trigger for Google AI Overview appearances

**One action required before launch:** Upload a 1200×630px branded image and set its URL in every `og:image` field. This image appears as the preview card whenever someone shares a link on LinkedIn, iMessage, or social media.

---

## ARTICLE PAGE TEMPLATE (for each individual article)

Each article needs its own Figma page/frame. Use this consistent template:

### Article page structure:

**Nav** — same as site-wide nav

**Article header (centered, max 760px wide):**
- Category badge pill
- H1 headline (large, bold)
- Publication meta row: By VisiWise Optimization · Date · Read time
- Thin horizontal rule

**TL;DR box (styled callout card):**
Label: TL;DR
Body: 2–3 sentence direct answer to the article's question
Style: slightly inset card, left accent border, matches card style from design system

**Featured image:** full-width (max 760px), rounded corners, 24px top + bottom margin

**Article body (760px max width, centered):**
- H2 subheadings throughout
- Body text at comfortable reading size (18px recommended)
- Pullquote treatment for key statistics (larger text, accent border left)
- At least one "Key Takeaways" box before the FAQ

**FAQ section:**
- H2: "Frequently Asked Questions"
- Accordion or stacked Q&A cards
- 4–6 questions per article (see SEO framework doc for exact questions per article)
- This section is critical for Google AI Overview visibility — make it visually distinct

**Article CTA (at end of every article):**
Card or banner:
Headline: Want us to handle this for you?
Body: Book a free 30-minute audit. We'll review your digital presence and tell you exactly what to fix first.
Button: "Book a Free Audit →" (primary)

**Related Articles (below CTA):**
"More from the Journal" — show 2 related article cards in a row (same thumbnail + title + read time format)

**Footer** — same as site-wide footer

---

*VisiWise Journal Figma Prompt · Homepage section + Full subpage + Article template + SEO developer notes*
