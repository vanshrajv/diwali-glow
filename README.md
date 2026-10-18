# Diwali Glow — Festival of Lights

A polished, interactive Diwali celebration built with React. **Diwali Glow** brings together warm diya-inspired artwork, rangoli details, animated firework bursts, and simple ways to share a festive wish.

## Features

- **Interactive celebrations:** Light a diya or create another sparkle to trigger a colorful, synchronized canvas burst and update the live celebration counter.
- **Opt-in festive audio:** Enable a gentle diya chime and layered firecracker sound synthesized with the Web Audio API. Sound never starts automatically; visual effects remain available when audio is unsupported.
- **Diwali wish generator:** Cycle through five greetings and copy the currently displayed wish to the clipboard.
- **Rangoli glow palettes:** Switch between Saffron, Rose, and Lotus color themes.
- **Responsive and accessible UI:** Touch-friendly controls, semantic buttons and links, visible keyboard focus, live interaction feedback, and reduced-motion support.
- **CSS and SVG artwork:** The diya and rangoli motifs are created in the project rather than relying on watermarked stock images.

## Technology

| Area | Technology |
| --- | --- |
| UI | React 18 and Vite |
| Interaction handling | jQuery event delegation |
| Layout and styling | Bootstrap 5, Tailwind CSS 3, custom CSS |
| CSS processing | PostCSS and Autoprefixer |
| Audio | Web Audio API |
| Package manager | pnpm 11.25.0 |

## Requirements

- Node.js 20 or later
- pnpm 11.25.0 (the version is pinned in `package.json`)

## Run locally

```bash
pnpm install
pnpm dev
```

Vite serves the app on `http://localhost:3000` by default.

## Production build

```bash
pnpm build
```

The production-ready static files are generated in `dist/`.

## Project structure

```text
.
├── public/
│   ├── diya-mark.svg           # Favicon and diya brand mark
│   └── manus-routes.json       # Managed preview route manifest
├── src/
│   ├── DiwaliExperience.jsx   # Page, components, and jQuery interactions
│   ├── firecrackerAudio.js    # Web Audio chime and firecracker synthesis
│   ├── main.jsx               # React entry point and stylesheet imports
│   └── styles.css             # Tailwind directives and responsive visual system
├── app.config.ts              # Managed project logo metadata
├── postcss.config.cjs         # Tailwind and Autoprefixer pipeline
├── tailwind.config.cjs        # Tailwind content paths and theme tokens
├── vite.config.js             # Vite development and build configuration
└── package.json               # Scripts and pinned dependencies
```

## Interaction notes

Audio is off by default so the page does not make sound unexpectedly. Select **Sound off** to enable the chime and cracker effects. Use the rangoli control to change its glow, **Surprise me** to generate another wish, and either copy control to copy the current wish. If clipboard permissions are unavailable, the page reports that copying did not succeed rather than displaying a false success message.
