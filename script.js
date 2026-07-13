/* =================================================================
   BIRTHDAY SURPRISE — SCRIPT.JS
   -----------------------------------------------------------------
   Table of contents (search these headers to jump around):
   1. CONFIG — messages, letter text, gif list (EDIT THESE)
   2. LOADING SCREEN
   3. BACKGROUND EFFECTS (hearts, stars, particles, balloons, petals, sparkles)
   4. CUTE GIF RAIN
   5. FLOATING MESSAGES
   6. LANDING SCREEN -> MAIN PAGE TRANSITION
   7. SCROLL REVEAL
   8. GIFT BOX + CONFETTI + LETTER TYPING
   9. PHOTO GALLERY + LIGHTBOX (with lazy load + fallback)
   10. ONE LAST SURPRISE (blackout + starfield + typewriter)
   11. MUSIC BUTTON
   12. HEART CURSOR (desktop only)
   ================================================================= */

/* =================================================================
   1. CONFIG — EDIT ME
   ================================================================= */

// EDIT ME: floating cute messages that appear every 3-5 seconds
const CUTE_MESSAGES = [
  "Happy Birthday ❤️",
  "You're my favorite person.",
  "I hope today makes you smile.",
  "You deserve the happiest birthday ever.",
  "You're the cutest.",
  "You're my bithu baddie😋",
  "You are too cute golu molu .",
  "Stay happy meri guggli.",
  "I'm lucky to have you nikku badmosh.",
  "I love your smile.",
  "You deserve endless happiness.",
  "Sending you the biggest hug.",
  "Today is all about you.",
  "Happy Birthday, Beautiful.",
  "You are my favorite notification.",
  "You are nikka ja bacha of 19 saal 😹",
  "cutest girl ever .",
  "May all your wishes come true.",
  "Keep smiling forever.",
  "Love you always ❤️"
];

// EDIT ME: PERSONAL MESSAGE — this is your birthday letter.
// It will be "typed out" inside the glass card after the gift opens.
const PERSONAL_MESSAGE = `

Dear Buggu Muggu ,

From the very first moment I met you, i never thought that u will be mine and i am urs.
Today is your day, and I just want you to know how deeply loved,
valued, and cherished you are.

Here's to another year of your beautiful laugh, your kind heart,
and every little thing that makes you, you.

Waise ta mai bahut bolda i have alot of things to laugh and share but right now i am unable to share.

U re the purest soul i have ever met. God will always be ur side . lots of love mera bugggu 😘

Happy Birthday. I love you more than words can say.`;

// EDIT ME: cute GIF placeholders. Replace the "emoji" fallback with a
// real file path (e.g. "gifs/puppy1.gif") once you add your own GIFs
// to the /gifs folder. If "src" is empty, the cute emoji is shown instead.
const GIF_LIST = [
  { label: "puppy",   emoji: "🐶", src: "" },
  { label: "kitten",  emoji: "🐱", src: "" },
  { label: "teddy",   emoji: "🧸", src: "" },
  { label: "rabbit",  emoji: "🐰", src: "" },
  { label: "penguin", emoji: "🐧", src: "" },
  { label: "capybara",emoji: "🦫", src: "" },
  { label: "hamster", emoji: "🐹", src: "" },
  { label: "heart",   emoji: "💗", src: "" },
  { label: "cake",    emoji: "🎂", src: "" }
];

// EDIT ME: the final whispered line during the "One Last Surprise" moment
const FINAL_TYPEWRITER_LINES = [
  "Among billions of people in this world...",
  "Meeting you was my favorite coincidence.",
  "Loving you was the best decision my heart ever made.",
  "You made ordinary days feel extraordinary.",
  "Thank you for being my peace.",
  "And if life ever gave me another chance...",
  "I'd still fall in love with you.",
  "I'd still choose you.",
  "Again.",
  "And again.",
  "Forever. ❤️"
];
/* =================================================================
   Small helpers
   ================================================================= */
const rand = (min, max) => Math.random() * (max - min) + min;
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

/* =================================================================
   2. LOADING SCREEN
   ================================================================= */
window.addEventListener("load", () => {
  const loader = $("#loading-screen");
  setTimeout(() => {
    loader.classList.add("fade-out");
  }, 1400);
});

/* =================================================================
   3. BACKGROUND EFFECTS
   ================================================================= */

// ---- Floating hearts ----
function spawnHeart() {
  const el = document.createElement("div");
  el.className = "floating-heart";
  el.textContent = ["❤️", "💗", "💕", "💖"][Math.floor(rand(0, 4))];
  el.style.left = rand(0, 100) + "vw";
  el.style.fontSize = rand(14, 30) + "px";
  const duration = rand(9, 16);
  el.style.animationDuration = duration + "s";
  $("#bg-hearts").appendChild(el);
  setTimeout(() => el.remove(), duration * 1000);
}

