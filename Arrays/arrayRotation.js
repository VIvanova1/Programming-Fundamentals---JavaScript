function ArrayRotation(array, n) {
    let newArr = [];
    for (let i = 0; i < n; i++) {
        let firstChar = array.shift();
        array.push(firstChar);
    }
    console.log(array.join(' '));
}
ArrayRotation([32, 21, 61, 1], 3);