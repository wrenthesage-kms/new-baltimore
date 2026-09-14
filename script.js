/* =========================================================
   NEW BALTIMORE / 2015
   LIVE LOCAL CLOCK
   ========================================================= */

(function () {

  const clock = document.getElementById("local-time");

  if (!clock) return;

  function updateNewBaltimoreTime() {

    const now = new Date();

    const time = new Intl.DateTimeFormat(
      "en-US",
      {
        timeZone: "America/Detroit",
        hour: "numeric",
        minute: "2-digit",
        second: "2-digit",
        hour12: true
      }
    ).format(now);

    clock.textContent = time;
  }

  updateNewBaltimoreTime();

  setInterval(
    updateNewBaltimoreTime,
    1000
  );

})();
