# Dr. Benji Schreiber — Website Project

## Permissions
The following tools are pre-authorised for this project — no need to prompt for approval:
- Read, Write, Edit files anywhere in this project directory
- Bash commands: npm run dev, npm run build, npm run lint, git status/diff/log
- preview_start / preview_stop / preview_screenshot / preview_snapshot / preview_inspect
- WebFetch and WebSearch for research

## Project Overview
Next.js 16 + Tailwind CSS website for Dr. Benji Schreiber, private Consultant Rheumatologist.

**Working directory:** `/Users/benji/Library/CloudStorage/Dropbox/Private Practice/Website/VIBE website 02 26/`

**Dev server:** `npm run dev` → localhost:3000 (launch.json configured)

## Key Details
- **GMC:** 4742768
- **Secretary:** Olivia Skeet
- **Phone:** 020 8458 6775
- **Email:** info@benjischreiber.com
- **Form endpoint:** https://formspree.io/f/mkovpegz (Formspree)

## Locations
1. Wellington Diagnostics and Outpatients Centre, Roman House, 296 Golders Green Road, London NW11 9PY
   - Nearest tube: Brent Cross (Northern Line, 6 min walk)
   - DEXA scanning available here
2. Hospital of St John and St Elizabeth, 60 Grove End Road, London NW8 9NH
   - Nearest tube: St John's Wood (Jubilee Line, ~5 min walk)

## Fees
- New patient: £300 | Follow-up: £200
- All major insurers accepted
- 48 hours cancellation policy

## Design System
- Colours: navy-950/900/800/700/600/500/400/300/200/100/50, gold-600/500/400/300/200
- Fonts: serif (headings) + sans-serif (body)
- Components: btn-primary, btn-outline, section-label, section-title, divider-gold, container-content, section-padding

## Tech Notes
- App Router (not Pages Router) — files go in `/app/`
- Use `"use client"` directive only for interactive components (useState, useEffect)
- Images use Next.js `<Image>` with `fill` + `object-cover`
- British English throughout

## Content Guidelines
- Always write in British English
- Third person for bio/credentials sections, first person for "My Approach" type content
- Do not add fake/placeholder content — if something is unknown, leave a clear TODO comment
- Keep medical content accurate — this is a real specialist's site
