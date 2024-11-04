function hawktuah() {

    var sound = new Audio("resources/hawktuah.mp3");
    sound.play();
}

function plusOne() {

    const button = document.querySelector('.display-num');
    const animation = [{animation: "fade 2s linear forwards"}];
    // button.classList.toggle()
    button.animate(animation);
    console.log("function running");
}

document.getElementsByClassName("button")[0].addEventListener("click", hawktuah);
document.getElementsByClassName("button")[0].addEventListener("click", plusOne);

