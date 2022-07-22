function theImitationGame(input) {
    let result = input.shift();

    for (const line of input) {
        let tokens = line.split('|');
        let command = tokens[0];
        switch (command) {
            case 'Move':
                break;
            case 'Insert':
                break;
            case 'ChangeAll':
                break;
        }
    }
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