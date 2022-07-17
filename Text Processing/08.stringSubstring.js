function stringSubstring(word, text) {
    let textArr = text.split(' ');
    let isMatch = false;

    for (const singleWord of textArr) {

        if (singleWord.toLowerCase() === word.toLowerCase()) {
            isMatch = true;
            break;
        }
    }
    if (!isMatch) {
        console.log(`${word} not found!`);
    } else {
        console.log(word);
    }

}
//---test 1---//
stringSubstring('javascript',
    'JavaScript is the best programming language');
/*---result---
javascript
*/
console.log('------');
//---test 2---/
stringSubstring('python',
    'JavaScript is the best programming language');
/*---result---
python not found!
*/