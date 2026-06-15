# AGENTS.md

## Project overview

This repository is a photography portfolio website.

The primary goal is to make the photographs feel like the main subject.
The UI should support the photos, not compete with them.

## Design principles

- Prioritize photographs over decorative UI elements.
- Use restrained typography, spacing, and motion.
- Use interaction to reveal structure: a large photographic opening may settle into the grid as the user scrolls.
- Use a real grid system as the organizing structure, not as decoration.
- Prefer flush-left typography, strong scale contrast, and clear modular alignment.
- Keep the palette close to white, near-black, and one identifier accent.
- Treat white space as an active design element.
- Keep visual hierarchy clear.
- Avoid excessive gradients, shadows, cards, borders, and animations.
- Prefer calm, editorial, gallery-like layouts.
- Maintain consistency across desktop and mobile.

## Implementation rules

- Keep changes minimal and focused.
- Do not add new production dependencies unless necessary.
- Preserve the existing file structure where possible.
- Reuse existing components and design tokens before creating new ones.
- Avoid hard-coded one-off styles when a reusable class or variable is appropriate.

## Publishing and rights workflow

For public portfolio publishing tasks:

1. Confirm the site clearly identifies the photographer or owner.
2. Include a concise copyright notice for photographs, text, and site design.
3. State whether image reproduction, download, commercial use, or reposting is permitted.
4. Provide a contact path for print, usage, collaboration, or portfolio inquiries.
5. Keep legal and rights text quiet, readable, and secondary to the photographs.
6. Avoid overclaiming licensing terms unless the owner explicitly provides them.
7. Do not invent private contact details; use only contact routes provided by the owner.
8. Verify that public-facing metadata, navigation, and footer information remain consistent.

## UI improvement workflow

For UI improvement tasks:

1. Check available UI/design skills before editing.
2. For foundational redesigns, use these skills when available:
   - `muller-brockmann-grid-systems`
   - `vignelli-canon-design-system`
   - `portfolio-ui-review`
   - `photo-gallery-layout`
   - `visual-design-critic`
3. Extract the working criteria from those skills before changing code.
4. Evaluate the current UI before changing code.
5. Implement the smallest coherent set of changes that moves the design toward the selected system.
6. Re-evaluate the result against the design criteria.
7. Iterate up to 3 times.

## Interactive design workflow

For interactive portfolio tasks:

1. Preserve the photo-first goal before adding motion.
2. Prefer scroll-linked transformation that clarifies the layout, such as a large opening photograph settling into the grid.
3. Use a small fixed gallery index/title only when it helps orientation during browsing.
4. Keep interaction rules simple: opacity, scale, translation, clipping, and progress indicators are allowed; decorative motion is not.
5. Respect `prefers-reduced-motion` with a stable, readable layout.
6. Do not add production dependencies for animation unless the native platform is clearly insufficient.
7. Keep all interactive states compatible with the 12-column grid, baseline rhythm, and existing lightbox behavior.

## Foundational redesign criteria

When applying the Hyperagent design skills:

- Use a 12-column or modular grid with shared CSS variables for columns, gutters, margins, and baseline rhythm.
- Place major sections and gallery elements by grid lines, not arbitrary offsets.
- Keep typography grotesque/sans, flush-left, and limited in scale count.
- Use hierarchy through scale, weight, rules, and white space rather than decoration.
- Add a grid/debug overlay only if it shares the same content box and variables as the real layout.
- Preserve photography as the subject; the grid should organize the photographs, not overpower them.
- Avoid novelty typefaces, justified text, ornamental gradients, and decorative UI treatments.

## Interactive completion criteria

Interactive improvements pass only when:

- Opening state: the first viewport is dominated by a large photograph.
- Settlement state: scroll movement visibly resolves that photograph into the Swiss grid system.
- Gallery orientation: while browsing works, the current photo number/title updates without competing with the image.
- Motion restraint: no animation distracts from the photographs, and reduced-motion users get a stable layout.
- Maintainability: interaction state is driven by a small set of CSS variables/classes and plain JavaScript.
- Verification: `npm run lint` and `npm run build` pass.

## Public portfolio completion criteria

Public-facing portfolio updates pass only when:

- Ownership: the photographer/site owner is visible.
- Copyright: there is a clear `© YEAR Name` notice.
- Usage terms: visitors are told not to reproduce or use photographs without permission.
- Contact: there is at least one clear inquiry/contact route.
- Presentation: rights text does not compete with the photographs.
- Verification: `npm run lint` and `npm run build` pass.

## Verification

After UI changes, run available checks such as:

- npm run lint
- npm run build

If a local preview or screenshot workflow is available, use it.

## Final report

Always summarize:

- Skills used
- Files changed
- Design changes made
- Verification commands and results
- Remaining issues
