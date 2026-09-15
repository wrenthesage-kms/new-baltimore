function updateLiveClock() {
  const clock = document.getElementById("live-clock");
  if (!clock) return;

  const now = new Date();

  let hours = now.getHours();
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");
  const ampm = hours >= 12 ? "PM" : "AM";

  hours = hours % 12 || 12;

  clock.textContent =
    `${String(hours).padStart(2, "0")}:${minutes}:${seconds} ${ampm}`;
}

updateLiveClock();
setInterval(updateLiveClock, 1000);


/* tiny bit of controlled chaos */
document.querySelectorAll(".fly").forEach((fly, i) => {
  fly.addEventListener("mouseenter", () => {
    fly.style.transform =
      `rotate(${Math.random() * 180 - 90}deg) scale(1.25)`;
  });

  fly.addEventListener("mouseleave", () => {
    fly.style.transform = "";
  });
});


/* random rotation for disposable little stickers */
document.querySelectorAll(".year-note, .object-note").forEach(el => {
  const rotation = (Math.random() * 8 - 4).toFixed(2);
  el.style.setProperty("--random-rotation", `${rotation}deg`);
});


/* reveal sections slightly as you hit them */
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("seen");
      }
    });
  },
  { threshold: 0.08 }
);

document.querySelectorAll("section").forEach(section => {
  observer.observe(section);
});
