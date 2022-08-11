function sumOfOddNumbers(n) {
    let sum = 0;
    let counter = 0;
    let i = 1;
    while (counter < n) {

        if (i % 2 !== 0) {
            console.log(i);
            sum += i;
            counter++;
        }
        i++;
        continue
    }
    console.log(`Sum: ${sum}`);
}
sumOfOddNumbers(2)