function theImitationGame(input) {
    let result = input.shift();

    for (const line of input) {
        let tokens = line.split('|');
        let command = tokens[0];
        let firstNumber = (tokens[1]);
        let secNumber = (tokens[2]);

        switch (command) {
            case 'Move':
                moveLetters(Number(firstNumber))
                break;
            case 'Insert':
                insertLetter(Number(firstNumber), secNumber)
                break;
            case 'ChangeAll':
                changeLetter(firstNumber, secNumber)
                break;
        }
    }

    function moveLetters(numberOfLetters) {
        for (let index = 0; index < numberOfLetters; index++) {
            let tempLetter = result.shift();
            result.push(tempLetter)
        }
        return result;
    }

    function insertLetter(index, value) {
        let resultAsArr = result.split('');
        resultAsArr.splice(index, 0, value);
        result = resultAsArr.join('')
        return result;
    }

    function changeLetter(substring, replacement) {
        while (result.search(substring) != -1) {
            result = result.replace(substring, replacement)
        }
    }
    console.log(result);
}
//---test 1 ---//
theImitationGame([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode',
]);
/*---result---
The decrypted message is: Hello
 */