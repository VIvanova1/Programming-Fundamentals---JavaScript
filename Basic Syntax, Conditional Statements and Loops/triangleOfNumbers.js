function triangleOfNumbers(rows) {
    for (let tempRow = 1; tempRow <= rows; tempRow++) {
        let row = `${tempRow} `
        let res = row.repeat(tempRow);
        console.log(res);
    }
}
triangleOfNumbers(3);
// triangleOfNumbers(5);
// triangleOfNumbers(6);