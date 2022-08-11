function equalArr(arr1, arr2, ) {
    let sum = 0;
    let diff;
    let isDiff = false;
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] === arr2[i]) {
            sum += Number(arr1[i]);
        } else {
            diff = i;
            isDiff = true;
            break;
        }
    }
    console.log(isDiff ? `Arrays are not identical. Found difference at ${diff} index` :
        `Arrays are identical. Sum: ${sum}`)
}
equalArr(['10', '20', '30'], ['10', '20', '30']);
equalArr(['1', '2', '3', '4', '5'], ['1', '2', '4', '4', '5']);