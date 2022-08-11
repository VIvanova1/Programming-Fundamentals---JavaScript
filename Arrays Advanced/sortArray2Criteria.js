function sortArray2Criteria(arr) {
    let sortedArr = arr.sort((a, b) => {
        return a.length - b.length || a.localeCompare(b);
    });

    sortedArr.forEach(element => {
        console.log(element);
    });

}
sortArray2Criteria(['alpha', 'beta', 'gamma']);
sortArray2Criteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George'])