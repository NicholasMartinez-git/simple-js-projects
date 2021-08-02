
"use strict";

(function () {

    let count = 0;
    let counter = document.querySelector('.counter');

    function increaseCounter() {
        let increase = document.getElementById('increase');
        increase.addEventListener('click', function () {
            count++;
            counter.innerHTML = count;
        })
    }
    
    function decreaseCounter() {
        let decrease = document.getElementById('decrease');
        decrease.addEventListener('click', function () {
            count--;
            counter.innerHTML = count;
        })
    }
    
    function resetCounter() {
        let reset = document.getElementById('reset');
        reset.addEventListener('click', function () {
            count = 0;
            counter.innerHTML = count;
        })
    }

    increaseCounter();
    decreaseCounter();
    resetCounter();
})();