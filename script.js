/* =========================================================
   NEW BALTIMORE // 2015
   tiny bits of movement
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  /*
   * Give the floating PNGs some extremely mild movement.
   * Nothing should feel like a modern animated website.
   * They should feel like somebody accidentally left stickers
   * sitting around on the page.
   */

  const floating = document.querySelectorAll(".floating-png");

  floating.forEach((item, index) => {

    const start = Math.random() * Math.PI * 2;
    const speed = 0.00025 + (index * 0.00004);
    const distance = 8 + (index * 2);

    function drift(time) {

      const wave = Math.sin(time * speed + start);

      const baseTransform =
        getComputedStyle(item).transform === "none"
          ? ""
          : getComputedStyle(item).transform;

      item.style.translate =
        `${wave * distance}px ${Math.cos(time * speed + start) * 5}px`;

      requestAnimationFrame(drift);
    }

    requestAnimationFrame(drift);
  });


  /*
   * Slight random rotation on photo elements.
   * The CSS establishes the main composition;
   * this just keeps repeated visits from feeling too sterile.
   */

  document.querySelectorAll(".photo").forEach((photo) => {

    if (
      photo.classList.contains("hero-photo") ||
      photo.classList.contains("water-main")
    ) {
      return;
    }

    photo.addEventListener("mouseenter", () => {
      photo.style.zIndex = "20";
      photo.style.transition = "transform .18s ease";
      photo.style.transform += " scale(1.025)";
    });

    photo.addEventListener("mouseleave", () => {
      photo.style.zIndex = "";
      photo.style.transform =
        photo.style.transform.replace(" scale(1.025)", "");
    });

  });


  /*
   * Old-web image fallback.
   *
   * If an asset gets renamed or removed from the repo,
   * don't leave an ugly broken-image icon sitting in the page.
   */

  document.querySelectorAll("img").forEach((img) => {

    img.addEventListener("error", () => {

      const replacement = document.createElement("div");

      replacement.className = "missing-image";

      replacement.innerHTML = `
        <span>IMAGE MISSING</span>
        <strong>${img.alt || "UNKNOWN"}</strong>
      `;

      img.replaceWith(replacement);

    });

  });


  /*
   * Tiny 2015-ish status message when the page loads.
   * It disappears quickly and doesn't interrupt anything.
   */

  const status = document.createElement("div");

  status.style.position = "fixed";
  status.style.left = "12px";
  status.style.bottom = "12px";
  status.style.zIndex = "999";
  status.style.padding = "7px 9px";
  status.style.background = "#17171a";
  status.style.color = "#f1eee5";
  status.style.fontFamily = '"Courier New", monospace';
  status.style.fontSize = "8px";
  status.style.letterSpacing = ".08em";
  status.style.textTransform = "uppercase";
  status.style.pointerEvents = "none";
  status.textContent = "NEW BALTIMORE // 2015";

  document.body.appendChild(status);

  setTimeout(() => {
    status.style.transition = "opacity .7s ease";
    status.style.opacity = "0";

    setTimeout(() => {
      status.remove();
    }, 800);

  }, 2200);

});
