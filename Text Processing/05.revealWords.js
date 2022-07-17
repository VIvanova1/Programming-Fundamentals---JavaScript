function revealWords(word, text) {
    let wordsArr = word.split(', ');
    for (const singleWord of wordsArr) {
        let secretWord = '*'.repeat(singleWord.length);
        text = text.replace(secretWord, singleWord)
    }
    console.log(text);

}
//---test 1---//
revealWords('great',
    'softuni is ***** place for learning new programming languages');
/*---result---
'softuni is great place for learning new programming languages'
 */

//---test 2---//
revealWords('great, learning',
    'softuni is ***** place for ******** new programming languages');
/*---result---
'softuni is great place for learning new programming languages'
 */