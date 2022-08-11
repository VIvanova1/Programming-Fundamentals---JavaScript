function sorting(arr) {
    let length = arr.length / 2;
    arr.sort((a, b) => b - a);

    let numbers = [];
    for (let i = 0; i < length; i++) {
        let firstNum = arr.shift();
        let secNum = arr.pop();
        numbers.push(firstNum);
        numbers.push(secNum)
    }

    console.log(numbers.join(" "));

}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])