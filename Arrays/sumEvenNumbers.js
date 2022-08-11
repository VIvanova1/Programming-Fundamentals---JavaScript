function SumEvenNumbers(arr) {
    let sum = 0;
    for (const char of arr) {
        if (char % 2 === 0) {
            sum += Number(char);
        }
    }
    console.log(sum);
}
SumEvenNumbers(['3', '5', '7', '9'])