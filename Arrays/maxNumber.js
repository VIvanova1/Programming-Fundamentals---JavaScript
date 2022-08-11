function maxNum(array) {
    let newArr = [];
    for (let i = 0; i < array.length; i++) {
        let isTrue = true;
        for (let j = i + 1; j < array.length; j++) {
            let num1 = Number(array[i]);
            let num2 = Number(array[j])
            if (num1 > num2) {
                continue;
            } else {
                isTrue = false;
                break;
            }
        }
        if (isTrue == true) {
            newArr.push(array[i]);
        }
    }
    console.log(newArr.join(' '));
}
maxNum([27, 19, 42, 2, 13, 45, 48])