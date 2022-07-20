function pascalCaseSplitter(text) {
    let tempWord = '';

    for (const ch of text) {
        if (ch === ch.toUpperCase()) {
            tempWord += '|' + ch
        } else {
            tempWord += ch;
        }
    }
    let res = tempWord.split('|');
    res.shift();
    let result = res.join(', ')

    console.log(result);
}
//---test 1---//
pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan');
/*---result---
'Split, Me, If, You, Can, Ha, Ha, You, Cant, Or, You, Can
*/
console.log('------');
//---test 2---/
pascalCaseSplitter('ThisIsSoAnnoyingToDo');
/*---result---
'This, Is, So, Annoying, To, Do'
*/