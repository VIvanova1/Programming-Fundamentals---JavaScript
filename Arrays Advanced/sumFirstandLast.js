function sumFirstandLast(arr) {
    let firstNum = Number(arr.shift());
    let lastNum = Number(arr.pop())
    console.log(lastNum + firstNum);

}
sumFirstandLast(['20', '30', '40'])