// ---- Twinkling stars ----
function spawnStar() {
  const el = document.createElement("div");
  el.className = "twinkle-star";
  const size = rand(2, 4);
  el.style.width = size + "px";
  el.style.height = size + "px";
  el.style.left = rand(0, 100) + "vw";
  el.style.top = rand(0, 100) + "vh";
  el.style.animationDuration = rand(1.5, 3.5) + "s";
  $("#bg-stars").appendChild(el);
  setTimeout(() => el.remove(), 6000);
}

// ---- Glowing particles ----
function spawnParticle() {
  const el = document.createElement("div");
  el.className = "glow-particle";
  const size = rand(10, 26);
  el.style.width = size + "px";
  el.style.height = size + "px";
  el.style.left = rand(0, 100) + "vw";
  const duration = rand(10, 18);
  el.style.animationDuration = duration + "s";
  $("#bg-particles").appendChild(el);
  setTimeout(() => el.remove(), duration * 1000);
}

// ---- Floating balloons ----
function spawnBalloon() {
  const el = document.createElement("div");
  el.className = "floating-balloon";
  el.textContent = ["🎈", "🎈", "🎈"][0];
  el.style.left = rand(0, 100) + "vw";
  el.style.color = ["#ffb3d1", "#c9b3ff", "#ffe3d1"][Math.floor(rand(0, 3))];
  const duration = rand(12, 20);
  el.style.animationDuration = duration + "s";
  $("#bg-balloons").appendChild(el);
  setTimeout(() => el.remove(), duration * 1000);
}

// ---- Falling petals ----
function spawnPetal() {
  const el = document.createElement("div");
  el.className = "falling-petal";
  el.textContent = "🌸";
  el.style.left = rand(0, 100) + "vw";
  el.style.fontSize = rand(12, 22) + "px";
  const duration = rand(8, 14);
  el.style.animationDuration = duration + "s";
  $("#bg-petals").appendChild(el);
  setTimeout(() => el.remove(), duration * 1000);
}

// ---- Sparkles ----
function spawnSparkle() {
  const el = document.createElement("div");
  el.className = "sparkle";
  el.textContent = "✨";
  el.style.left = rand(0, 100) + "vw";
  el.style.top = rand(0, 100) + "vh";
  el.style.fontSize = rand(10, 18) + "px";
  el.style.animationDuration = rand(1.6, 3) + "s";
  $("#bg-sparkles").appendChild(el);
  setTimeout(() => el.remove(), 4000);
}

// Stagger intervals so effects don't all spawn on the same tick (keeps mobile smooth)
setInterval(spawnHeart, 900);
setInterval(spawnStar, 400);
setInterval(spawnParticle, 1300);
setInterval(spawnBalloon, 2600);
setInterval(spawnPetal, 1500);
setInterval(spawnSparkle, 700);

/* =================================================================
   4. CUTE GIF RAIN
   ================================================================= */
function spawnGif() {
  const item = GIF_LIST[Math.floor(rand(0, GIF_LIST.length))];
  const el = document.createElement("div");
  el.className = "gif-item";
  const size = rand(56, 92);
  el.style.width = size + "px";
  el.style.height = size + "px";
  el.style.left = rand(2, 88) + "vw";
  el.style.top = rand(5, 85) + "vh";
  const duration = rand(4.5, 7);
  el.style.animationDuration = duration + "s";

  if (item.src) {
    const img = document.createElement("img");
    img.src = item.src;
    img.alt = item.label;
    img.onerror = () => { el.innerHTML = `<span class="gif-emoji-fallback">${item.emoji}</span>`; };
    el.appendChild(img);
  } else {
    el.innerHTML = `<span class="gif-emoji-fallback">${item.emoji}</span>`;
  }

  $("#gif-rain").appendChild(el);
  setTimeout(() => el.remove(), duration * 1000);
}
// Keep a gentle stream of cute GIFs — not too dense on small screens
const gifInterval = window.innerWidth < 600 ? 1400 : 900;
setInterval(spawnGif, gifInterval);

/* =================================================================
   5. FLOATING MESSAGES
   ================================================================= */
function spawnMessage() {
  const el = document.createElement("div");
  el.className = "floating-message";
  el.textContent = CUTE_MESSAGES[Math.floor(rand(0, CUTE_MESSAGES.length))];
  el.style.left = rand(8, 62) + "vw";
  el.style.top = rand(10, 80) + "vh";
  $("#floating-messages").appendChild(el);
  setTimeout(() => el.remove(), 5000);
  // schedule next message at a random 3-5s interval
  setTimeout(spawnMessage, rand(3000, 5000));
}
setTimeout(spawnMessage, 2000);

