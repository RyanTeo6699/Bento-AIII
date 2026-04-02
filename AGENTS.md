# AGENTS.md

## Project Identity

This repository is the official website for **Bento AIII**.

Bento AIII is a technology company focused on:

- AI applications
- large language model systems
- workflow-oriented software
- practical digital product delivery

This website is **not** a generic SaaS landing page, not a game website, not an NFT-style cyber site, and not a fake startup showcase.

The website must present Bento AIII as a **credible, design-aware, technically disciplined AI company**.

---

## Core Objective

The goal of this website is to communicate, clearly and convincingly:

1. who Bento AIII is
2. what Bento AIII builds
3. what kind of projects the company focuses on
4. how the team is structured
5. how someone can contact the company

This is a **company website first**, not a marketing gimmick.

---

## Strategic Rules

### 1. Trustworthiness is mandatory
Do not invent fake credibility.

Never fabricate:
- fake team members
- fake client logos
- fake case studies
- fake metrics
- fake media mentions
- fake customer testimonials
- fake social links

If real information is unavailable, use a restrained and transparent presentation.

Preferred alternatives:
- role-based team presentation
- project stage labels such as `Prototype`, `Internal`, `Concept`
- clearly structured capability descriptions
- honest company language

---

### 2. Corporate Tech first, Pixel Neo second
The visual direction is:

**Pixel Neo Corporate Tech**

Interpretation:
- modern and professional base
- restrained futuristic UI language
- pixel elements used as accents only
- high readability and clean structure
- strong visual identity without visual chaos

Do **not** turn the site into:
- an indie game site
- a crypto/NFT landing page
- an over-stylized cyberpunk demo
- a noisy retro pixel art website

Pixel is a brand accent, not the whole system.

---

### 3. Real operations, not AI hype
The company voice must stay grounded.

Preferred themes:
- applied AI
- LLM systems
- workflow software
- structured delivery
- product discipline
- practical system design
- deployment-minded thinking

Avoid empty hype phrases such as:
- redefine the future
- revolutionize everything
- next-gen disruption
- world-changing AI
- limitless possibilities
- leading the future of intelligence

Language should feel:
- sharp
- modern
- restrained
- credible
- technical but readable

---

## Information Architecture

The website should maintain these core pages:

- Home
- About
- Projects
- Team
- Contact

### Home
Purpose:
- define Bento AIII immediately
- establish brand tone
- preview capabilities
- preview projects
- preview team structure
- direct visitors toward action

### About
Purpose:
- explain company identity
- explain mission and positioning
- explain why Bento AIII exists
- show technical and product orientation

### Projects
Purpose:
- show project directions and tracks
- present work honestly
- distinguish project stages clearly
- emphasize systems, workflows, and delivery

### Team
Purpose:
- show operating roles and expertise
- prioritize credibility over decoration
- use real profiles if available
- otherwise prefer role-based presentation

### Contact
Purpose:
- provide a real conversion path
- allow business inquiry
- make the company feel reachable and operational

---

## Content Rules

### Company content
All company copy must be specific and credible.

Good:
- focused on AI applications and language model systems
- building practical workflow software
- translating model capability into usable products
- small team with product and engineering discipline

Bad:
- changing the world with AI
- disrupting all industries
- redefining digital intelligence
- building the future of everything

---

### Project content
Projects must not be exaggerated.

Every project should include:
- name
- short description
- stage/status
- tags or technical focus
- real or realistic scope

Use explicit status markers where needed:
- Live
- Prototype
- Internal
- Concept

If something is not publicly launched, do not imply that it is.

---

### Team content
Do not create fictional humans.

Allowed:
- real people with real links
- role-based cards such as:
  - Product Systems
  - AI Engineering
  - Full Stack Delivery
  - Operations & Research

Not allowed:
- fake names
- fake biographies
- fake external profiles

---

## Design System Rules

### Overall tone
The site should feel:
- dark
- precise
- polished
- technical
- intentional

### Visual language
Allowed:
- grid textures
- subtle glow
- HUD-like dividers
- pixel-corner accents
- terminal-inspired labels
- restrained motion
- modular layout blocks

