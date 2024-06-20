const display = document.getElementById("display");

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function clearLast() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        let expression = display.value.replace(/√/g, 'Math.sqrt');
        expression = expression.replace(/\^/g, '**');
        display.value = eval(expression);
    } catch (error) {
        display.value = "error";
    }
}
