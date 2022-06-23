function SoftUniReception(arr) {
    let studentsCount = arr.pop();

    let totalAnswer = (a, b, c) => sum = a + b + c;

    let hours = 0;
    while (studentsCount > 0) {
        hours++;

        if (hours % 4 === 0) {
            continue;
        }
        studentsCount -= totalAnswer(Number(arr[0]), Number(arr[1]), Number(arr[2]));
    }
    console.log(`Time needed: ${hours}h.`);
}
SoftUniReception(['5', '6', '4', '20']);
SoftUniReception(['1', '2', '3', '45'])