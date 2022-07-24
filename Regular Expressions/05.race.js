function race(data) {
    let patternName = /[a-zA-Z]+/g;
    let patternDistance = /\d/g;

    let nameList = data.shift().split(', ');
    let raceList = {};
    for (const name of nameList) {
        raceList[name] = 0;
    }

    for (const line of data) {
        if (line === 'end of race') {
            break;
        }
        let name = line.match(patternName).join('');
        let distance = line.match(patternDistance).reduce((a, b) => Number(a) + Number(b));
        raceList[name] += distance;
    }
    let sortedList = Object.entries(raceList).sort(([keyA, valueA], [keyB, valueB]) => {
        return valueB - valueA;
    })

    console.log(`1st place: ${sortedList[0][0]}`);
    console.log(`2nd place: ${sortedList[1][0]}`);
    console.log(`3rd place: ${sortedList[2][0]}`);

}
//---test 1 ---//
race(['George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@ ',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race'
]);
/*---result---
1st place: George
2nd place: Peter
3rd place: Tom
 */