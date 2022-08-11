function calc(number, operator, num2) {
    let sum = 0;
    switch (operator) {
        case "+":
            sum = number + num2;
            break;
        case "+":
            sum = number - num2;
            break;
        case "*":
            sum = number * num2;
            break;
        case "/":
            sum = number / num2;
            break;
    }
    console.log(sum.toFixed(2));
}
calc(5, "+", 10);