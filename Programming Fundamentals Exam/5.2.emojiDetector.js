function emojiDetector(data) {
    let pattern = /([:]{2}|[*]{2})(?<word>[A-Z][a-z]{2,})\1/g;
    let coolThreshold = 1;

    let digitPattern = /\d/g;

    let digits = data[0].match(digitPattern);
    for (const singleDigit of digits) {
        coolThreshold *= Number(singleDigit)
    };
    console.log(`Cool threshold: ${coolThreshold}`);

    let matches;
    let count = 0;
    let coolWords = [];
    while ((matches = pattern.exec(data)) !== null) {
        count++;
        let tempWord = matches.groups.word;
        let wordCoolest = 0;
        for (const ch of tempWord) {
            wordCoolest += ch.charCodeAt()
        }

        if (wordCoolest > coolThreshold) {
            coolWords.push(matches[0])
        }

    }
    console.log(`${count} emojis found in the text. The cool ones are:`);
    coolWords.forEach(element => {
        console.log(element);
    });

}
console.log('----test 1----');
emojiDetector(["5, 4, 3, 2, 1, go! The 1-th consecutive banana-eating contest has begun! ::Joy:: **Banana** ::Wink:: **Vali** ::valid_emoji::"]);
/*---result---
Cool threshold: 120
4 emojis found in the text. The cool ones are:
::Joy::
**Banana**
::Wink::
**Vali**
*/
console.log('----test 2----');
//---test 2 ---//
emojiDetector(["In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"]);
/*---result---
Cool threshold: 540
4 emojis found in the text. The cool ones are:
::Smiley::
**Tigers**
::Mooning::*/