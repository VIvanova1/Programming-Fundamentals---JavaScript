function processOddNumbers(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {

        if (i % 2 !== 0) {
            let tempEl = arr[i] * 2;
            newArr.push(tempEl)
        }

    }
    console.log(newArr.reverse().join(' '));
}
processOddNumbers([10, 15, 20, 25]);
processOddNumbers([3, 0, 10, 4, 7, 3]);