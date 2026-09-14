/* =========================================================
   NEW BALTIMORE // LIVE CLOCK
   ========================================================= */
(function () {
  const clock = document.getElementById("live-clock");
  if (!clock) return;
  function updateClock() {
    const now = new Date();
    const time = now.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      second: "2-digit"
    });
    clock.textContent = time;
  }
  updateClock();
  setInterval(updateClock, 1000);
})();
