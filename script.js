/* =========================================================
   NEW BALTIMORE // interaction
   ========================================================= */

(function(){

  /* ---------------------------------------------------------
     LIVE CLOCK
     --------------------------------------------------------- */

  const clock = document.getElementById("live-clock");

  function updateClock(){

    if(!clock) return;

    const now = new Date();

    clock.textContent = now.toLocaleTimeString("en-US", {
      hour:"numeric",
      minute:"2-digit",
      second:"2-digit"
    });

  }

  updateClock();

  setInterval(updateClock, 1000);


  /* ---------------------------------------------------------
     SCRAPBOOK WIDGETS
     --------------------------------------------------------- */

  document.querySelectorAll(".widget-tab").forEach(tab => {

    tab.addEventListener("click", () => {

      const widget = tab.closest(".widget");

      if(!widget) return;

      const open = widget.classList.toggle("is-open");

      tab.setAttribute(
        "aria-expanded",
        String(open)
      );

      const symbol = tab.querySelector("b");

      if(symbol){
        symbol.textContent = open ? "−" : "+";
      }

    });

  });


  /* ---------------------------------------------------------
     ROMAN SECRET FLAP
     --------------------------------------------------------- */

  document.querySelectorAll(".secret").forEach(button => {

    button.addEventListener("click", () => {

      const box = button.nextElementSibling;

      if(!box) return;

      const open = box.classList.toggle("is-visible");

      button.setAttribute(
        "aria-expanded",
        String(open)
      );

      button.textContent =
        open
          ? "OKAY YOU CLICKED IT"
          : "DON'T CLICK THIS";

    });

  });

})();
