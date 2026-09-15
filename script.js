/* =========================================================
   NEW BALTIMORE // 2015
   javascript, unfortunately
   ========================================================= */

(function () {

  /* =======================================================
     LIVE CLOCK
     ======================================================= */

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


  /* =======================================================
     WIDGET DROPDOWNS
     ======================================================= */

  const widgets = document.querySelectorAll(".widget");

  widgets.forEach(function (widget) {

    const button = widget.querySelector(".widget-tab");
    const body = widget.querySelector(".widget-body");

    if (!button || !body) return;

    function openWidget() {

      widget.classList.add("is-open");

      button.setAttribute("aria-expanded", "true");

      const icon = button.querySelector("b");

      if (icon) {
        icon.textContent = "−";
      }

      body.style.maxHeight = body.scrollHeight + "px";

    }


    function closeWidget() {

      body.style.maxHeight = body.scrollHeight + "px";

      requestAnimationFrame(function () {

        widget.classList.remove("is-open");

        button.setAttribute("aria-expanded", "false");

        const icon = button.querySelector("b");

        if (icon) {
          icon.textContent = "+";
        }

        body.style.maxHeight = "0px";

      });

    }


    button.addEventListener("click", function () {

      const isOpen =
        widget.classList.contains("is-open");

      if (isOpen) {
        closeWidget();
      } else {
        openWidget();
      }

    });


    body.addEventListener("transitionend", function (event) {

      if (event.propertyName !== "max-height") return;

      if (widget.classList.contains("is-open")) {

        body.style.maxHeight = "none";

      }

    });


    /*
      Images can load after the accordion opens.
      Keep the height correct when that happens.
    */

    const resizeObserver =
      new ResizeObserver(function () {

        if (
          widget.classList.contains("is-open") &&
          body.style.maxHeight !== "none"
        ) {

          body.style.maxHeight =
            body.scrollHeight + "px";

        }

      });

    resizeObserver.observe(body);

  });


  /* =======================================================
     SECRET ROMAN IMAGE
     ======================================================= */

  const secretButton =
    document.querySelector(".secret");

  const secretContent =
    document.querySelector(".secret-content");

  if (secretButton && secretContent) {

    secretButton.addEventListener("click", function () {

      const visible =
        secretContent.classList.toggle("is-visible");

      secretButton.setAttribute(
        "aria-expanded",
        String(visible)
      );

      secretButton.textContent =
        visible
          ? "OKAY YOU CLICKED IT"
          : "DON'T CLICK THIS";

    });

  }


  /* =======================================================
     KEEP OPEN ACCORDIONS CORRECT AFTER RESIZE
     ======================================================= */

  window.addEventListener("resize", function () {

    document
      .querySelectorAll(".widget.is-open .widget-body")
      .forEach(function (body) {

        body.style.maxHeight = "none";

      });

  });

})();
