function modernTimesOfHashTag(text) {

    let textArr = text.split(' ');
    let targetWords = [];

    for (const word of textArr) {
        if (word.includes('#')) {
            if (/^[a-zA-Z]+$/.test(word.slice(1)))
                targetWords.push(word.slice(1))
        }
    }

    for (const element of targetWords) {
        console.log(element);
    }
}
//---test 1---//
modernTimesOfHashTag('Nowadays everyone uses # to tag a #special word in #socialMedia');
/*---result---
special
socialMedia
*/
console.log('------');
//---test 2---/
modernTimesOfHashTag('The symbol # is known #variously in English-speaking #regions as the #number sign');
/*---result---
variously
regions
number
*/