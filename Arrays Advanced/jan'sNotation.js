function notation(arr) {
    let index = 0;
    let bounds = arr.length;
    let numsArr = [];
    let isError = false;
    while (index < bounds) {
        let tempCommand = arr[index];

        if (tempCommand == "+" || tempCommand == "-" ||
            tempCommand == "*" || tempCommand == "/") {

            if (numsArr.length <= 1) {
                isError = true;
                break;
            }
            let index1 = numsArr.length - 1;
            let index2 = index1 - 1
            let num1 = numsArr[index2];
            let num2 = numsArr[index1];
            let newNum = 0;
            switch (tempCommand) {
                case '+':
                    newNum = num1 + num2;
                    break;
                case '-':
                    newNum = num1 - num2;
                    break;
                case '*':
                    newNum = num1 * num2;
                    break;
                case '/':
                    newNum = num1 / num2;
                    break;
            }
            numsArr.splice(index2, 2, newNum);


        } else {
            numsArr.push(tempCommand);
        }
        tempCommand = arr[++index];
    }
    if (isError) {
        console.log('Error: not enough operands!');
    } else if (numsArr.length > 1) {
        console.log('Error: too many operands!');
    } else {
        console.log(numsArr[0]);
    }


}
notation([3, 4, "+"]);
notation([5, 3, 4, "*", "-"]);
notation([7, 33, 8, "-"]);
notation([15, "/"]);