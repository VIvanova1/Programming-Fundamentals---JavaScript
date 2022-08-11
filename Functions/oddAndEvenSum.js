function oddAndEvenSum(number) {

    let oddSum = 0;
    let evenSum = 0;

    let numToString = String(number);
    for (let i = 0; i < numToString.length; i++) {
        let tempNum = Number(numToString[i]);
        if (tempNum % 2 === 0) {
            evenSum += tempNum;
        } else {
            oddSum += tempNum;
        }
    }
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);

}
oddAndEvenSum(1000435);
oddAndEvenSum(3495892137259234)