Avoid:
- excessive neon
- full-screen visual noise
- too many glowing borders
- unreadable pixel fonts
- overly playful retro styling

### Typography
Rules:
- body text must remain highly readable
- pixel fonts may be used only for accents, labels, tiny headings, or logo treatment
- never use pixel fonts for long paragraphs
- preserve hierarchy and spacing discipline

### Motion
Motion should be minimal and intentional.

Allowed:
- soft entrance animations
- slight hover transitions
- subtle panel shifts
- controlled hero animation

Avoid:
- constant motion
- decorative motion without meaning
- anything that makes the site feel like a game UI

---

## Engineering Priorities

When modifying this repo, always follow this order:

### Priority 1: Build integrity
The project must build successfully at all times.

Before aesthetic refinement, ensure:
- `npm run build` passes
- no invalid Tailwind classes
- no broken imports
- no dead links that break routing
- no unsafe environment variable assumptions

No design work is more important than build success.

---

### Priority 2: Information clarity
Every page must be understandable before being impressive.

Check:
- can a visitor understand what Bento AIII is within seconds?
- are headlines too vague?
- is the hierarchy clear?
- is the CTA obvious?

---

### Priority 3: Brand consistency
After build stability and clarity, refine:
- Hero
- section headers
- card styling
- header and footer coherence
- pixel neo accents

---

### Priority 4: Progressive enhancement
Only after the above is stable:
- richer animation
- more visual detail
- secondary interactions
- deeper polish

---

## Technical Rules

### Stack
The site should remain aligned with:
- Next.js
- TypeScript
- Tailwind CSS

Additional libraries should be introduced only when justified.

### Fonts
Avoid fragile external font dependencies when possible.
Prefer:
- local fonts
- reliable fallbacks
- build-safe font strategies

### Forms
The contact form must be treated as real product surface, not decoration.

Requirements:
- client-side validation
- server-side validation
- loading state
- success state
- error state
- graceful handling when env vars are missing
- defensive anti-spam basics

### Tailwind discipline
Do not use unsupported utility patterns that break builds.

Examples of unacceptable behavior:
- introducing invalid opacity suffixes
- adding arbitrary classes without validating build support
- mixing too many one-off styles without system logic

---

## Header and Footer Rules

### Header
The header is not just navigation.
It must function as a brand frame.

Requirements:
- clear Bento AIII identity
- stable navigation
- restrained but visible CTA
- strong visual consistency with the site

### Footer
The footer should feel intentional, not generic.

Requirements:
- concise company framing
- clear navigation or contact utility
- visual closure
- no bloated template footer sections

---

## Homepage Rules

The homepage is the highest priority page in this repo.

It must not read like a generic explanation page.
It must act as a brand-defining entry point.

The hero section should:
- define the company quickly
- avoid empty hype
- feel stronger than a normal SaaS template
- preserve professional restraint
- support a memorable Bento AIII identity

If forced to choose, prefer:
- stronger headline clarity
over
- decorative visual complexity

---

## Editing Rules for Agents

When making changes:

1. do not make the site noisier just to make it look more “designed”
2. do not invent content to fill empty areas
3. do not add sections unless they strengthen clarity or trust
4. do not over-polish weak messaging
5. do not prioritize motion over structure
6. do not change the project into a startup cliché website

When in doubt, choose:
- clarity over novelty
- trust over hype
- structure over decoration
- build stability over visual ambition

---

## Acceptance Standard

A change is acceptable only if it improves at least one of these without damaging the others:

- build stability
- credibility
- clarity
- brand consistency
- conversion readiness

A change is not acceptable if it:
- breaks build
- adds fake signals of trust
- weakens readability
- makes the site feel like a game/NFT page
- pushes the brand into generic AI hype language

---

## Current Non-Negotiables

These constraints must always be respected:

- Bento AIII must feel like a real AI company
- the site must stay credible
- Pixel Neo is an accent system, not the whole design
- the website must not drift into generic hype-SaaS language
- the build must remain healthy
- project and team information must remain honest

---

## Final Instruction to All Agents

Do not optimize for “more”.
Optimize for **truer, sharper, cleaner, and more build-safe**.

This website should feel like:
**a disciplined AI company with taste**
—not a template, not a fantasy, and not a gimmick.