/* =================================================================
   6. LANDING SCREEN -> MAIN PAGE TRANSITION
   ================================================================= */
$("#open-surprise-btn").addEventListener("click", () => {
  const landing = $("#landing-screen");
  const main = $("#main-page");
  landing.classList.add("fade-out");
  setTimeout(() => {
    main.classList.add("visible");
    initScrollReveal(); // start observing sections once they exist on screen
  }, 500);
});

/* =================================================================
   7. SCROLL REVEAL (IntersectionObserver)
   ================================================================= */
function initScrollReveal() {
  const targets = $$(".section, .timeline-card, .gallery-img");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
        }
      });
    },
    { threshold: 0.15 }
  );
  targets.forEach((t) => observer.observe(t));
}

/* =================================================================
   8. GIFT BOX + CONFETTI + LETTER TYPING
   ================================================================= */
let giftOpened = false;

$("#gift-box").addEventListener("click", () => {
  if (giftOpened) return;
  giftOpened = true;

  const box = $("#gift-box");
  box.classList.add("opened");

  // Placeholder cute sound effect — replace with your own audio file if desired.
  // EDIT ME: to add a real sound, uncomment below and add a file at /music/pop.mp3
  // const popSound = new Audio("music/pop.mp3");
  // popSound.play().catch(() => {});

  burstConfetti(160);
  burstHearts(40);

  const reveal = $("#gift-reveal");
  reveal.classList.remove("hidden");
  reveal.scrollIntoView({ behavior: "smooth", block: "center" });

  typeLetter();
});

function typeLetter() {
  const target = $("#letter-text");
  const cursor = $("#letter-cursor");
  let i = 0;
  target.textContent = "";
  const interval = setInterval(() => {
    target.textContent += PERSONAL_MESSAGE[i];
    i++;
    if (i >= PERSONAL_MESSAGE.length) {
      clearInterval(interval);
      cursor.classList.add("hidden");
    }
  }, 22);
}

/* ---- Heart burst on gift open ---- */
function burstHearts(count) {
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;
  for (let i = 0; i < count; i++) {
    const el = document.createElement("div");
    el.textContent = ["❤️", "💗", "💕"][Math.floor(rand(0, 3))];
    el.style.position = "fixed";
    el.style.left = centerX + "px";
    el.style.top = centerY + "px";
    el.style.fontSize = rand(14, 26) + "px";
    el.style.pointerEvents = "none";
    el.style.zIndex = 450;
    el.style.transition = "transform 1.4s cubic-bezier(.17,.67,.4,1), opacity 1.4s ease";
    document.body.appendChild(el);

    const angle = rand(0, Math.PI * 2);
    const distance = rand(80, 260);
    const dx = Math.cos(angle) * distance;
    const dy = Math.sin(angle) * distance;

    requestAnimationFrame(() => {
      el.style.transform = `translate(${dx}px, ${dy}px) scale(${rand(0.8, 1.6)}) rotate(${rand(-90,90)}deg)`;
      el.style.opacity = "0";
    });
    setTimeout(() => el.remove(), 1500);
  }
}

