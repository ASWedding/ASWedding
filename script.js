/*==================================================
 ASWedding 2.0
 Script.js - PART 1
==================================================*/

"use strict";

/*==================================================
 ELEMENTLER
==================================================*/

const loader = document.getElementById("loader");
const opening = document.getElementById("opening");
const envelope = document.getElementById("envelope");
const invitation = document.getElementById("invitation");

const music = document.getElementById("music");
const musicButton = document.getElementById("musicButton");

/*==================================================
 DEĞİŞKENLER
==================================================*/

let musicStarted = false;
let invitationOpened = false;

/*==================================================
 LOADER
==================================================*/

window.addEventListener("load", () => {

    setTimeout(() => {

        loader.style.opacity = "0";
        loader.style.visibility = "hidden";

        setTimeout(() => {

            loader.style.display = "none";

        }, 900);

    }, 1800);

});

/*==================================================
 MÜZİK
==================================================*/

function playMusic() {

    if (musicStarted) return;

    music.volume = 0.35;

    music.play().catch(() => {});

    musicStarted = true;

    musicButton.classList.add("playing");

}

musicButton.addEventListener("click", () => {

    if (!musicStarted) {

        playMusic();
        return;

    }

    if (music.paused) {

        music.play();

        musicButton.classList.add("playing");

    } else {

        music.pause();

        musicButton.classList.remove("playing");

    }

});

/*==================================================
 ZARF
==================================================*/

function openInvitation(){

    if(invitationOpened) return;

    invitationOpened = true;

    playMusic();

    envelope.classList.add("open");

    setTimeout(()=>{

        opening.style.opacity="0";
        opening.style.pointerEvents="none";

    },800);

    setTimeout(()=>{

        opening.style.display="none";

        invitation.classList.add("show");

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    },1700);

}

envelope.addEventListener("click", openInvitation);
/*==================================================
 DAVETİYEYİ AÇ
==================================================*/



/*==================================================
 SCROLL ANIMATION
==================================================*/

const animatedItems = document.querySelectorAll(

".info-card, .time-box, .family-card, .memorial, .verse, .photo-upload, .message-section, .contact, .rsvp"

);

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: 0.15

});

animatedItems.forEach((item) => {

    item.classList.add("fade-up");

    observer.observe(item);

});

/*==================================================
 SAYFA GEÇİŞİ
==================================================*/

window.addEventListener("beforeunload", () => {

    window.scrollTo(0, 0);

});/*==================================================
 GERİ SAYIM
==================================================*/

const weddingDate = new Date("2026-07-26T20:00:00").getTime();

function updateCountdown() {

    const now = new Date().getTime();

    const distance = weddingDate - now;

    if (distance <= 0) {

        ["days","hours","minutes","seconds"].forEach(id => {
            document.getElementById(id).textContent = "00";
        });

        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (distance % (1000 * 60 * 60)) /
        (1000 * 60)
    );

    const seconds = Math.floor(
        (distance % (1000 * 60)) /
        1000
    );

    document.getElementById("days").textContent =
        String(days).padStart(2, "0");

    document.getElementById("hours").textContent =
        String(hours).padStart(2, "0");

    document.getElementById("minutes").textContent =
        String(minutes).padStart(2, "0");

    document.getElementById("seconds").textContent =
        String(seconds).padStart(2, "0");

}

updateCountdown();

setInterval(updateCountdown,1000);

/*==================================================
 KONUM BUTONU
==================================================*/

const locationButton =
document.querySelector(".location-button");

if(locationButton){

locationButton.href =
"https://www.google.com/maps/search/?api=1&query=Kemal+Apartmanı,+1088+Sokak+No+6,+39100+Kırklareli+Merkez";

locationButton.target="_blank";

}

/*==================================================
 FOTOĞRAF YÜKLE
==================================================*/

const uploadButton =
document.getElementById("uploadPhotos");

if(uploadButton){

uploadButton.addEventListener("click",(e)=>{

e.preventDefault();

window.open(
"https://drive.google.com/",
"_blank"
);

});

}
/*==================================================
 RSVP FORM
==================================================*/

const rsvpForm = document.getElementById("rsvpForm");

if (rsvpForm) {

    rsvpForm.addEventListener("submit", function (e) {

        e.preventDefault();

        alert("🤍 Katılım onayınız alınmıştır. Teşekkür ederiz.");

        rsvpForm.reset();

    });

}

/*==================================================
 MESAJ FORMU
==================================================*/

const messageForm = document.getElementById("messageForm");

if (messageForm) {

    messageForm.addEventListener("submit", function (e) {

        e.preventDefault();

        alert("💌 Güzel dileğiniz için çok teşekkür ederiz.");

        messageForm.reset();

    });

}

/*==================================================
 ALTIN PARLAMA EFEKTİ
==================================================*/

document.querySelectorAll(
".gold-button,.location-button,.rsvp button"
).forEach(button => {

    button.addEventListener("mouseenter", () => {

        button.style.transform = "translateY(-5px) scale(1.03)";

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform = "";

    });

});

/*==================================================
 MÜZİK BUTONU
==================================================*/

setInterval(() => {

    if (!music.paused) {

        musicButton.style.transform = "scale(1.08)";

        setTimeout(() => {

            musicButton.style.transform = "scale(1)";

        }, 500);

    }

}, 1500);

/*==================================================
 SAYFA BAŞLIĞI
==================================================*/

document.title = "💍 Ayşenur & Şaban | Söz & Nişan";
/*==================================================
 ASWedding 2.0
 PART 5
 Premium Effects
==================================================*/

/*==========================================
 YUMUŞAK SCROLL
==========================================*/

document.querySelectorAll('a[href^="#"]').forEach(link=>{

link.addEventListener("click",(e)=>{

const target=document.querySelector(link.getAttribute("href"));

if(target){

e.preventDefault();

target.scrollIntoView({

behavior:"smooth"

});

}

});

});

/*==========================================
 KARTLARA HAFİF HAREKET
==========================================*/

const cards=document.querySelectorAll(

".info-card,.family-card,.time-box"

);

cards.forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

const rotateY=(x-rect.width/2)/18;

const rotateX=(rect.height/2-y)/18;

card.style.transform=

`perspective(900px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
translateY(-6px)`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform="";

});

});

/*==========================================
 SAYFA EN ÜSTE DÖN
==========================================*/

window.addEventListener("beforeunload",()=>{

window.scrollTo(0,0);

});

/*==========================================
 KONSOL MESAJI
==========================================*/

console.log("%cASWedding 2.0","font-size:26px;color:#C6A04B;font-weight:bold;");
console.log("Ayşenur ❤️ Şaban");

/*==========================================
 BİTTİ
==========================================*/
