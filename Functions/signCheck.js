function signCheck(one, two, three) {
    let isPositive = true;

    if (one > 0) {
        if (two > 0 && three < 0) {
            isPositive = false;
        } else if (two < 0 && three > 0) {
            isPositive = false;
        }
    } else if (one < 0) {
        if (two > 0 && three > 0) {
            isPositive = false;
        } else if (two < 0 && three < 0) {
            isPositive = false;
        }
    }
    console.log(isPositive ? "Positive" : "Negative");
}
signCheck(0, 0, 0);
signCheck(5, 12, -15);
signCheck(-6, -12, 14);
signCheck(-1, -2, -3);
signCheck(-5, 1, 1);