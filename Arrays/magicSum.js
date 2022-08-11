function MagicSum(arr, magicNum) {

    for (let i = 0; i < arr.length - 1; i++) {
        let firstEl = arr[i];
        for (let j = i + 1; j < arr.length; j++) {
            let secEl = arr[j];
            let sum = firstEl + secEl;
            if (sum === magicNum) {
                console.log(`${firstEl} ${secEl}`);

            }
        }
    }
}
MagicSum([14, 20, 60, 13, 7, 19, 8], 27);