/* ---- Confetti (canvas particle system) ---- */
const confettiCanvas = $("#confetti-canvas");
const ctx = confettiCanvas.getContext("2d");
function resizeCanvas() {
  confettiCanvas.width = window.innerWidth;
  confettiCanvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

let confettiParticles = [];
const CONFETTI_COLORS = ["#ffb3d1", "#c9b3ff", "#ffe3d1", "#ffd97d", "#ff9ecf", "#fffaf9"];

function burstConfetti(count) {
  for (let i = 0; i < count; i++) {
    confettiParticles.push({
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
      vx: rand(-8, 8),
      vy: rand(-12, -3),
      size: rand(5, 10),
      color: CONFETTI_COLORS[Math.floor(rand(0, CONFETTI_COLORS.length))],
      rotation: rand(0, 360),
      rotSpeed: rand(-8, 8),
      life: 0,
      shape: Math.random() > 0.5 ? "circle" : "rect"
    });
  }
  if (!confettiAnimating) {
    confettiAnimating = true;
    requestAnimationFrame(animateConfetti);
  }
}

let confettiAnimating = false;
function animateConfetti() {
  ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
  confettiParticles.forEach((p) => {
    p.vy += 0.25; // gravity
    p.x += p.vx;
    p.y += p.vy;
    p.rotation += p.rotSpeed;
    p.life++;

    ctx.save();
    ctx.translate(p.x, p.y);
    ctx.rotate((p.rotation * Math.PI) / 180);
    ctx.fillStyle = p.color;
    ctx.globalAlpha = Math.max(0, 1 - p.life / 130);
    if (p.shape === "circle") {
      ctx.beginPath();
      ctx.arc(0, 0, p.size / 2, 0, Math.PI * 2);
      ctx.fill();
    } else {
      ctx.fillRect(-p.size / 2, -p.size / 4, p.size, p.size / 2);
    }
    ctx.restore();
  });

  confettiParticles = confettiParticles.filter((p) => p.life < 130 && p.y < confettiCanvas.height + 40);

  if (confettiParticles.length > 0) {
    requestAnimationFrame(animateConfetti);
  } else {
    confettiAnimating = false;
    ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
  }
}

/* =================================================================
   9. PHOTO GALLERY + LIGHTBOX
   ================================================================= */
// Lazy-load with graceful fallback icon if the placeholder image is missing
$$(".gallery-img").forEach((img) => {
  const realSrc = img.getAttribute("data-src");
  const loaderImg = new Image();
  loaderImg.onload = () => { img.src = realSrc; };
  loaderImg.onerror = () => { img.classList.add("img-fallback"); };
  loaderImg.src = realSrc;

  img.addEventListener("click", () => {
    if (img.classList.contains("img-fallback")) return; // nothing to enlarge
    $("#lightbox-img").src = img.src;
    $("#lightbox").classList.remove("hidden");
  });
});

$("#lightbox-close").addEventListener("click", closeLightbox);
$("#lightbox").addEventListener("click", (e) => {
  if (e.target.id === "lightbox") closeLightbox();
});
function closeLightbox() {
  $("#lightbox").classList.add("hidden");
}

/* =================================================================
   10. ONE LAST SURPRISE — blackout + starfield + typewriter
   ================================================================= */
$("#last-surprise-btn").addEventListener("click", () => {
  const overlay = $("#blackout-overlay");
  overlay.classList.remove("hidden");
  requestAnimationFrame(() => overlay.classList.add("visible"));

  spawnBlackoutStars();
  document.body.style.overflow = "hidden";

  setTimeout(() => typeBlackoutLine(), 900);
});

function spawnBlackoutStars() {
  const container = $("#blackout-stars");
  container.innerHTML = "";
  const starCount = window.innerWidth < 600 ? 90 : 180;
  for (let i = 0; i < starCount; i++) {
    const el = document.createElement("div");
    el.className = "b-star";
    const size = rand(1, 3);
    el.style.width = size + "px";
    el.style.height = size + "px";
    el.style.left = rand(0, 100) + "vw";
    el.style.top = rand(0, 100) + "vh";
    el.style.animationDuration = rand(1.5, 4) + "s";
    container.appendChild(el);
  }
}

async function typeBlackoutLine() {

  const target = $("#blackout-typewriter");
  const cursor = $("#blackout-cursor");

  cursor.classList.remove("hidden");
  target.innerHTML = "";

  for (const line of FINAL_TYPEWRITER_LINES) {

    await typeSingleLine(line);

    await new Promise(resolve => setTimeout(resolve, 1800));

    target.innerHTML += "<br><br>";
  }

  cursor.classList.add("hidden");

  setTimeout(() => {

    $("#blackout-final-heart").classList.remove("hidden");

    $("#blackout-final-line").innerHTML =
      "Happy Birthday,<br>My Golu Molu ❤️<br><br>I Love You.<br>More Than Yesterday.<br>Less Than Tomorrow.";

    $("#blackout-final-line").classList.remove("hidden");

  },1000);

}
function typeSingleLine(text) {

  return new Promise(resolve => {

    const target = $("#blackout-typewriter");

    let i = 0;

    const interval = setInterval(() => {

      target.innerHTML += text.charAt(i);

      i++;

      if(i >= text.length){

        clearInterval(interval);

        resolve();

      }

    },45);

  });

}

/* =================================================================
   11. MUSIC BUTTON
   ================================================================= */
const musicBtn = $("#music-btn");
const bgMusic = $("#bg-music");
let musicPlaying = false;

musicBtn.addEventListener("click", () => {
  if (!musicPlaying) {
    bgMusic.play().catch(() => {
      // If the placeholder mp3 doesn't exist yet, fail silently and let
      // the user know via the button label so nothing looks broken.
      musicBtn.textContent = "Add music/birthday-song.mp3 🎵";
      setTimeout(() => (musicBtn.textContent = "Play Music 🎵"), 2200);
      return;
    });
    musicBtn.textContent = "Pause Music ⏸";
    musicPlaying = true;
  } else {
    bgMusic.pause();
    musicBtn.textContent = "Play Music 🎵";
    musicPlaying = false;
  }
});

/* =================================================================
   12. HEART CURSOR (desktop only)
   ================================================================= */
if (window.matchMedia("(min-width: 769px)").matches) {
  const cursor = $("#heart-cursor");
  window.addEventListener("mousemove", (e) => {
    cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
  });
}
