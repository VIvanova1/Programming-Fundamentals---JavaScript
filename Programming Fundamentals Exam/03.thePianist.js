function thePianist(data) {
    let piecesCount = Number(data.shift())

    let pieceLab = {};
    for (let index = 0; index < piecesCount; index++) {
        let tokens = data.shift();
        [piece, compose, key] = tokens.split('|');

        if (!pieceLab.hasOwnProperty(piece)) {
            pieceLab[piece] = {};
        }
        if (!pieceLab[piece].hasOwnProperty(compose)) {
            pieceLab[piece][compose] = key;
        }


    }
    for (const line of data) {
        let comandTokens = line.split('|');
        let command = comandTokens[0];

        let firstC = comandTokens[1];
        let secondC = comandTokens[2];
        let third = comandTokens[3];

        switch (command) {
            //"Add|{piece}|{composer}|{key}":
            case 'Add':
                adding(firstC, secondC, third);
                break;
                //"Remove|{piece}":
            case 'Remove':
                removing(firstC);
                break;
                //"ChangeKey|{piece}|{new key}":
            case 'ChangeKey':
                changing(firstC, secondC)
                break;
        }
    }

    for (const [key, value] of Object.entries(pieceLab)) {
        //"{Piece} -> Composer: {composer}, Key: {key}"
        console.log(`${key} -> Composer: ${value[0]}, Key: ${value[1]}`);
    }

    function adding(piece, composer, key) {
        if (!pieceLab.hasOwnProperty(piece)) {
            pieceLab[piece] = {};
            console.log(`${piece} by ${composer} in ${key} added to the collection!`);
        } else {
            console.log(`${piece} is already in the collection!`);
        }

        if (!pieceLab[piece].hasOwnProperty(compose)) {
            pieceLab[piece][compose] = key;
        }
    }

    function removing(piece) {
        if (pieceLab.hasOwnProperty(piece)) {
            delete pieceLab[piece]
            console.log(`Successfully removed ${piece}!`);
        } else {
            console.log(`Invalid operation! ${piece} does not exist in the collection.`);
        }
    }

    function changing(piece, newKey) {
        if (pieceLab.hasOwnProperty(piece)) {
            pieceLab[piece] = newKey;
            console.log(`Changed the key of ${piece} to ${newKey}!`);
        } else {
            console.log(`Invalid operation! ${piece} does not exist in the collection.`);
        }
    }
}
//---test 1 ---//
thePianist([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'
]);
/*---result---
Sonata No.2 by Chopin in B Minor added to the collection!
Hungarian Rhapsody No.2 by Liszt in C# Minor added to the collection!
Fur Elise is already in the collection!
Successfully removed Clair de Lune!
Changed the key of Moonlight Sonata to C# Major!
Fur Elise -> Composer: Beethoven, Key: A Minor
Moonlight Sonata -> Composer: Beethoven, Key: C# Major
Sonata No.2 -> Composer: Chopin, Key: B Minor
Hungarian Rhapsody No.2 -> Composer: Liszt, Key: C# Minor
 */