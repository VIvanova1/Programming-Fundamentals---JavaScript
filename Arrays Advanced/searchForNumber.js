function searchForNumber(numbers, arr) {
    let [takeEl, delEl, searchEl] = arr;

    let newArr = numbers.splice(0, takeEl);

    newArr.splice(0, delEl);

    let count = 0

    for (const element of newArr) {
        if (element === searchEl) {
            count++;
        }
    }
    console.log(`Number ${searchEl} occurs ${count} times.`);
}
searchForNumber([5, 2, 3, 4, 1, 6], [5, 2, 3]);
console.log('----------------');
searchForNumber([7, 1, 5, 8, 2, 7], [3, 1, 5]);