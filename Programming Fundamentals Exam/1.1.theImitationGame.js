function theImitationGame(input) {
    let result = input.shift();

    for (const line of input) {
        let tokens = line.split('|');
        let command = tokens[0];
        let first = (tokens[1]);
        let second = (tokens[2]);

        switch (command) {
            case 'Move':
                moveLetters(Number(first))
                break;
            case 'Insert':
                insertLetter(Number(first), second)
                break;
            case 'ChangeAll':
                changeLetter(first, second)
                break;
        }
    }

    function moveLetters(numberOfLetters) {
        let resultAsArr = result.split('');
        for (let index = 0; index < numberOfLetters; index++) {
            let tempLetter = resultAsArr.shift();
            resultAsArr.push(tempLetter)
        }
        result = resultAsArr.join('')

    }

    function insertLetter(index, value) {
        let resultAsArr = result.split('');
        resultAsArr.splice(index, 0, value);
        result = resultAsArr.join('')

    }

    function changeLetter(substring, replacement) {
        while (result.search(substring) != -1) {
            result = result.replace(substring, replacement)
        }
    }

    console.log(`The decrypted message is: ${result}`);
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
//---test 2 ---//
theImitationGame([
    'owyouh',
    'Move|2',
    'Move|3',
    'Insert|3|are',
    'Insert|9|?',
    'Decode',
]);
/*---result---
The decrypted message is: howareyou?
 */