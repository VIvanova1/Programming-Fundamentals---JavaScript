function nonDecreasingSubset(arr) {
    let newArr = [];
    let bigNum = 0;
    for (let i = 0; i < arr.length; i++) {
        let tempNum = Number(arr[i]);
        if (tempNum >= bigNum) {
            bigNum = tempNum;
            newArr.push(tempNum);
        }
    }
    console.log(newArr.join(' '));

}
nonDecreasingSubset([1, 3, 8, 4, 10, 12, 3, 2, 24]);
nonDecreasingSubset([1, 2, 3, 4]);
nonDecreasingSubset([20, 3, 2, 15, 6, 1])