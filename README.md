# Regional Anaesthesia Notes

A searchable, mobile-friendly reference for common surgical procedures and their recommended regional anaesthetic techniques. Built for busy teaching hospitals — designed to be used at the bedside, in theatre, or on the ward.

**Live site: [domhutch.github.io/regional-anaesthesia-notes](https://domhutch.github.io/regional-anaesthesia-notes/)**

## What's in here

**15 procedure pages** across 4 body regions, each with a recommended block (Plan A), alternatives (Plan B), key anatomy, practical considerations, and references including NYSORA links.

| Region | Procedures |
|---|---|
| Upper Limb | Shoulder arthroscopy, distal radius ORIF, carpal tunnel release |
| Lower Limb | Total knee replacement, hip arthroplasty, ankle ORIF, ACL reconstruction, above knee amputation |
| Trunk | Inguinal hernia, mastectomy, laparotomy, rib fractures, caesarean section, spinal surgery |
| Head & Neck | Thyroidectomy, carotid endarterectomy |

**Quick reference pages:**
- LA dosing & calculations (max doses, concentration tables, adjuvants)
- LA toxicity & Intralipid rescue protocol
- Standard infusion recipes (epidural, PVB, fascia iliaca, sciatic catheter)
- Antibiotic re-dosing schedule
- Contacts (template for local numbers)

**Find by Injury / Pain Site** — cross-reference page for looking up by presentation rather than procedure name.

## #Blocks4ALL

Regional anaesthesia should be offered wherever possible. This resource is for anyone on shift with ultrasound and RA skills — whether confident or just getting started.

## Development

Built with [Docusaurus](https://docusaurus.io/). All content lives in `docs/` as plain markdown files.

```bash
npm install
npm start        # local dev server at localhost:3000
npm run build    # production build
```

### Adding a new procedure

Create a markdown file in the appropriate `docs/` subdirectory (e.g. `docs/lower-limb/new-procedure.md`) with this frontmatter:

```markdown
---
sidebar_position: 1
tags: [relevant, tags, here]
---

# Procedure Name

## Surgical overview
## Recommended regional technique
## Alternatives
## Key anatomy
## Considerations
## References
```

The sidebar and search index update automatically.

### Deploying

```bash
GIT_USER=<github-username> npm run deploy
```

This builds and pushes to the `gh-pages` branch, which GitHub Pages serves automatically.
