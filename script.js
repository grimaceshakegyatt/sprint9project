const soundName = new Audio("boop.mp3");
const music = new Audio("epic.mp3")
const croak = new Audio("croak.mp3")
const evil = new Audio("haha.mp3")
const beatbox = new Audio("rngbeatbox.mp3")
const pipe = new Audio("wamp.mp3")
const milk = new Audio("milk.mp3")
const cinderblock = new Audio("cinderblock 2.mp3")
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
function stopMusic(){
    music.pause()
}
function metalPipe(){
    pipe.play()
}
function gotMilk(){
    milk.play()
}
function heyWatson(){
    cinderblock.play()
}