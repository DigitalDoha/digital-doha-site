# Three Adventure — Image Replacement Guide

Replace images inside `three-adventure/assets/images/` using the exact filenames below. You do not need to edit HTML or CSS after replacing a file.

| Website slot | Exact filename | Recommended size | Ratio / notes |
|---|---|---:|---|
| Logo | `logo.png` | 1200 × 800 px | Transparent PNG recommended; logo centered with minimal empty space |
| Hero desktop | `hero-desktop.jpg` | 1920 × 1080 px | 16:9 landscape; keep important subjects near the center |
| Hero mobile | `hero-mobile.jpg` | 1080 × 1350 px | 4:5 portrait; optimized for phones |
| About section | `about-main.jpg` | 1600 × 1200 px | 4:3 landscape |
| Event section | `event-main.jpg` | 1600 × 1000 px | 8:5 landscape |
| Game 01 | `game-ring-toss.jpg` | 1200 × 900 px | 4:3 landscape |
| Game 02 | `game-balloon-darts.jpg` | 1200 × 900 px | 4:3 landscape |
| Game 03 | `game-basket-shoot.jpg` | 1200 × 900 px | 4:3 landscape |
| Game 04 | `game-duck-pond.jpg` | 1200 × 900 px | 4:3 landscape |
| Gallery 01 | `gallery-01.jpg` | 1200 × 1600 px | 3:4 portrait |
| Gallery 02 | `gallery-02.jpg` | 1200 × 900 px | 4:3 landscape |
| Gallery 03 | `gallery-03.jpg` | 1200 × 900 px | 4:3 landscape |
| Gallery 04 | `gallery-04.jpg` | 1200 × 900 px | 4:3 landscape |
| Gallery 05 | `gallery-05.jpg` | 1200 × 900 px | 4:3 landscape |
| Gallery 06 | `gallery-06.jpg` | 1200 × 900 px | 4:3 landscape |

## How responsive images work

- The hero automatically uses `hero-mobile.jpg` on phone-sized screens and `hero-desktop.jpg` on larger screens.
- All content photos use `object-fit: cover`, so the layout stays responsive without stretching the image.
- Game and gallery images are cropped automatically for their cards on tablet and mobile.
- Keep faces, logos, prizes and other important content near the center of the source photo so cropping remains safe.
- Non-hero images are lazy-loaded for better mobile performance.

## Recommended export settings

Use JPG for photographs at roughly 75–85% quality. Keep each normal photo preferably below 500 KB and the 1920 × 1080 hero preferably below 800 KB. Use PNG only for the transparent logo.

If an image file is missing, the website displays the exact filename and recommended pixel size in that image slot. As soon as you upload the correctly named file, the placeholder disappears automatically.
