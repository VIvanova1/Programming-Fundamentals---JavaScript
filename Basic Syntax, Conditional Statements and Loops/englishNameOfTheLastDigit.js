function nameDigit(num) {
    let numToString = num.toString();
    let lastOne = numToString[numToString.length - 1];
    let res = '';
    switch (lastOne) {
        case "0":
            res = 'zero';
            break;
        case "1":
            res = 'one';
            break;
        case "2":
            res = 'two';
            break;
        case "3":
            res = 'three';
            break;
        case "4":
            res = 'four';
            break;
        case "5":
            res = 'five';
            break;
        case "6":
            res = 'six';
            break;
        case "7":
            res = 'seven';
            break;
        case "8":
            res = 'eight';
            break;
        case "9":
            res = 'nine';
            break;
    }
    console.log(res);
}
nameDigit(512)