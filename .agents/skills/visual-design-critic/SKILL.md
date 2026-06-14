---
name: visual-design-critic
description: Use this skill after UI changes to critique visual design quality. Focus on hierarchy, spacing, typography, consistency, over-decoration, mobile issues, and whether the design meets the stated goal.
---

# Visual Design Critic Skill

Use this skill as an independent critic after UI changes.

## Critique rules

Do not praise vague improvements.
Identify concrete visual issues.

Check:

- Is the main subject visually dominant?
- Is the hierarchy obvious within 3 seconds?
- Are spacing and alignment consistent?
- Is typography restrained and readable?
- Are there unnecessary shadows, gradients, borders, or animations?
- Does motion clarify the transition from photographic immersion to grid structure?
- Does the current-photo gallery indicator help orientation without becoming a second subject?
- Does the mobile layout preserve the design quality?
- Did the implementation introduce unnecessary complexity?

## Output format

Report:

1. Scores
2. Remaining issues
3. Must-fix items
4. Nice-to-have items
5. Whether the design passes the threshold

## Interactive Critique Threshold

Interactive design passes only when:

- Opening photo dominance: 9/10 or higher
- Scroll settlement clarity: 8/10 or higher
- Motion restraint: 8/10 or higher
- Gallery orientation usefulness: 8/10 or higher
- Reduced-motion fallback: pass
