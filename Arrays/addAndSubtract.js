function AddAndSubtract(arr) {
    let originalSum = 0;
    let modifySum = 0;

    for (let i = 0; i <= arr.length - 1; i++) {
        let tempNum = Number(arr[i]);
        originalSum += tempNum;

        if (tempNum % 2 === 0) {
            tempNum += i;
        } else {
            tempNum -= i;
        }
        arr[i] = tempNum;
        modifySum += tempNum;

    }
    console.log(`[ ${arr.join(', ')} ]`);
    console.log(originalSum);
    console.log(modifySum);

}
AddAndSubtract([5, 15, 23, 56, 35])