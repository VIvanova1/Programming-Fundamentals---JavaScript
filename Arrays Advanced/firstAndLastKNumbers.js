function firstAndLastKNumbers(arr) {
    let kElements = arr.shift();

    console.log(arr.slice(0, kElements).join(' '));
    console.log(arr.slice(-kElements).join(' '));

}
firstAndLastKNumbers([2, 7, 8, 9]);
firstAndLastKNumbers([3,
    6, 7, 8, 9
])