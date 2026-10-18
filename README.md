# Diwali Glow — Festival of Lights

A responsive, animated Diwali celebration page built with React. The rangoli and diya artwork is rendered in CSS, and the firecracker audio is synthesized locally with the Web Audio API, so no audio file or autoplay is required. Click **Sound off** to opt in to the short chime and firecracker effects; use **Light a diya** or **Make a little sparkle** to trigger the synchronized particle burst and update the live counter. The page includes a live countdown to Diwali on November 8, 2026. The rangoli control cycles through Saffron, Rose and Lotus glow palettes. The wish card can generate a fresh greeting, and its copy controls copy the currently displayed wish.

## Run locally

```sh
pnpm install
pnpm dev
```

Create a production bundle with `pnpm build`.

## Stack

- React 18 with Vite
- jQuery event delegation for sound, celebration, palette, wish and copy interactions
- Bootstrap CSS for the responsive grid and button foundation
- Tailwind utilities processed by PostCSS and Autoprefixer
