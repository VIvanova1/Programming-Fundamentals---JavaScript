function rounding(num, prec) {
    if (prec > 15) {
        prec = 15;
    }
    let result = Number(num.toFixed(prec))
    console.log(parseFloat(result));
}
rounding(3.1415926535897932384626433832795, 2);
rounding(10.5, 3);