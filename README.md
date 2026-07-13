# 💗 Birthday Surprise Website

A dreamy, mobile-first, single-page birthday surprise site — pure HTML, CSS,
and JavaScript. No frameworks, no build tools, no backend. Just open
`index.html` and it works.

## 🎁 What's inside

```
index.html   → page structure (all sections, well-commented)
style.css    → pastel/glassmorphism theme + all animations
script.js    → all interactivity (config lives at the very top)
images/      → put your 6 photos here (photo1.jpg … photo6.jpg)
gifs/        → optional real GIFs (cute emoji are used as placeholders)
music/       → put your birthday-song.mp3 here
```

## ✏️ How to personalize it (everything you'll actually want to touch)

All of the editable content is clearly marked with `EDIT ME` comments.

| What to change | Where |
|---|---|
| Your birthday letter | `script.js` → `PERSONAL_MESSAGE` constant near the top |
| The final whispered line (blackout surprise) | `script.js` → `FINAL_TYPEWRITER_LINE` |
| Floating cute messages | `script.js` → `CUTE_MESSAGES` array |
| Photos | Drop files into `/images` named `photo1.jpg` … `photo6.jpg` |
| Memory timeline text | `index.html` → the `#timeline-section` cards |
| Music | Drop an mp3 into `/music` named `birthday-song.mp3` |
| Cute GIFs (optional, emoji work fine without this) | `script.js` → `GIF_LIST`, see `/gifs/PUT_GIFS_HERE.txt` |
| Colors | `style.css` → the `:root` CSS variables at the very top |

Nothing breaks if you skip the photos/gifs/music — every asset has a
graceful fallback (soft placeholder icon for photos, emoji for GIFs, and
a gentle message on the music button).

## 🖱️ How it flows

1. **Loading screen** → cute heart pulse, "Preparing Something Special..."
2. **Landing screen** → glowing pulsing "Open My Surprise 🎁" button
3. **Main page** → gift box (tap for confetti + heart burst + typed letter),
   photo gallery with lightbox, memory timeline, final message
4. **One Last Surprise** button → screen fades to black, stars appear,
   and a typewriter line reveals itself, followed by a glowing heart and
   closing line

## 🚀 Deploying for free on GitHub Pages

1. Create a new GitHub repository (public).
2. Upload all these files/folders keeping the same structure (make sure
   `index.html` is in the repo root).
3. Go to the repo's **Settings → Pages**.
4. Under "Build and deployment", set **Source: Deploy from a branch**,
   branch: `main`, folder: `/ (root)`. Save.
5. GitHub will give you a live link like:
   `https://yourusername.github.io/your-repo-name/`
6. Wait a minute or two for the first deploy, then share the link 💗

No build step, no npm install — it's ready to deploy as-is.

## 📱 Notes

- Fully responsive, mobile-first.
- Custom heart cursor only shows on desktop (screens ≥ 769px).
- Respects `prefers-reduced-motion` for accessibility.
- Music never autoplays — only starts when the person taps the button.
