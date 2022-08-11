function biggestNum(a, b, c) {
    let array = [a, b, c];

    let num = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < array.length; i++) {
        if (Number(array[i]) > num) {
            num = Number(array[i])
        }
    }
    console.log(num);
}
biggestNum(130,
    5,
    99);