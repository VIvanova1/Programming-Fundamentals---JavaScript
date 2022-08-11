function distinctArray(arr) {

    let distrinctArr = arr.filter(distinct);

    console.log(distrinctArr.join(' '));

    let distinct = (value, index, self) => {
        return self.indexOf(value) === index;
    }
}
distinctArray([20, 8, 12, 13, 4, 4, 8, 5])