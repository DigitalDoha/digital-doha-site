# Three Adventure

Responsive source for the Three Adventure Entertainment & Trading website.

## Replacing website images

All replaceable images live in:

`three-adventure/assets/images/`

Use the exact filenames shown in `assets/IMAGE-SIZES.md`. The page already points to those files, so image changes do not require editing the HTML or CSS.

The site includes separate desktop and mobile hero images and uses responsive cropping for about, event, game and gallery photos.

## Main files

- `index.html` — page structure and image paths
- `base.css` — responsive layout and image cropping
- `motion.css` — lightweight animation
- `script.js` — mobile menu, image fallback handling and reveal effects
- `assets/IMAGE-SIZES.md` — complete image dimensions guide
- `assets/images/` — folder where replacement images should be uploaded

## Current production project

Vercel project: `three-adventure`

Production domain: `three-adventure.vercel.app`
