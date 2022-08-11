function simpleCalculator(numOne, numTwo, operator) {
    let res = 0;

    let multiply = (numOne, numTwo) => numOne * numTwo;
    let divide = (numOne, numTwo) => numOne / numTwo;
    let add = (numOne, numTwo) => numOne + numTwo;
    let subtract = (numOne, numTwo) => numOne - numTwo;

    switch (operator) {
        case 'multiply':
            res = multiply(numOne, numTwo);
            break;
        case 'divide':
            res = divide(numOne, numTwo);
            break;
        case 'add':
            res = add(numOne, numTwo);
            break;
        case 'subtract':
            res = subtract(numOne, numTwo);
            break;
    }

    console.log(res);
}
simpleCalculator(5, 5, "multiply");
simpleCalculator(40, 8, "divide");
simpleCalculator(12, 19, "add");
simpleCalculator(50, 13, "subtract");