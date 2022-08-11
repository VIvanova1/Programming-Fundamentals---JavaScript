function MergeArrays(arr1, arr2) {
    let newArr = [];
    for (let i = 0; i < arr1.length; i++) {
        if (i % 2 == 0) {
            let tempChar = Number(arr1[i]) + Number(arr2[i]);
            newArr.push(tempChar)
        } else {
            let tempChar = (arr1[i]) + (arr2[i]);
            newArr.push(tempChar)
        }
    }
    console.log(newArr.join(' - '));
}
MergeArrays(['13', '12312', '5', '77', '4'], ['22', '333', '5', '122', '44']);