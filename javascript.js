function hawktuah() {

    var sound = new Audio("resources/hawktuah.mp3");
    sound.play();
}

document.getElementsByClassName("button")[0].addEventListener("click", hawktuah);