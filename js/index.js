document.querySelectorAll('.digits, .operation')
    .forEach(el => el.addEventListener('click', digitOperClick));

function digitOperClick(e) {
    const target = e.target;
    const display = document.querySelector('.display');
    display.value += target.innerText;
}

document.querySelector('.equal')
    .addEventListener('click', equal);

function equal() {
    const display = document.querySelector('.display');
    display.value = eval(display.value);
}

document.querySelector('.sqrt')
    .addEventListener('click', sqrt);

function sqrt() {
    const display = document.querySelector('.display');
    display.value = Math.sqrt(display.value);
}

document.querySelector('.sqr')
    .addEventListener('click', sqr);

function sqr() {
    const display = document.querySelector('.display');
    display.value *= (display.value);
}

document.querySelector('.factorial')
    .addEventListener('click', factorial);

function factorial() {
    const display = document.querySelector('.display');
    if (display.value >= 1 || display.value % 1 === 0) {
        let n = 1;
        for (let i = 1; i <= display.value; i++) {
            n = n * i;
        }
        display.value = n;
    }
    else display.value = "error";
}

document.querySelector('.clear')
    .addEventListener('click', clear);

function clear() {
    const display = document.querySelector('.display');
    display.value = '';
}
