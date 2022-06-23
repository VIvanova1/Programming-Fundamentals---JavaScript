function arrayModifier(arr) {
    let elements = arr.shift().split(' ');

    let bounds = arr.length;
    let index = 0;
    while (index < bounds) {
        let [command, index1, index2] = arr[index].split(' ');
        index1 = Number(index1);
        index2 = Number(index2);

        if (command === 'end') {
            break;
        }

        switch (command) {
            case 'swap':
                swap(index1, index2);
                break;

            case 'multiply':
                multiply(index1, index2);
                break;

            case 'decrease':
                decrease(elements);
                break;
        }

        index++;

    }
    console.log(elements.join(', '));

    function swap(i, j) {
        let added = elements[j];
        let removed = elements.splice(i, 1, added);
        elements.splice(j, 1, Number(removed))
    }

    function multiply(i, j) {
        let multiplyIndex = Number(elements[i]) * Number(elements[j]);
        elements.splice(i, 1, multiplyIndex);
    }

    function decrease(elements) {
        for (let i = 0; i < elements.length; i++) {
            let num = Number(elements[i]) - 1;
            elements.splice(i, 1, num);
        }
    }

}
arrayModifier([
    '23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end'
]);
console.log('--------');

arrayModifier([
    '1 2 3 4',
    'swap 0 1',
    'swap 1 2',
    'swap 2 3',
    'multiply 1 2',
    'decrease',
    'end'
]);


// function swap(arr, i, j) {
//     arr.shift().split(' ');
//     let added = arr[j];
//     let removed = arr.splice(i, 1, added)
//     console.log(arr);
// }
// swap(['1 2 3 4'], 0, 1)