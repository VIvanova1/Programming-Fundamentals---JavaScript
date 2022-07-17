function substring(string, startNumber, count) {
    let result = string.substring(startNumber, startNumber + count);
    console.log(result);

}
//---test 1---//
substring('ASentence', 1, 8);
/*---result---
Sentence
 */

//---test 2---//
substring('SkipWord', 4, 7);
/*---result---
Word
 */