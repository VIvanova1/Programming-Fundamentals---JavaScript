function movingTarget(arr) {
    let targets = arr.shift().split(' ').map(Number);
    let countTargets = targets.length;

    let index = 0;
    let [command, firstNum, secNum] = arr[index].split(' ');
    while (command !== 'End') {
        firstNum = Number(firstNum);
        secNum = Number(secNum);

        switch (command) {
            case 'Shoot':
                if (validIndex(firstNum, countTargets)) {
                    shoot(firstNum, secNum);
                }
                break;
            case 'Add':
                if (validIndex(firstNum, countTargets, )) {
                    add(firstNum, secNum);
                } else {
                    console.log('Invalid placement!');
                }
                break;
            case 'Strike':
                strike(firstNum, secNum);
                break;
        }

        [command, firstNum, secNum] = arr[++index].split(' ');

    }
    console.log(targets.join('|'));

    function validIndex(index, countTargets) {
        if (index < 0 || index > countTargets) {
            return false;
        } else {
            return true;
        }

    }

    function shoot(index, power) {

        let element = Number(targets[index]);
        element -= power;
        targets.splice(index, 1, element)
        if (element <= 0) {
            targets.splice(index, 1)
        }

    }

    function add(index, value) {
        targets.splice(index, 0, value);
    }

    function strike(index, radius) {
        let startStrike = index - radius;
        let endStrike = index + radius;
        let countStrike = endStrike - startStrike + 1;
        if (startStrike < 0 || endStrike < 0 ||
            endStrike >= targets.length ||
            startStrike >= targets.length) {
            console.log('Strike missed!');
        } else {
            targets.splice(startStrike, countStrike)
        }
    }

}
movingTarget(["52 74 23 44 96 110",
    "Shoot 5 10",
    "Shoot 1 80",
    "Strike 2 1",
    "Add 22 3",
    "End"
]);
// movingTarget(["1 2 3 4 5",
//     "Strike 0 1",
//     "End"
// ]);