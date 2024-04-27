const soundName = new Audio("boop.mp3");
const music = new Audio("epic.mp3")
const craok = new Audio("croak.mp3")
window.addEventListener("load", playSound)
    boop.play();
function playSound() {
    soundName.play()
}
function playMusic(){
music.play()
}
function playCroak(){
croak.play()}