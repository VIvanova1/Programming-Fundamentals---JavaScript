function amazingNumbers(num) {
    let sum = 0;
    let numAsString = String(num);
    let isAmazing = false;
    for (let i = 0; i < numAsString.length; i++) {
        sum += Number(numAsString[i]);
    }
    let sumAsStr = String(sum);
    for (let j = 0; j < sumAsStr.length; j++) {
        if (sumAsStr[j] == '9') {
            isAmazing = true
        }
    }
    console.log(`${num} Amazing? ${isAmazing? 'True': 'False'}`);
}
amazingNumbers(1233);
amazingNumbers(999);