function bombNumbers(numbers, bomb) {
    let bombNum = bomb[0];
    let radius = bomb[1];

    let index = numbers.indexOf(bombNum);

    while (index !== -1) {

        let startNum = Math.max(0, index - radius);
        let explosionLenght = radius * 2 + 1;
        numbers.splice(startNum, explosionLenght);
        index = numbers.indexOf(bombNum);

    }
    console.log(sum(numbers));


    function sum(numbers) {
        let sum = 0;
        for (const iterator of numbers) {
            sum += iterator;
        }
        return sum;
    }
}
bombNumbers([1, 1, 1, 1, 4, 1, 1, 4], [4, 2])
bombNumbers([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]);
bombNumbers([1, 4, 4, 2, 8, 9, 1], [9, 3]);
bombNumbers([1, 7, 7, 1, 2, 3], [7, 1]);
bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1]);