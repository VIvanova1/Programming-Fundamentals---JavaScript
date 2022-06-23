function memorygame(arr) {
    let sequence = arr.shift().split(' ');
    let moves = 0;

    let index = 0;
    let command = arr[index];

    while (command !== 'end') {
        let playedNums = command.split(' ').map(Number);
        let firstNum = Number(playedNums[0]);
        let secNum = Number(playedNums[1]);

        moves++;

        if (invalidIndex(sequence, firstNum, secNum, moves) === true) {
            console.log("Invalid input! Adding additional elements to the board");
            command = arr[++index];
            continue;
        }

        sequence = equalNum(sequence, firstNum, secNum);
        if (winnig(sequence, moves)) {
            break;
        }

        command = arr[++index];
    }

    losing(command, sequence);


    function invalidIndex(sequence, i, j, movings) {

        let bounds = sequence.length;
        let adds = (-movings) + 'a';
        if ((i < 0 || i >= bounds) || (j < 0 || j >= bounds) || i === j) {
            sequence.splice(bounds / 2, 0, adds, adds);
            return true;
        }
    }


    function equalNum(sequence, i, j) {

        let index1 = Number(i);
        let index2 = Number(j);
        if (sequence[index1] === sequence[index2]) {
            let removingEl = sequence.splice(index1, 1);
            if (index1 > index2) {
                let removingEl2 = sequence.splice(index2, 1);
            } else {
                let removingEl2 = sequence.splice(index2 - 1, 1);
            }
            console.log(`Congrats! You have found matching elements - ${removingEl}!`);
        } else {
            console.log('Try again!');
        }
        return (sequence);
    }

    function winnig(sequence, movings) {

        if (sequence.length <= 0) {
            console.log(`You have won in ${movings} turns!`);
            return true;
        }
    }

    function losing(command, sequence) {

        if (command == 'end' || sequence.length > 0) {
            console.log('Sorry you lose :(');
            console.log(sequence.join(' '));
        }
    }
}
memorygame([
    "2 2",
    "0 0",
    "end"
]);
// memorygame([

//         "a 2 4 a 2 4",
//         "4 0",
//         "0 2",
//         "0 1",
//         "0 1",
//         "end"

// ])
// memorygame([
//     "a 2 4 a 2 4",
//     "0 3",
//     "0 2",
//     "0 1",
//     "0 1",
//     "end"
// ])