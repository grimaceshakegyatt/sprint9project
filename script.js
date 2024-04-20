const music = new Audio("boop.mp3");
boop.loop = true;
window.addEventListener("mousemove",()=>{
    boop.play();
});