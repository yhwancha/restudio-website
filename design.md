# RESTUDIO Design Guide

> Based on `design_tokens_restudio-website.json` and the visual/content patterns of revation.co.kr.

## Design Direction

RESTUDIO should feel like a refined sustainability platform: quiet, technical, premium, and credible. The interface combines product/R&D seriousness with editorial whitespace and material-focused imagery.

Use the Revation reference as a mood and structure source, not as HTML/CSS to copy. Build new UI in React + Tailwind with local design tokens.

## Reference Findings

### Content Structure

Revation's Korean site is organized around a clear B2B sustainability story:

- Main: carbon reduction proof, company introduction, one-stop solution, system, process, clients, portfolio, news, instant quote.
- Service: RESTUDIO process, service value, WHY RESTUDIO, work scope, sustainable strategy, network, growth, clients, partners, certificates, awards.
- Products: material taxonomy and REPLAX product lines.
- Portfolio: large visual proof, project list, ESG-practicing brand message, eco-friendly service principles.
- ESG: ESG committee, environment/social/governance statements, awards, mission/vision/goal.

The repeated narrative is:

1. Environmental pressure and regulation are rising.
2. RESTUDIO reduces plastic through material, design, R&D, and manufacturing.
3. The service is one-stop: consulting → design → R&D → production → QC/delivery.
4. Credibility comes from clients, certificates, awards, measurable carbon reduction, and real portfolio imagery.
5. The main action is an instant quote/contact path.

### Visual Language

The reference uses a restrained two-color foundation:

- Warm beige background: `#E1D8CF`
- Deep green primary: `#43564A`
- Near black text: `#040000`
- Dark gray alternate section: `#3D3D3F`

Core visual patterns:

- Full-viewport hero with product/nature imagery and overlaid statement copy.
- Fixed header that shifts from transparent/light-on-image to beige/green after scroll.
- Very large editorial section titles with small uppercase eyebrows.
- Wide `1560px` content container and generous section rhythm.
- Alternating beige and deep green sections.
- Pill buttons with thin outlines and fill-on-hover behavior.
- Hashtag chips and material tags as rounded outline pills.
- Process graphics based on thin lines, dots, vertical timelines, and horizontal step systems.
- Image-heavy product/portfolio sections with large crops and simple captions.
- Client logos in long marquee rows.
- Card/list interactions driven by border lines, hover fills, and opacity changes rather than heavy shadows.
- Motion is slow, editorial, and scroll-triggered: reveal, line draw, subtle zoom, marquee.

## Tokens

### Font

Use Pretendard as the default Korean/UI font.

```css
font-family: Pretendard, "Apple SD Gothic Neo", "Noto Sans KR", sans-serif;
```

Optional: use a geometric Latin display face only for large English labels if the brand direction requires it. Otherwise keep Pretendard for consistency.

### Primary

Use the token file primary scale. The 600 step is the reference green extracted from the provided image.

| Token | Value | Use |
| --- | --- | --- |
| `primary.25` | `#F7FAF8` | subtle wash |
| `primary.50` | `#EEF4F0` | pale green background |
| `primary.100` | `#DDE8E0` | soft panel tint |
| `primary.200` | `#C1D2C7` | light border |
| `primary.300` | `#9FB8A8` | disabled/secondary visual |
| `primary.400` | `#789583` | muted accent |
| `primary.500` | `#5A725F` | hover accent |
| `primary.600` | `#43564A` | main brand green |
| `primary.700` | `#34443A` | active/dark hover |
| `primary.800` | `#26332B` | deep section |
| `primary.900` | `#17211B` | darkest foreground |

### Neutral

Use gray tokens for text and UI structure:

- `gray.900` `#171A20`: main text
- `gray.700` `#474B52`: secondary text
- `gray.500` `#878B93`: muted metadata
- `gray.300` `#D5D7DA`: hairline borders
- `gray.50` `#FAFAFA`: panel background
- `white` `#FFFFFF`: clean canvas

### Surface Pairing

Preferred pairings:

- Editorial light: background `primary.50` or `#E1D8CF`-like warm neutral, text `primary.800/900`.
- Brand dark: background `primary.600/800`, text `primary.25/50`.
- Product proof: white or pale surface with image-first content and thin `primary.200/300` borders.
- Data/proof widgets: white surface, gray text hierarchy, restrained primary accent.

## Typography

Use the typography keys from the token file:

- Hero: `d1sb`, `d1`
- Section: `h1sb`, `h1`
- Module: `h2sb`, `h2`
- Card/feature: `h3`, `h4`, `h5`
- Body: `b1`, `b2`
- Labels: `lb1`, `lb2`

Rules:

