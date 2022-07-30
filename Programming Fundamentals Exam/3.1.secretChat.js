function secretChat(data) {
    let message = data.shift();


    for (const line of data) {
        let isError = false;
        if (line === 'Reveal') break;
        let [command, value1, value2] = line.split(':|:');

        const insertSpace = (message, index) => {
            return message.slice(0, index) + ' ' + message.slice(index);
        }
        const reversing = (message, substr) => {
            if (message.includes(substr)) {
                let startIndex = message.indexOf(substr);
                let endIndex = startIndex + substr.length;
                let newSubstr = substr.split('').reverse().join('');
                message = message.slice(0, startIndex) + message.slice(endIndex) + newSubstr;
            } else {
                isError = true;
            }
            return message;

        }

        const changing = (message, substr, replacement) => {
            let regexp = new RegExp(substr, 'g')
            message = message.replace(regexp, replacement);
            return message;
        }


        switch (command) {
            case 'InsertSpace':
                message = insertSpace(message, Number(value1));
                break;
            case 'Reverse':
                message = reversing(message, value1)
                break;
            case 'ChangeAll':
                message = changing(message, value1, value2)
                break;
        }
        if (isError) {
            console.log('error');
        } else {
            console.log(message);
        }
    }
    console.log(`You have a new text message: ${message}`);
}
// //---test---//
secretChat([
    'heVVodar!gniV',
    'ChangeAll:|:V:|:l',
    'Reverse:|:!gnil',
    'InsertSpace:|:5',
    'Reveal'
]);
/*---result---
hellodar!gnil
hellodarling!
hello darling!
You have a new text message: hello darling!
 */
console.log('--------');
//---test---//
secretChat([
    'Hiware?uiy',
    'ChangeAll:|:i:|:o',
    'Reverse:|:?uoy',
    'Reverse:|:jd',
    'InsertSpace:|:3',
    'InsertSpace:|:7',
    'Reveal'
]);
/*---result---
Howare?uoy
Howareyou?
error
How areyou?
How are you?
You have a new text message: How are you?
 */