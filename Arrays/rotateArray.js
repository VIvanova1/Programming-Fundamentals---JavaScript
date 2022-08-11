function rotation(arr) {
    let length = arr.length - 1;
    let rotationAmount = arr[length];
    arr.pop();
    for (let i = 0; i < rotationAmount; i++) {
        let char = arr.pop();
        arr.unshift(char)
    }
    console.log(arr.join(' '));
}
rotation(['Banana', 'Orange', 'Coconut', 'Apple', '15']);