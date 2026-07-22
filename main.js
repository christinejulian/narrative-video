// ================================
//   AUDIO SETUP
// ================================

const music = document.getElementById("music");
const filmSound = document.getElementById("filmSound");

// ================================
//   SLIDE SETUP
// ================================

const slides = document.querySelectorAll(".slide");
let current = 0;

// ================================
//   START AFTER LEADER COUNTDOWN
// ================================

setTimeout(() => {
  const leader = document.getElementById("leader");
  leader.style.display = "none";

  // Play both audio tracks
  music.play().catch(() => {});
  filmSound.play().catch(() => {});

  runProjector();
}, 3000);

// ================================
//   PROJECTOR LOGIC
// ================================

function runProjector() {

  function nextSlide() {
    slides[current].classList.remove("active");
    current++;

    if (current >= slides.length) return;

    slides[current].classList.add("active");

    // Random silent‑film timing (7–13 seconds)
    const randomTime = 7000 + Math.random() * 6000;
    setTimeout(nextSlide, randomTime);
  }

  // First slide change
  setTimeout(nextSlide, 3000);

  // Cigarette burn cue at 30 seconds
  const cue = document.getElementById("cue");
  setTimeout(() => {
    cue.style.opacity = 1;
    setTimeout(() => {
      cue.style.opacity = 0;
    }, 2500);
  }, 30000);
}
