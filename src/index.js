// Импортируйте компоненты
import { doc } from "prettier";
import main from "./main";
main();

console.log('Hi');

// Double range slider
let sliderOne = document.getElementById('slider-1');
let sliderTwo = document.getElementById('slider-2');
let displayValOne = document.getElementById('range1');
let displayValTwo = document.getElementById('range2');
let minGap = 1;
let sliderTrack = document.querySelector('.doubslider__track');
let sliderMaxValue = document.getElementById('slider-1').max;
sliderOne.oninput = function () {
    if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
        sliderOne.value = parseInt(sliderTwo.value) - minGap;
    }
    displayValOne.textContent = sliderOne.value;
    fillColor();
}
sliderTwo.oninput = function () {
    if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
        sliderTwo.value = parseInt(sliderOne.value) + minGap;
    }
    displayValTwo.textContent = sliderTwo.value;
    fillColor();
}
function fillColor() {
    let persent1 = (sliderOne.value / sliderMaxValue) * 100;
    let persent2 = (sliderTwo.value / sliderMaxValue) * 100;
    sliderTrack.style.background = `linear-gradient(to right, #dadae5 ${persent1}%, #3264fe ${persent1}%, #3264fe ${persent2}%, #dadae5 ${persent2}%)`;
}

// Slider number three
let range = document.querySelector('.slider-three__input');
let rangeNum = document.querySelector('.slider-three__num');
let labelIn = document.querySelector('.slider-three__in');
range.oninput = function () {
    rangeNum.style.left = this.value + 'px';
    rangeNum.innerHTML = this.value;
    labelIn.value = this.value;
}
labelIn.oninput = function () {
    rangeNum.style.left = this.value + 'px';
    rangeNum.innerHTML = this.value;
    range.value = this.value;
}
