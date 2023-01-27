let op;
function func() {
    let result;
    let num1 = Number(document.querySelector(".num1").value);
    let num2 = Number(document.querySelector(".num2").value);
    switch (op) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        default:
            alert('введите правильное значение');
            break;
    }
    document.querySelector(".result").innerHTML = result;
}