function bonusScoringSystem(arr) {
    let studentsNumber = Number(arr.shift());
    let lectures = Number(arr.shift());
    let additionalBonus = Number(arr.shift());

    let maxBonus = 0;
    let maxAttended = 0;
    for (let index = 0; index < arr.length; index++) {
        let attendance = arr[index];
        let tempBonus = attendance / lectures * (5 + additionalBonus);
        if (tempBonus > maxBonus) {
            maxBonus = tempBonus;
            maxAttended = attendance;
        }
    }
    console.log(`Max Bonus: ${Math.round(maxBonus)}.`);
    console.log(`The student has attended ${maxAttended} lectures.`);


}
bonusScoringSystem([
    '5', '25', '30',
    '12', '19', '24',
    '16', '20'
]);
bonusScoringSystem([
    '10', '30', '14', '8',
    '23', '27', '28', '15',
    '17', '25', '26', '5',
    '18'
]);