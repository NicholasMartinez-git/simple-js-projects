"use strict";

(function () {

    function randomHexColor() {
        const hex = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
        const hexCode = []; 

        for (let i = 0; i <= 5; i++) {
            let randomHexColorIndex = Math.floor(Math.random() * hex.length);
            hexCode.push(hex[randomHexColorIndex]);
        }

        return "#" + hexCode.join('');
    }

    function hexBackgroundColor() {

        let btn = document.getElementById('btn');
        btn.addEventListener('click', function () {
            console.log(randomHexColor());
            let main = document.querySelector('.main');
            main.style.backgroundColor = randomHexColor();
        });
    }

    hexBackgroundColor();
})();