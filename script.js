// ===============================
// ASWedding Script Part 1
// ===============================

// Sayfa yüklendiğinde

window.addEventListener("load", function () {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.style.opacity = "0";

        setTimeout(() => {

            loader.style.display = "none";

        }, 700);

    }, 3000);

});

// ===============================
// Zarf Açılışı
// ===============================

const envelope = document.getElementById("magic-envelope");
const welcome = document.getElementById("welcome");
const invitation = document.getElementById("invitation");

envelope.addEventListener("click", function () {
    alert("Tıklandı");

    envelope.style.animation = "envelopeOpen .9s forwards";

    setTimeout(() => {

        welcome.style.display = "none";
        invitation.style.display = "block";

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }, 900);

});
// ===============================
// Geri Sayım
// ===============================

const eventDate = new Date("2026-07-26T20:00:00").getTime();

setInterval(function () {

    const now = new Date().getTime();

    const distance = eventDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;

    document.getElementById("hours").innerHTML = hours;

    document.getElementById("minutes").innerHTML = minutes;

    document.getElementById("seconds").innerHTML = seconds;

}, 1000);
