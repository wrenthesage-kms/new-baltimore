/* =========================================================
   NEW BALTIMORE // 2015
   script.js
   ========================================================= */


/* =========================================================
   LIVE CLOCK
   ========================================================= */

(function liveClock() {

  const clock = document.getElementById("live-clock");

  if (!clock) return;

  function updateClock() {

    const now = new Date();

    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");

    const ampm = hours >= 12 ? "pm" : "am";

    hours = hours % 12;

    if (hours === 0) {
      hours = 12;
    }

    clock.textContent =
      `${hours}:${minutes}:${seconds} ${ampm}`;
  }

  updateClock();

  setInterval(updateClock, 1000);

})();



/* =========================================================
   FISHFLY RANDOM ROTATION
   ========================================================= */

(function fishflyChaos() {

  const flies = document.querySelectorAll(".fishfly");

  if (!flies.length) return;

  flies.forEach(function (fly) {

    const rotation = Math.floor(Math.random() * 30) - 15;
    const scale = 0.78 + Math.random() * 0.45;

    fly.style.transform =
      `rotate(${rotation}deg) scale(${scale})`;

  });

})();



/* =========================================================
   RANDOM FISHFLY DRIFT
   ========================================================= */

(function driftingFishflies() {

  const flies = document.querySelectorAll(".fishfly");

  if (!flies.length) return;

  flies.forEach(function (fly) {

    const duration =
      4.5 + Math.random() * 4;

    const delay =
      Math.random() * -6;

    fly.style.animationDuration =
      `${duration}s`;

    fly.style.animationDelay =
      `${delay}s`;

  });

})();



/* =========================================================
   TINY 2015 DATE STAMP
   ========================================================= */

(function dateStamp() {

  const dateElements =
    document.querySelectorAll("[data-2015-date]");

  if (!dateElements.length) return;

  dateElements.forEach(function (element) {

    const date = new Date();

    const month = String(
      date.getMonth() + 1
    ).padStart(2, "0");

    const day = String(
      date.getDate()
    ).padStart(2, "0");

    element.textContent =
      `06/${day}/2015`;

  });

})();



/* =========================================================
   OLD INTERNET STATUS
   ========================================================= */

(function statusBlink() {

  const status =
    document.querySelector("[data-status]");

  if (!status) return;

  const statuses = [
    "online",
    "online",
    "probably online",
    "away",
    "online",
    "don't text me",
    "online"
  ];

  let index = 0;

  setInterval(function () {

    index++;

    if (index >= statuses.length) {
      index = 0;
    }

    status.textContent =
      statuses[index];

  }, 4800);

})();



/* =========================================================
   RANDOM LITTLE PAGE MESSAGES
   ========================================================= */

(function dumbMessages() {

  const message =
    document.querySelector("[data-random-message]");

  if (!message) return;

  const messages = [
    "someone left the aux cord in the car",
    "facebook already knows",
    "why is there a fishfly in here",
    "windows down",
    "M-29 →",
    "somebody's probably at Burke Park",
    "roman definitely knows where the keys are",
    "this website was a bad idea",
    "2015 was weird",
    "do not perceive me"
  ];

  message.textContent =
    messages[Math.floor(Math.random() * messages.length)];

})();



/* =========================================================
   KONAMI-ISH DUMB LITTLE EASTER EGG
   ========================================================= */

(function keyboardNonsense() {

  let keys = "";

  const target = "fish";

  document.addEventListener("keydown", function (event) {

    keys += event.key.toLowerCase();

    if (keys.length > target.length) {
      keys = keys.slice(-target.length);
    }

    if (keys === target) {

      document.body.classList.toggle("fish-mode");

      keys = "";

    }

  });

})();



/* =========================================================
   CONSOLE MESSAGE
   ========================================================= */

console.log(
  "%cnew baltimore // 2015",
  "font-size:18px;font-weight:bold;"
);

console.log(
  "you found the console. congratulations."
);

console.log(
  "there is absolutely nothing useful in here."
);
