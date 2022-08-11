function arrayManipulator(numbers, commands) {
    let index = 0;
    let length = commands.length;
    while (index < length) {
        let tempCommand = commands[index].split(' ');
        let command = tempCommand.shift();
        let index1 = Number(tempCommand[0]);
        let index2 = Number(tempCommand[1])
        switch (command) {
            case 'add':
                numbers.splice(index1, 0, index2)
                break;
            case 'addMany':
                addMany(tempCommand)
                break;
            case 'contains':
                let index = numbers.indexOf(index1);
                console.log(index);
                break;
            case 'remove':
                numbers.splice(index1, 1);
                break;
            case 'shift':
                shiftEl(index1);
                break;
            case 'sumPairs':
                sumPairs(numbers);
                break;
            case 'print':
                print(numbers);
                break;
        }
        if (command == 'print') {
            break;
        }
        index++;
    }

    function addMany(elements) {
        let indexStart = elements.shift();
        for (let i = 0; i < elements.length; i++) {
            let startingIndex = Number(indexStart) + i;
            let addEl = Number(elements[i])
            numbers.splice(startingIndex, 0, addEl)
        }
    }

    function shiftEl(position) {
        for (let i = 0; i < position; i++) {
            let firstNum = numbers.shift();
            numbers.push(firstNum);
        }
    }

    function sumPairs(numbers) {

        let L = numbers.length;
        if (L % 2 == 0) {
            for (let i = 0; i < L / 2; i++) {
                let firstEl = numbers.splice(i, 1);
                numbers[i] += Number(firstEl);
            }
        } else {
            for (let i = 0; i < (L - 1) / 2; i++) {
                let firstEl = numbers.splice(i, 1);
                numbers[i] += Number(firstEl);
            }
        }
    }

    function print(numbers) {
        console.log('[ ' + numbers.join(', ') + ' ]');
    }
}
// arrayManipulator([1, 2, 3, 4, 5], ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print']);
// arrayManipulator([1, 2, 4, 5, 6, 7], ['add 1 8', 'contains 1', 'contains 3', 'print']);
//arrayManipulator([2, 2, 4, 2, 4], ["add 1 4", "sumPairs", "print"]);
arrayManipulator([1, 2, 3, 4, 5, 6], ["sumPairs ", "print"])