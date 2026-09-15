/* =========================================================
   NEW BALTIMORE // LIVE CLOCK
   ========================================================= */

(function () {
  const clock = document.getElementById("live-clock");

  if (!clock) return;

  function updateClock() {
    const now = new Date();

    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");

    const ampm = hours >= 12 ? "PM" : "AM";

    hours = hours % 12 || 12;

    clock.textContent =
      `${String(hours).padStart(2, "0")}:${minutes}:${seconds} ${ampm}`;
  }

  updateClock();
  setInterval(updateClock, 1000);
})();
