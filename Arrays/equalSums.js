function EqualSums(arr) {

    let leftSum = 0;
    let index = 0;
    let isEqual;
    for (let i = 0; i < arr.length; i++) {

        isEqual = false;

        let rightSum = 0;
        for (let j = i + 1; j < arr.length; j++) {
            rightSum += Number(arr[j])
        }
        if (leftSum === rightSum) {
            isEqual = true;
            index = i;
            break;
        }
        leftSum += Number(arr[i])
    }

    console.log(isEqual ? `${index}` : 'no');
}
EqualSums([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4])