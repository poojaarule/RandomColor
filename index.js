let bgColorsArray = ["#e75d7c", "#b16cef", "#53cca4", "#efc84d", "#628ef0", "#184b73", "#883e7f", "#ed048b"];
console.log(bgColorsArray.length);
let buttonElement = document.getElementById("button");
let bgContainerElement = document.getElementById("bgContainer");


bgContainerElement.style.backgroundColor = bgColorsArray[0];


function clickMe() {
    let bgColorsArray = ["#e75d7c", "#b16cef", "#53cca4", "#efc84d", "#628ef0", "#184b73", "#883e7f", "#ed048b"];
console.log(bgColorsArray.length);
let buttonElement = document.getElementById("button");
let bgContainerElement = document.getElementById("bgContainer");


bgContainerElement.style.backgroundColor = bgColorsArray[0];

    let numberOfBgColors = bgColorsArray.length;
    let randomBgColorIndex = Math.ceil(Math.random() * numberOfBgColors);

    let randomBgColor = bgColorsArray[randomBgColorIndex];
    bgContainerElement.style.backgroundColor = randomBgColor;
}