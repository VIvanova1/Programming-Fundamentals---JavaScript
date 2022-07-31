function mirrorWords(data) {
    let pattern = /([@#])(?<first>[A-Za-z]{3,})\1\1(?<second>[A-Za-z]{3,})\1/gm
    let matches = [];
    let match = pattern.exec(data[0]);
    let mirrorWord = [];

    while (match !== null) {
        matches.push(match);
        let firstWord = match.groups.first;
        let secWord = match.groups.second;
        let mirrorSecWord = secWord.split('').reverse().join('');
        if (firstWord === mirrorSecWord) {
            mirrorWord.push(`${firstWord} <=> ${secWord}`)
        }
        match = pattern.exec(data[0]);
    }

    if (matches.length == 0) {
        console.log('No word pairs found!');
    } else {
        console.log(`${matches.length} word pairs found!`);
    }

    if (mirrorWord.length == 0) {
        console.log("No mirror words!");
    } else {
        console.log("The mirror words are:");
        console.log(mirrorWord.join(', '));
    }

}
//---test---//
mirrorWords(['@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r']);
/*---result---
5 word pairs found!
The mirror words are:
Part <=> traP, leveL <=> Level, sAw <=> wAs
 */
console.log('--------');
//---test---//
mirrorWords(['#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@']);
/*---result---
2 word pairs found!
No mirror words!
*/