function arrayManipulations(arr) {
    let index = 0;
    let manipulArr = arr.shift().split(' ').map(Number);

    let arrLength = arr.length;
    for (let i = 0; i < arrLength; i++) {
        let [command, firstNum, secNum] = arr[i].split(' ');
        firstNum = Number(firstNum);
        secNum = Number(secNum);

        switch (command) {
            case 'Add':
                add(firstNum)
                break;
            case 'Remove':
                remove(firstNum)
                break;
            case 'RemoveAt':
                removeAt(firstNum)
                break;
            case 'Insert':
                insert(firstNum, secNum)
                break;
        }

    }

    function add(el) {
        manipulArr.push(el);
    }

    function remove(num) {
        manipulArr = manipulArr.filter(el => el !== num);
    }

    function removeAt(index) {
        manipulArr.splice(index, 1);
    }

    function insert(num, index) {
        manipulArr.splice(index, 0, num);
    }


    console.log(manipulArr.join(' '));
}
arrayManipulations([
    "4 19 2 53 6 43",
    "Add 3",
    "Remove 2",
    "RemoveAt 1",
    "Insert 8 3",
]);
console.log("------");
arrayManipulations([
    "6 12 2 65 6 42",
    "Add 8",
    "Remove 12",
    "RemoveAt 3",
    "Insert 6 2",
]);