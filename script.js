/* =========================================================
   NEW BALTIMORE // LIVE CLOCK
   ========================================================= */

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
