---
name: portfolio-ui-review
description: Use this skill when reviewing or improving the UI of a photography portfolio website. Focus on photo-first layout, visual hierarchy, spacing, typography, gallery flow, mobile viewing, and restrained visual design.
---

# Portfolio UI Review Skill

Use this skill before changing UI for a photography portfolio.

## Goals

- Make photographs the main subject.
- Reduce visual noise around images.
- Improve visual hierarchy and browsing flow.
- Preserve a calm, editorial, gallery-like feel.
- Ensure mobile viewing is strong.

## Review checklist

Evaluate the current page using these dimensions:

1. Photo dominance
2. Visual hierarchy
3. Spacing and rhythm
4. Typography
5. Gallery layout
6. Mobile usability
7. Contact / SNS navigation
8. Implementation maintainability
9. Interactive photo reveal
10. Scroll-to-grid settlement

## Required workflow

1. Inspect the current UI and relevant files.
2. Summarize the top 3 design problems.
3. Propose improvements ranked by impact.
4. Implement minimal changes.
5. Re-evaluate against the checklist.
6. Stop when the major issues are resolved or after 3 iterations.

## Scoring

Use a 10-point scale.

Required thresholds:

- Photo dominance: 9/10
- Visual hierarchy: 8/10
- Spacing and rhythm: 8/10
- Typography: 8/10
- Mobile usability: 8/10
- Implementation maintainability: 8/10

If a score is below threshold, explain the concrete issue and propose a specific fix.

## Constraints

- Do not add decoration that competes with photos.
- Do not add unnecessary dependencies.
- Do not overuse animation.
- Do not redesign unrelated parts of the app.

## Interactive portfolio criteria

When the task adds interaction:

- The opening viewport should be photo-dominant before text or UI dominates.
- Scroll motion should make the structure clearer, not merely add spectacle.
- The settled state must preserve the existing editorial grid and typography.
- Gallery navigation aids should be quiet, useful, and secondary to the images.
- `prefers-reduced-motion` must keep the page understandable without scroll animation.

## Interactive completion threshold

Pass only when:

- Interactive photo reveal: 8/10 or higher
- Scroll-to-grid settlement: 8/10 or higher
- Photo dominance remains: 9/10 or higher
- Mobile usability remains: 8/10 or higher
- Maintainability remains: 8/10 or higher
