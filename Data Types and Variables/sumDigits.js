function sumDigits(num) {
    let numToString = String(num)
    let sum = 0;
    for (const char of numToString) {
        sum += Number(char)
    }
    console.log(sum);
}
sumDigits(245678);
sumDigits(97561);
sumDigits(543);