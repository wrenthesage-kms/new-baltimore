/* =========================================================
   NEW BALTIMORE // 2015
   CHAOS ENGINE
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  /* =======================================================
     CURSOR
     ======================================================= */

  const cursor = document.getElementById("cursor-dot");

  document.addEventListener("mousemove", (event) => {
    if (!cursor) return;

    cursor.style.left = `${event.clientX}px`;
    cursor.style.top = `${event.clientY}px`;
  });


  /* =======================================================
     CHAOS BUTTON
     ======================================================= */

  const chaosButton = document.getElementById("chaosButton");

  if (chaosButton) {
    chaosButton.addEventListener("click", () => {

      document.body.classList.toggle("chaos-mode");

      chaosButton.textContent =
        document.body.classList.contains("chaos-mode")
          ? "OH FUCK"
          : "MAKE IT WORSE";

    });
  }


  /* =======================================================
     LOCATION POPUP
     ======================================================= */

  const locationButton =
    document.getElementById("locationButton");

  const locationPopup =
    document.getElementById("locationPopup");

  const closeLocation =
    document.getElementById("closeLocation");

  if (locationButton && locationPopup) {

    locationButton.addEventListener("click", () => {
      locationPopup.classList.add("show");
    });

  }

  if (closeLocation && locationPopup) {

    closeLocation.addEventListener("click", () => {
      locationPopup.classList.remove("show");
    });

  }

  if (locationPopup) {

    locationPopup.addEventListener("click", (event) => {

      if (event.target === locationPopup) {
        locationPopup.classList.remove("show");
      }

    });

  }


  /* =======================================================
     FAKE SNAPCHAT
     ======================================================= */

  const snapPopup =
    document.getElementById("snapPopup");

  const closeSnap =
    document.getElementById("closeSnap");

  if (closeSnap && snapPopup) {

    closeSnap.addEventListener("click", () => {
      snapPopup.classList.remove("show");
    });

  }

  /*
     Random Snapchat appearance.
     Delayed so it feels like the website itself
     suddenly received something.
  */

  setTimeout(() => {

    if (!snapPopup) return;

    snapPopup.classList.add("show");

  }, 6500);


  /* =======================================================
     RANDOM PLACE GENERATOR
     ======================================================= */

  const randomButton =
    document.getElementById("randomButton");

  const randomResult =
    document.getElementById("randomResult");

  const places = [

    {
      place: "BURKE PARK",
      text: "Go sit on the dock. Someone you know will probably show up."
    },

    {
      place: "M-29",
      text: "Get in the car. Windows down. No destination."
    },

    {
      place: "WASHINGTON STREET",
      text: "Walk downtown until you recognize someone."
    },

    {
      place: "FRONT STREET",
      text: "Keep walking toward the water."
    },

    {
      place: "ANCHOR BAY",
      text: "Find somewhere you can see the boats and do absolutely nothing."
    },

    {
      place: "FESTIVAL PARK",
      text: "There is probably a baseball game happening somewhere."
    },

    {
      place: "BAY-RAMA",
      text: "It's late June. Everyone is here. Good luck."
    },

    {
      place: "I-94",
      text: "Leave town for a while. You'll be back."
    },

    {
      place: "ROMAN'S BASEMENT",
      text: "There are too many people here and nobody knows where the charger went."
    },

    {
      place: "TYLER'S CAR",
      text: "You can hear the bass from three houses away."
    }

  ];

  if (randomButton && randomResult) {

    randomButton.addEventListener("click", () => {

      const selected =
        places[Math.floor(Math.random() * places.length)];

      randomResult.innerHTML = `
        <strong>${selected.place}</strong>
        <br><br>
        ${selected.text}
      `;

      randomResult.animate(
        [
          {
            transform: "rotate(-4deg) scale(.85)",
            opacity: 0
          },
          {
            transform: "rotate(2deg) scale(1.04)",
            opacity: 1
          },
          {
            transform: "rotate(0deg) scale(1)",
            opacity: 1
          }
        ],
        {
          duration: 450,
          easing: "cubic-bezier(.2,1.5,.5,1)"
        }
      );

    });

  }


  /* =======================================================
     DRAGGABLE PERSONAL EFFECTS
     ======================================================= */

  const draggableItems =
    document.querySelectorAll(".draggable");

  draggableItems.forEach((item) => {

    let dragging = false;
    let offsetX = 0;
    let offsetY = 0;

    item.addEventListener("pointerdown", (event) => {

      dragging = true;

      item.setPointerCapture(event.pointerId);

      const rect = item.getBoundingClientRect();

      offsetX =
        event.clientX - rect.left;

      offsetY =
        event.clientY - rect.top;

      item.style.zIndex = "3000";

    });

    item.addEventListener("pointermove", (event) => {

      if (!dragging) return;

      const board =
        document.getElementById("effectsBoard");

      if (!board) return;

      const boardRect =
        board.getBoundingClientRect();

      const x =
        event.clientX -
        boardRect.left -
        offsetX;

      const y =
        event.clientY -
        boardRect.top -
        offsetY;

      item.style.left = `${x}px`;
      item.style.top = `${y}px`;

    });

    item.addEventListener("pointerup", () => {

      dragging = false;

      /*
        Give the object a slightly random final angle
        so the board never looks perfectly arranged.
      */

      const rotation =
        Math.floor(Math.random() * 15) - 7;

      item.style.transform =
        `rotate(${rotation}deg)`;

    });

  });


  /* =======================================================
     FISHFLY SPAWNER
     ======================================================= */

  const fishflyImages = [
    "tiny fishfly right.PNG",
    "dumb ff left.PNG",
    "dumb ff right.PNG",
    "left fishfly.PNG",
    "wings spread.PNG",
    "upside down fishfly.PNG",
    "weird fishfly.PNG"
  ];

  function createFlyingFishfly() {

    const fly =
      document.createElement("img");

    fly.src =
      `./${fishflyImages[
        Math.floor(Math.random() * fishflyImages.length)
      ]}`;

    fly.alt = "";

    fly.style.position = "fixed";
    fly.style.zIndex = "700";
    fly.style.pointerEvents = "none";

    const size =
      35 + Math.random() * 90;

    fly.style.width =
      `${size}px`;

    const startSide =
      Math.random() > .5;

    fly.style.left =
      startSide
        ? "-150px"
        : `${window.innerWidth + 100}px`;

    fly.style.top =
      `${10 + Math.random() * 75}vh`;

    document.body.appendChild(fly);

    const endX =
      startSide
        ? window.innerWidth + 200
        : -200;

    const endY =
      parseFloat(fly.style.top) +
      (Math.random() * 300 - 150);

    const rotation =
      Math.random() * 720 - 360;

    const duration =
      5000 + Math.random() * 7000;

    fly.animate(
      [
        {
          transform:
            `translate(0,0) rotate(0deg)`
        },
        {
          transform:
            `translate(${endX + (startSide ? 150 : -window.innerWidth - 100)}px, ${endY}px) rotate(${rotation}deg)`
        }
      ],
      {
        duration,
        easing: "linear"
      }
    );

    setTimeout(() => {
      fly.remove();
    }, duration + 100);

  }

  /*
    A few fishflies occasionally appear.
  */

  setInterval(() => {

    if (
      document.visibilityState === "visible" &&
      Math.random() > .3
    ) {
      createFlyingFishfly();
    }

  }, 2200);


  /* =======================================================
     RANDOM STICKER MOVEMENT
     ======================================================= */

  const stickers =
    document.querySelectorAll(".floating-sticker");

  stickers.forEach((sticker, index) => {

    const amplitude =
      4 + Math.random() * 8;

    const duration =
      2500 + Math.random() * 3000;

    sticker.animate(
      [
        {
          transform:
            `translateY(0) rotate(${index * 3 - 5}deg)`
        },
        {
          transform:
            `translateY(-${amplitude}px) rotate(${index * 3 + 5}deg)`
        },
        {
          transform:
            `translateY(0) rotate(${index * 3 - 5}deg)`
        }
      ],
      {
        duration,
        iterations: Infinity,
        easing: "ease-in-out"
      }
    );

  });


  /* =======================================================
     RANDOM CHARACTER CARD HOVER
     ======================================================= */

  const characterCards =
    document.querySelectorAll(".character-card");

  characterCards.forEach((card) => {

    card.addEventListener("mouseenter", () => {

      card.style.transition =
        "transform .18s ease";

      card.style.transform =
        "rotate(0deg) scale(1.015)";

    });

    card.addEventListener("mouseleave", () => {

      if (card.classList.contains("roman-card")) {
        card.style.transform =
          "rotate(-1deg)";
      } else {
        card.style.transform =
          "rotate(1deg)";
      }

    });

  });


  /* =======================================================
     CONSOLE MESSAGE
     ======================================================= */

  console.log(
    "%cNEW BALTIMORE // 2015",
    "font-size:30px;font-weight:bold;color:#ffe500;background:#080808;padding:10px;"
  );

  console.log(
    "%cIf you're reading this, you're already involved.",
    "font-size:14px;color:#ff2b8a;"
  );

});
