function countStringOccurrences(sentance, word) {
    let sentanceArray = sentance.split(' ');
    let counter = 0;
    sentanceArray.forEach(singleWord => {
        if (singleWord === word) {
            counter++;
        }
    });
    console.log(counter);

}
//---test 1---//
countStringOccurrences('This is a word and it also is a sentence', 'is');
/*---result---
'2'
 */

//---test 2---//
countStringOccurrences('softuni is great place for learning new programming languages', 'softuni');
/*---result---
'1'
 */