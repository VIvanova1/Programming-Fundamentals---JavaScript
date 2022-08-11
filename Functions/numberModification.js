function numberModification(num) {

    let numToString = String(num);
    let averageSum = sumOfNum(num) / lengthString(numToString);

    while (averageSum <= 5) {
        numToString += 9;
        averageSum = sumOfNum(numToString) / lengthString(numToString);
    }

    console.log(numToString);

    //length
    function lengthString(result) {
        return String(result).length;
    }
    //-------

    //Sum
    function sumOfNum(num) {
        let tempNumber = String(num);
        let totalSum = 0;
        let l = String(num).length;

        for (let i = 0; i < l; i++) {
            let tempNum = Number(tempNumber[i]);
            totalSum += tempNum;
        }

        return totalSum;
    }
    //-------

}
numberModification(5835)