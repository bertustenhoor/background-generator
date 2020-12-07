var css = document.querySelector("h3");
var color1 = document.getElementById("color1");
var color2 = document.getElementById("color2");
var randomButton = document.getElementById("random");

adaptColor();

function adaptColor() {
    document.body.style.background = "linear-gradient(to right, " 
    + color1.value + " , " + color2.value + ")";
    css.textContent = document.body.style.background + ";";
}

function generateHexColor() {
    var randomNumber = Math.floor(Math.random()*16777215).toString(16);

    if (randomNumber.length < 6) {
        return "#0" + randomNumber;
    } else {
        return "#" + randomNumber;
    }
}

function setRandomColors() {

    color1.value = generateHexColor();
    color2.value = generateHexColor();

    adaptColor();
}

color1.addEventListener("input", adaptColor);

color2.addEventListener("input", adaptColor);

randomButton.addEventListener("click", setRandomColors);

