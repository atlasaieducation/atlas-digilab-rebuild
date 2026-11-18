# DigiLab Premium Agency UI Refresh

## Design direction

**Design movement:** premium electric-blue enterprise technology — a calm, high-trust software and AI practice with a vivid global-systems visual language.

**Core principles:**
- Keep the content precise, credible, accessible, and useful to organizations making real technology decisions.
- Use strong hierarchy, spacious layouts, and responsive cards rather than generic SaaS density.
- Use electric blue and cyan as intentional signals for focus, action, and connected systems.
- Make every link, button, form state, and focus treatment communicate a clear next action.

**Color philosophy:** midnight navy `#020D25` signals institutional confidence; white and pale blue surfaces create clarity; electric blue `#006BFF` carries action; cyan signals connectivity. Borders and shadows remain restrained.

**Layout paradigm:** left-anchored headlines, asymmetrical hero compositions, a wide Earth/network visual, full-bleed blue bands, and calm information rails across desktop, tablet, and mobile.

**Signature elements:** the existing AD diamond brand mark, a blue/cyan digital-Earth hero, and fine network/grid motifs carried into cards, forms, and navigation.

**Interaction philosophy:** polished and direct. Sticky navigation remains easy to reach, cards lift subtly, links show direction, and visible focus rings support keyboard use.

**Animation:** short 180–280ms transitions; no unsupported numerical counters and no continuous motion except subtle signal accents. Respect `prefers-reduced-motion`.

**Typography:** Space Grotesk for display and interface labels; DM Sans for readable supporting copy. Headlines use tight tracking and controlled line lengths.

**Brand essence:** Atlas DigiLab is a technology and institutional solutions partner for organizations that need technology to work in the real world. Personality: precise, capable, humane.

**Brand voice:** direct, calm, and specific. Example lines: “Start with the outcome.” “Bring us the problem; we will help shape the solution.”

**Wordmark & logo:** preserve the existing AD monogram while naming the organization Atlas DigiLab in page headers, footers, and metadata.

**Signature brand color:** electric blue `#006BFF`, balanced by midnight navy and cyan.

## Implementation scope

- Refine shared tokens, typography, header, buttons, section rhythm, cards, forms, and responsive breakpoints in `client/src/index.css`.
- Adapt the supplied homepage to the new palette and generated global digital-Earth hero while preserving existing sections and routes.
- Add and cross-link the Projects, Portfolio, Services/Solutions, Industries, About, Resources, Contact, and Project inquiry destinations.
- Preserve all six existing public service categories, the 62-service catalog, enterprise inquiry, and service-detail routes.
- Keep generated project examples clearly labelled as illustrative; do not invent client relationships, metrics, testimonials, rankings, or guarantees.
- Send validated inquiry submissions to the project-owner notification service; do not create a customer email channel or claim that failed submissions were delivered.

## Supplied design brief integration

- Use the blue/cyan signal rail and a floating, outcome-led caption over the digital-Earth hero.
- Feature the six requested service areas and four concept portfolio images while retaining the source service catalog and inquiry workflows.
- Keep trust sections truthful: use only authorized or explicitly illustrative logos and testimonial placeholders; omit unverified numbers and rankings.
- Add industry cards for healthcare, finance, education, government, retail, manufacturing, and telecom without implying past client engagements.

## Multi-page expansion

- `/about` is a complete narrative page covering positioning, principles, audiences, operating model, capabilities, and CTA.
- `/industries` gives sector-specific context and pathways for business, public institutions, development/social impact, and education/knowledge.
- `/projects` presents clearly illustrative project profiles rather than invented completed client work.
- `/portfolio` is a four-card visual concept showcase; generated imagery is marked as illustrative, not real client work.
- `/resources` provides a field-notes library for practical technology, AI, governance, and digital-service decisions.
- `/project` is a first-class alias for the existing structured project inquiry flow; `/start-project` remains supported.
- `/contact` provides inquiry details and a consent-led form with transparent owner-notification behavior and direct email fallback.
- `/solutions` is a direct route to the existing service directory; `/services` remains the canonical service entry point.


## Project structure

- `client/src/pages/` contains the existing Home, About, Industries, Resources, Services, Contact, project-inquiry, Enterprise-inquiry, and new Projects/Portfolio page components.
- `client/src/index.css` owns shared tokens, responsive navigation, page layouts, and motion/accessibility rules; `client/public/` holds public route metadata and site assets.
- `shared/` defines the inquiry payload contract used by browser forms and the server validator.
- `server/inquiryRoute.ts` validates submissions and sends project-owner alerts through `server/_core/notification.ts`; inquiry content is not persisted in a database.
- `server/_core/index.ts` serves the Vite frontend in development, static assets in production, and `/api/health` for readiness; `Dockerfile` owns production installation/build/start behavior.