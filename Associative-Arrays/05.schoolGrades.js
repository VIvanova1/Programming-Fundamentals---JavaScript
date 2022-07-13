function schoolGrades(data) {
    let students = {};

    for (const line of data) {
        let tokens = line.split(' ')
        let name = tokens.shift();

        let avrg = 0;

        tokens.forEach(element => {
            avrg += Number(element);

        });
        let averageGrade = (avrg / tokens.length);

        if (students.hasOwnProperty(name)) {
            let oldGrade = students[name]
            averageGrade = (averageGrade + Number(oldGrade)) / 2;
        }

        students[name] = averageGrade.toFixed(2);
    }

    let sortedStudents = Object.entries(students).sort(([keyA, valueA], [keyB, valueB]) => {
        return keyA.localeCompare(keyB);
    })

    for (const [name, grade] of sortedStudents) {
        console.log(`${name}: ${grade}`);
    }
}
//--test--//
schoolGrades(['Steven 3 5 6 4',
    'Steven 6 3',
    'Steven 2 3'

]);
/*result
    Lilly: 5.25
    Tammy: 3.00
    Tim: 5.75
 */