function mathPower(number, pow) {
    // let result = Math.pow(number, pow)
    // console.log(result);

    let res = 1;
    for (let i = 1; i <= pow; i++) {
        res *= number
    }
    console.log(res);
}
mathPower(2, 8);
mathPower(3, 4)