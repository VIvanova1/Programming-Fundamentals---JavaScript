function wordTracker(data) {

    let searchingWord = data.shift().split(' ');

    let result = {};

    for (const searchWord of searchingWord) {
        let counter = 0;
        for (const word of data) {
            if (word === searchWord) {
                counter++;
            }
        }
        result[searchWord] = counter;
    }

    let sortedResult = Object.entries(result).sort(([keyA, valueA], [keyB, valueB]) => {
        return valueB - valueA;
    });

    for (const [key, value] of sortedResult) {
        console.log(`${key} - ${value}`);
    }
}
//---test 1 ---//
wordTracker([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have', 'to',
    'count', 'the', 'occurrences', 'of', 'the', 'words',
    'this', 'and', 'sentence', 'because', 'this', 'is',
    'your', 'task'
]);
/*result
this - 3
sentence - 2
 */
//---test 2 ---//
wordTracker([
    'is the',
    'first', 'sentence', 'Here', 'is', 'another',
    'the', 'And', 'finally', 'the', 'the',
    'sentence'
])

/* result
the – 3
is - 1 */