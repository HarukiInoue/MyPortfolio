---
name: photo-gallery-layout
description: Use this skill when improving image galleries, photo grids, lightbox flows, thumbnail sizing, responsive gallery layouts, and vertical/horizontal photo presentation.
---

# Photo Gallery Layout Skill

Use this skill for portfolio gallery layout improvements.

## Priorities

- Images should be large enough to appreciate.
- Mixed portrait and landscape images should feel intentional.
- Spacing should create rhythm without wasting screen space.
- The gallery should work well on mobile.
- Users should understand whether images are clickable.

## Layout guidance

- Prefer consistent rhythm over arbitrary masonry noise.
- Use generous spacing for editorial feeling.
- Avoid making every image look like a card unless the concept requires it.
- Keep captions subtle.
- Avoid heavy hover effects that distract from the photo.

## Mobile guidance

- Ensure tap targets are comfortable.
- Avoid overly dense grids on small screens.
- Make the first screen communicate the site's photographic identity.

## Evaluation

Score:

- Image size and presence / 10
- Grid rhythm / 10
- Mixed aspect ratio handling / 10
- Mobile gallery experience / 10
- Interaction clarity / 10
- Current-photo orientation / 10

## Interactive gallery guidance

- A fixed index/title panel may be used when it helps visitors understand where they are in a long gallery.
- The orientation UI must be smaller and quieter than the photographs.
- Use IntersectionObserver or equivalent viewport logic rather than scroll polling for per-photo gallery state when possible.
- Do not animate every thumbnail heavily; reveal and tracking should feel editorial, not like a product tour.

## Gallery completion threshold

Pass only when:

- Current-photo orientation is 8/10 or higher.
- Image size and presence remains 9/10 or higher.
- Mobile gallery experience remains 8/10 or higher.
