function censoredWords(sentance, word) {

    while (sentance.includes(word)) {
        sentance = sentance.replace(word, '*'.repeat(word.length))
    }
    console.log(sentance);
}
//---test 1---//
censoredWords('A small sentence with some words', 'small');
/*---result---
'A ***** sentence with some words'
 */

//---test 2---//
censoredWords('Find the hidden word', 'hidden');
/*---result---
'Find the ****** word'
 */