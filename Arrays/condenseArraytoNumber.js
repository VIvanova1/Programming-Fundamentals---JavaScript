function CondenseArraytoNumber(arr) {
    if (arr.length === 1) {
        console.log(String(arr));
    } else {

        let res = '';
        for (let k = arr.length - 1; k > 0; k--) {
            let sum = 0;
            let newArr = [];
            for (let i = 0; i < arr.length - 1; i++) {
                sum = Number(arr[i]) + Number(arr[i + 1]);
                newArr.push(sum);
            }
            arr = newArr;
            res = newArr;
        }
        console.log(String(res));
    }
}
CondenseArraytoNumber([2])