var tom1 = new Audio("./sounds/tom-1.mp3");
var tom2 = new Audio("./sounds/tom-2.mp3")
var tom3 = new Audio("./sounds/tom-3.mp3")
var tom4 = new Audio("./sounds/tom-4.mp3")
var crash = new Audio("./sounds/crash.mp3")
var kick = new Audio("./sounds/kick-bass.mp3")
var snare = new Audio("./sounds/snare.mp3")


document.addEventListener("keydown", function(event) {
    makeSound(event.key);
    buttonAnimation(event.key);
});

for (var i = 0; i< document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        makeSound(this.innerHTML);
        buttonAnimation(this.innerHTML);
    });
}

function makeSound (criteria) {
    switch(criteria) {
        case "w":
            crash.play();
            break;
        case "a":
            kick.play();
            break;
        case "s":
            snare.play();
            break;
        case "d":
            tom1.play();
        case "j":
            tom2.play();
        case "k":
            tom3.play();
        case "l":
            tom4.play();
            break;
            default: console.log(innerHTML);
    } 
}

function buttonAnimation (currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    
    setTimeout(function() {
        activeButton.classList.remove("pressed");

    }, 200);
}