let counterValue = 0;

const decr = document.querySelector("button[data-action = 'decrement']");
const incr = document.querySelector("button[data-action = 'increment']");

const value = document.querySelector('#value');

const decrement = function() {
    counterValue += 1;
    value.textContent = counterValue;
};

const increment = function() {
    counterValue -= 1;
    value.textContent = counterValue;
};

decr.addEventListener('click', increment);
incr.addEventListener('click', decrement);