- Keep Korean copy word-wrapped by whole words: `word-break: keep-all`.
- Do not use ExtraBold; keep `SemiBold` / `600` as the maximum font weight.
- Use large type only where the layout has enough breathing room.
- Eyebrow labels are uppercase, compact, and usually green.
- English product/process labels can be larger and more graphic.
- Body copy should stay calm, factual, and readable.

## Layout

### Container

- Default max width: `1280px` for current site consistency.
- Reference-style wide layouts may expand up to `1560px` when image grids or portfolio rows need scale.
- Use responsive horizontal padding: `clamp(24px, 5vw, 64px)`.

### Section Rhythm

- Desktop public-page section padding: `120px` to `180px`.
- Tablet: `80px` to `120px`.
- Mobile: `64px` to `80px`.

Prefer fewer, stronger sections over many small blocks.

### Common Section Pattern

Use this composition often:

1. Small English eyebrow.
2. Large Korean/English headline.
3. Short explanatory paragraph.
4. Proof block: image, metric, process step, client logo, award, or product card.

## Components

### Buttons

Primary CTA:

- Pill radius: `borderRadius.full` or `xxlg`.
- Background: `primary.600`.
- Text: `white` or `primary.25`.
- Hover: `primary.700`.
- Use once per major section or screen.

Secondary CTA:

- Transparent background.
- 1px `primary.600` border.
- Text `primary.600`.
- Hover fills with `primary.600` and flips text to `primary.25`.

### Chips

Use rounded outline chips for:

- hashtags
- material tags
- process labels
- ESG terms

Default: border `primary.600`, text `primary.600`, no heavy fill.

### Cards

Use cards sparingly. This brand works better with images, lines, and structured rows than heavy boxes.

Allowed card styles:

- White or `primary.25/50` surface
- 1px border
- radius `m` to `lg`
- shadow `xs` only when layering is needed

Avoid colorful decorative cards and oversized shadows.

### Lists

For portfolio/service rows:

- Use full-width bordered rows.
- Keep title on left and detail/category on right on desktop.
- On hover, invert with a subtle `primary.50` or `primary.600` fill depending on background.

### Process

For consulting, design, R&D, production, delivery:

- Prefer line-and-dot systems.
- Use numbered `STEP.1` labels.
- Add short title + one-line explanation.
- On mobile, stack into a vertical timeline.

### Imagery

Use real product/material/process imagery wherever possible.

Image direction:

- tactile packaging
- paper mold texture
- material samples
- manufacturing/process details
- portfolio product crops
- clean natural light

Avoid generic nature-only imagery when users need to understand the product or service.

## Motion

Motion should be quiet and useful:

- fade-up on section entry
- slow image scale on hero
- line draw for process/timeline
- marquee for client logos
- button fill transition

Respect `prefers-reduced-motion`.

## Copy Tone

Tone: confident, technical, and clear.

Use:

- measurable proof: carbon reduction, regulation response, certification, portfolio count
- active benefit: faster quote, easier material selection, one-stop production
- sustainability language grounded in actual process

Avoid:

- vague eco-friendly claims without evidence
- overly emotional greenwashing copy
- government-style wording
- too many exclamation marks

## Tailwind Usage

Use Tailwind utilities for all new frontend work.

Preferred examples:

```tsx
<section className="bg-primary-50 px-page py-20 text-primary-900 md:py-32">
  <div className="mx-auto max-w-site">
    <p className="text-sm font-semibold uppercase text-primary-600">One-stop solution</p>
    <h2 className="mt-4 text-4xl font-bold leading-tight md:text-6xl">
      소재부터 납품까지, 한 번에 설계합니다
    </h2>
  </div>
</section>
```

If a token does not yet exist in Tailwind, add it through `@theme inline` in `src/index.css` instead of hardcoding repeated hex values.

## Do

- Use `primary.600` as the strongest brand anchor.
- Let imagery carry product credibility.
- Use large whitespace and thin borders.
- Keep CTA hierarchy simple.
- Show proof: clients, awards, certifications, measurable environmental impact.
- Keep Korean copy readable with word-level wrapping.

## Don't

- Do not copy Revation HTML/CSS classes directly.
- Do not introduce random saturated colors.
- Do not overuse gradients or decorative blobs.
- Do not use heavy card grids for every section.
- Do not make sustainability claims without a concrete product/process/proof nearby.
- Do not break the primary color system by adding one-off greens.

## References

- https://www.revation.co.kr/kr/
- https://www.revation.co.kr/kr/sub/company/greeting.asp
- https://www.revation.co.kr/kr/sub/product/list.asp
- https://www.revation.co.kr/kr/sub/portfolio/main.asp
- https://www.revation.co.kr/kr/sub/esg/esg.asp
