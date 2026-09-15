/* =========================================================
   NEW BALTIMORE // 2015
   tiny bits of bullshit
   ========================================================= */

(function () {

  /* ---------------------------------------------------------
     LIVE CLOCK
     --------------------------------------------------------- */

  const clock = document.getElementById("live-clock");

  function updateClock() {
    if (!clock) return;

    const now = new Date();

    clock.textContent = now.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      second: "2-digit"
    });
  }

  updateClock();
  setInterval(updateClock, 1000);


  /* ---------------------------------------------------------
     RANDOM ROTATION FOR SCRAPBOOK PIECES
     --------------------------------------------------------- */

  const loosePieces = document.querySelectorAll(
    ".map-list span, .abcc-list b, .roman-stats b, .year-items b"
  );

  loosePieces.forEach((piece) => {
    const rotation = (Math.random() * 10 - 5).toFixed(2);
    piece.style.setProperty("--r", `${rotation}deg`);
  });


  /* ---------------------------------------------------------
     LITTLE SCROLL TITLE
     --------------------------------------------------------- */

  const title = document.querySelector(".address-bar");

  window.addEventListener("scroll", () => {

    if (!title) return;

    const y = window.scrollY;

    if (y > 250) {
      title.innerHTML =
        "<span>http://</span> newbaltimore.local / somewhere / 2015";
    } else {
      title.innerHTML =
        "<span>http://</span> newbaltimore.local / 2015 / whatever";
    }

  }, { passive: true });


  /* ---------------------------------------------------------
     OCCASIONAL FISHFLY MOVEMENT
     --------------------------------------------------------- */

  document.querySelectorAll(".fly").forEach((fly) => {

    const speed = 9 + Math.random() * 12;
    const delay = Math.random() * -12;

    fly.style.animationDuration = `${speed}s`;
    fly.style.animationDelay = `${delay}s`;

  });


  /* ---------------------------------------------------------
     "YOU ARE STILL HERE" FOOTER
     --------------------------------------------------------- */

  const secret = document.querySelector(".footer-secret");

  if (secret) {

    secret.addEventListener("click", () => {

      secret.textContent =
        "seriously go talk to roman.";

      secret.style.color = "#f4c928";
      secret.style.cursor = "default";

    });

  }

})();
