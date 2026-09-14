/* =========================================================
   NEW BALTIMORE // 2015
   actual time. no fake bullshit.
   ========================================================= */

function updateLocalTime() {
    const clock = document.getElementById("live-time");

    if (!clock) return;

    const now = new Date();

    const time = now.toLocaleTimeString([], {
        hour: "numeric",
        minute: "2-digit",
        second: "2-digit"
    });

    clock.textContent = time;
}

updateLocalTime();

setInterval(updateLocalTime, 1000);


/* =========================================================
   LITTLE 2015-ISH PAGE BEHAVIOR
   ========================================================= */

document.querySelectorAll(".site-nav a").forEach(function (link) {

    link.addEventListener("click", function () {

        document.body.classList.add("page-jump");

        setTimeout(function () {
            document.body.classList.remove("page-jump");
        }, 300);

    });

});
