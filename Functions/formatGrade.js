function formatGrade(grade) {
    let description;
    let res = grade.toFixed(2);

    if (grade < '3') {
        res = 2;
        description = 'Fail';
    } else if (grade < '3.5') {
        description = 'Poor';
    } else if (grade < '4.5') {
        description = 'Good';
    } else if (grade < '5.5') {
        description = 'Very good';
    } else {
        description = 'Excellent';
    }
    console.log(`${description} (${res})`);
}
formatGrade(4.5);
formatGrade(2.99)