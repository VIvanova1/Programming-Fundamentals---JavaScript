function replaceRepeatingChars(text) {
    let result = ''
    for (const char of text) {
        if (!result.endsWith(char)) {
            result += char
        }
    }
    console.log(result);
}
//---test 1---//
replaceRepeatingChars('aaaaabbbbbcdddeeeedssaa');
/*---result---
abcdedsa
*/
console.log('------');
//---test 2---/
replaceRepeatingChars('qqqwerqwecccwd');
/*---result---
qwerqwecwd
*/