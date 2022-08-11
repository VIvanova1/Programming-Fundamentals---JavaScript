function factorialDivision(numOne, numTwo) {
    //let resOne = 1;
    //let resTwo = 1

    // for (let i = numOne; i > 0; i--) {
    //     resOne *= i;
    // }

    // for (let j = numTwo; j > 0; j--) {
    //     resTwo *= j;
    // }


    let result = firstRes(numOne) / secRes(numTwo)
    console.log(result.toFixed(2));

    function firstRes(num) {
        let resOne = 1;
        for (let i = numOne; i > 0; i--) {
            resOne *= i;
        }
        return resOne;
    }

    function secRes(num) {
        let resTwo = 1;
        for (let j = numTwo; j > 0; j--) {
            resTwo *= j;
        }
        return resTwo;
    }
}
factorialDivision(6, 2)