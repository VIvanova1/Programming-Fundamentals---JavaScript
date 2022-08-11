function equalNeighbors(matrix) {
    let l = matrix.length;
    console.log(l);
    let arr = [];
    for (let i = 0; i < l; i++) {
        let tempArr = matrix[0].concat(matrix[1]);
        console.log(tempArr);

        arr.concat[tempArr];
        console.log(arr);
        console.log(matrix);

    }


}
equalNeighbors([
    ['2', '3', '4', '7', '0'],
    ['4', '0', '5', '3', '4'],
    ['2', '3', '5', '4', '2'],
    ['9', '8', '7', '5', '4']
]);
console.log('----------------');
// equalNeighbors([
//     ['test', 'yo', 'yo', 'ho'],
//     ['well', 'done', 'no', '6'],
//     ['not', 'done', 'yet', '5']
// ]);