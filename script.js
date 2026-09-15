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
     WIDGET DROPDOWNS
     
     IMPORTANT:
     We use the actual rendered height instead of the
     0fr/1fr grid trick. This makes the thing physically
     open downward and prevents the contents from being
     permanently visible.
     --------------------------------------------------------- */

  document.querySelectorAll(".widget-tab").forEach(tab => {

    tab.addEventListener("click", () => {

      const widget = tab.closest(".widget");

      if(!widget) return;

      const body = widget.querySelector(".widget-body");

      if(!body) return;

      const opening = !widget.classList.contains("is-open");

      if(opening){

        widget.classList.add("is-open");

        body.style.maxHeight = body.scrollHeight + "px";

      }else{

        body.style.maxHeight = body.scrollHeight + "px";

        requestAnimationFrame(() => {
          widget.classList.remove("is-open");
          body.style.maxHeight = "0px";
        });

      }

      tab.setAttribute(
        "aria-expanded",
        String(opening)
      );

      const symbol = tab.querySelector("b");

      if(symbol){
        symbol.textContent = opening ? "−" : "+";
      }

    });

  });


  /* ---------------------------------------------------------
     SECRET ROMAN FLAP
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


  /* ---------------------------------------------------------
     KEEP OPEN WIDGETS CORRECT AFTER RESIZE
     --------------------------------------------------------- */

  window.addEventListener("resize", () => {

    document
      .querySelectorAll(".widget.is-open .widget-body")
      .forEach(body => {

        body.style.maxHeight = body.scrollHeight + "px";

      });

  });

})();
