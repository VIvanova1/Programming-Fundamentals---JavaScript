function specialNumbers(n) {
    for (let i = 1; i <= n; i++) {
        let tempNumStr = String(i);
        let sum = 0;
        isSpecial = false;
        for (let j = 0; j < tempNumStr.length; j++) {
            sum += Number(tempNumStr[j]);

        }
        if (sum === 5 || sum === 7 || sum === 11) {
            isSpecial = true;

        }

        console.log(`${i} -> ${isSpecial? 'True': 'False'}`);

    }

}
specialNumbers(20);
// specialNumbers(20)