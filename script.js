const soundName = new Audio("boop.mp3");
const music = new Audio("epic.mp3")
const croak = new Audio("croak.mp3")
const evil = new Audio("haha.mp3")
const beatbox = new Audio("rngbeatbox.mp3")
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

function laffEvil(){
    evil.play()
}
function beatBox(){
beatbox.play()
}