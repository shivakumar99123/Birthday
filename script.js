
const $ = (id) => document.getElementById(id);
// ====================================
// ALEENA'S PHOTO GALLERY
// ====================================

const memories = [
  {
    image: "photo1.jpg",
    caption: "The little moments that became big memories. 🤍"
  },
  {
    image: "photo2.jpg",
    caption: "A little memory that still makes me smile. ✨"
  },
  {
    image: "photo3.jpg",
    caption: "Some moments are special because of the people in them. 💗"
  },
  {
    image: "photo4.jpg",
    caption: "Ordinary moments, extraordinary memories. 🌷"
  },
  {
    image: "photo5.jpg",
    caption: "One more memory I'll always be glad we shared. ❤️"
  }
];

const gallery = document.getElementById("photoGallery");

if (gallery) {
  memories.forEach((memory, index) => {
    const card = document.createElement("article");
    card.className = "photo-card";

    const frame = document.createElement("div");
    frame.className = "photo-frame";

    const img = document.createElement("img");
    img.src = `assets/${memory.image}`;
    img.alt = `Shared memory ${index + 1}`;
    img.loading = "lazy";

    const caption = document.createElement("p");
    caption.textContent = memory.caption;

    frame.appendChild(img);
    card.appendChild(frame);
    card.appendChild(caption);
    gallery.appendChild(card);
  });
}

// Personal details
const herName = "Aleena";
const herNickname = "Dear";
const birthdayDate = "2026-11-05";

document.title = `For ${herNickname} ${herName} 🤍`;

// Music
const music = $("music");
const musicBtn = $("musicBtn");

async function toggleMusic() {
  if (!music) return;

  if (!music.paused) {
    music.pause();
    musicBtn.textContent = "♪ Music off";
    musicBtn.setAttribute("aria-label", "Play background music");
    return;
  }

  try {
    await music.play();
    musicBtn.textContent = "♫ Music on";
    musicBtn.setAttribute("aria-label", "Pause background music");
  } catch (error) {
    musicBtn.textContent = "Tap to play ♪";
    console.warn(
      "Music could not play. Check the audio file path.",
      error
    );
  }
}

musicBtn.addEventListener("click", toggleMusic);

// Screen navigation
function showScreen(id) {
  const target = $(id);

  if (!target) return;

  document.querySelectorAll(".screen").forEach((screen) => {
    screen.classList.toggle("active", screen.id === id);
  });

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

// Open the surprise and attempt to play music
$("openBtn").addEventListener("click", async () => {
  showScreen("birthday");

  if (music.paused) {
    await toggleMusic();
  }
});

// Next screen buttons
document.querySelectorAll("[data-next]").forEach((button) => {
  button.addEventListener("click", () => {
    showScreen(button.dataset.next);
  });
});

// Restart from the beginning
$("restartBtn").addEventListener("click", () => {
  showScreen("welcome");
});

// Starry background
const stars = $("stars");

for (let i = 0; i < 55; i++) {
  const star = document.createElement("span");

  star.className = "star";
  star.textContent = Math.random() > 0.5 ? "✦" : "·";
  star.style.left = `${Math.random() * 100}%`;
  star.style.top = `${Math.random() * 100}%`;
  star.style.fontSize = `${8 + Math.random() * 13}px`;
  star.style.animationDelay = `${Math.random() * 3}s`;
  star.style.animationDuration = `${2 + Math.random() * 3}s`;

  stars.appendChild(star);
}

// Slowly floating hearts
const hearts = $("hearts");
const heartSymbols = ["♡", "♥", "✧"];

function createFloatingHeart() {
  const heart = document.createElement("span");

  heart.className = "floating-heart";
  heart.textContent =
    heartSymbols[Math.floor(Math.random() * heartSymbols.length)];

  heart.style.left = `${Math.random() * 100}%`;
  heart.style.fontSize = `${14 + Math.random() * 20}px`;
  heart.style.animationDuration = `${7 + Math.random() * 5}s`;

  hearts.appendChild(heart);

  setTimeout(() => heart.remove(), 12500);
}

const heartTimer = setInterval(createFloatingHeart, 1200);

// Birthday confetti
function celebrate() {
  const symbols = ["💖", "✨", "🎉", "💕", "🌸", "⭐"];
  const button = $("confettiBtn");

  button.disabled = true;
  button.textContent = "Sending you happiness... 💗";

  for (let i = 0; i < 65; i++) {
    const particle = document.createElement("span");

    particle.textContent =
      symbols[Math.floor(Math.random() * symbols.length)];

    Object.assign(particle.style, {
      position: "fixed",
      left: `${Math.random() * 100}vw`,
      top: "-35px",
      fontSize: `${16 + Math.random() * 18}px`,
      zIndex: "20",
      pointerEvents: "none",
      transition: `top ${2 + Math.random() * 2}s linear`,
    });

    document.body.appendChild(particle);

    requestAnimationFrame(() => {
      particle.style.top = `${65 + Math.random() * 75}vh`;
      particle.style.transform =
        `translateX(${Math.random() * 100 - 50}px) rotate(360deg)`;
    });

    setTimeout(() => particle.remove(), 4500);
  }

  setTimeout(() => {
    button.disabled = false;
    button.textContent = "Make one more wish 🌠";
  }, 1800);
}

$("confettiBtn").addEventListener("click", celebrate);

// Keep the birthday date available for later enhancements.
console.log("Birthday surprise prepared for", herName, birthdayDate);

function unlockWebsite() {
  const password = "Dear@0511";
  const enteredPassword =
    document.getElementById("birthdayPassword").value;

  if (enteredPassword === password) {
    document.getElementById("lockScreen").style.display = "none";
    document.getElementById("birthdayContent").style.display = "block";
  } else {
    document.getElementById("passwordMessage").textContent =
      "Oops! That's not the secret password 💕";
  }
}