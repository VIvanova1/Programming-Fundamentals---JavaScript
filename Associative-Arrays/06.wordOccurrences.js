function wordOccurrences(data) {

    let result = {};
    for (const word of data) {

        let count = 0;

        for (const singleWord of data) {
            if (singleWord === word) {
                count++;
            }
        }

        result[word] = count;
    }

    let sortedResult = Object.entries(result).sort(([keyA, valueA], [keyB, valueB]) => {
        return valueB - valueA;
    });

    for (const [key, value] of sortedResult) {
        console.log(`${key} -> ${value} times`);
    }
}

//---test1---//
wordOccurrences(["Here", "is", "the", "first", "sentence",
    "Here", "is", "another", "sentence", "And", "finally", "the",
    "third", "sentence"
]);
/*--countult---
sentence -> 3 times
Here -> 2 times
is -> 2 times
the -> 2 times
first -> 1 times
another -> 1 times
And -> 1 times
finally -> 1 times
third -> 1 times
 */