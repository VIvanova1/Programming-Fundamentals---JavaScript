function EvenandOddSubtraction(arr) {
    let sumOdd = 0;
    let sumEven = 0;
    for (const char of arr) {
        if (char % 2 !== 0) {
            sumOdd += Number(char);
        } else {
            sumEven += Number(char)
        }
    }
    console.log(sumEven - sumOdd);
}
EvenandOddSubtraction([3, 5, 7, 9])