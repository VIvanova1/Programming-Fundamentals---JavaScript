function shootForTheWin(arr) {

    let targets = arr.shift().split(' ').map(Number)
    let totalCountTargets = targets.length;
    let shooterElementsCount = 0;
    let index = 0;
    let command = arr[index];
    while (command !== 'End') {
        let tempIndex = Number(command);

        if (invalidIndex(tempIndex, totalCountTargets)) {
            command = arr[++index];
            continue;
        }
        shooterElementsCount++;
        let targetArr = targets.splice(tempIndex, 1);
        let target = targetArr[0];

        for (let i = 0; i < totalCountTargets - 1; i++) {
            element = Number(targets[i]);

            if (notShot(element)) {
                if (element > target) {
                    element -= target;
                } else if (element <= target) {
                    element += target;
                }
                targets.splice(i, 1, element)
            }

        }

        targets.splice(tempIndex, 0, -1)
        command = arr[++index];
    }



    function invalidIndex(tempIndex, totalCountTargets) {

        if (tempIndex < 0 || tempIndex >= totalCountTargets) {
            return true;
        }
    }

    function notShot(element) {
        if (element !== -1) {
            return true;
        }
    }


    console.log(`Shot targets: ${shooterElementsCount} -> ${targets.join(' ')}`);
}
shootForTheWin(["24 50 36 70",
    "0",
    "4",
    "3",
    "1",
    "End"
]);
shootForTheWin(["30 30 12 60 54 66",
    "5",
    "2",
    "4",
    "0",
    "End"
]);