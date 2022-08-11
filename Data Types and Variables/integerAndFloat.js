function integerAndFloat(a, b, c) {
    let sum = a + b + c;
    let sumAsString = String(sum);
    let isInteger = true;
    for (i = 0; i < sumAsString.length; i++) {
        if (sumAsString[i] == '.') {
            isInteger = false;
        }
    }
    console.log(`${sum} - ${isInteger? 'Integer': 'Float'}`);
}
integerAndFloat(9, 100, 1.1);
integerAndFloat(100, 200, 303);