const userInput = document.getElementById('userInput')
let expression = '';
const press = (num) => {
    expression += num;
    userInput.value = expression;
}
const equal = () => {
    userInput.value = eval(expression);
    expression = '';
}
function erase() {
    expression = '';
    userInput.value = expression;
}
function del() {
    userInput.valueOf.toString().slice(0,-1);
}