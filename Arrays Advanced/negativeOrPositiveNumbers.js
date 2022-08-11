function negativeOrPositiveNumbers(arr) {
    let newArr = [];
    for (let element of arr) {
        if (element >= 0) {
            newArr.push(element);
        } else {
            newArr.unshift(element);
        }

    }

    for (let newElement of newArr) {
        console.log(newElement);
    }
}
negativeOrPositiveNumbers(['7', '-2', '8', '9'])