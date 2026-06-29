/*=========================================
ASWedding v2.0
PART 1
=========================================*/

const loader = document.getElementById("loader");

const envelope = document.getElementById("envelope");

const invitation = document.getElementById("invitation");

const music = document.getElementById("music");

const musicButton = document.getElementById("musicButton");

let musicStarted = false;

/*==============================
Loader
==============================*/

window.addEventListener("load",()=>{

setTimeout(()=>{

loader.style.opacity="0";

loader.style.pointerEvents="none";

setTimeout(()=>{

loader.style.display="none";

},800);

},1800);

});

/*==============================
Music
==============================*/

function startMusic(){

if(musicStarted) return;

music.volume=.35;

music.play();

musicStarted=true;

}

musicButton.addEventListener("click",()=>{

startMusic();

if(music.paused){

music.play();

musicButton.innerHTML="🔊";

}else{

music.pause();

musicButton.innerHTML="🔇";

}

});

/*==============================
Envelope
==============================*/

envelope.addEventListener("click",()=>{

startMusic();

envelope.classList.add("open");

setTimeout(()=>{

document.getElementById("welcome").style.display="none";

invitation.classList.add("show");

window.scrollTo({

top:0,

behavior:"smooth"

});

},1200);

});
