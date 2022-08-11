function maxSequence(arr) {
    let maxArr = [];
    let maxCount = 0;
    for (let j = 0; j < arr.length; j++) {
        let tempArr = [];
        let counter = 0;
        for (let i = j; i < arr.length; i++) {
            let num1 = Number(arr[i])
            let num2 = Number(arr[i + 1])
            if (num1 === num2) {
                counter++;
                tempArr.push(arr[i])
                continue;
            } else {
                if (counter > maxCount) {
                    maxCount = counter;
                    maxArr = tempArr;
                }
                tempArr.push(arr[i])
                break;
            }
        }
    }
    console.log(maxArr.join(' '));
}
maxSequence([1, 1, 1, 2, 3, 1, 3, 3])