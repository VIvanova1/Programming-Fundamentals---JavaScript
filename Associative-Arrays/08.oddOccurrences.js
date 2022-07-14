function oddOccurrences(data) {
    let result = [];
    let words = data.split(' ');

    for (const element of words) {
        let currentWord = element.toLowerCase();
        if (result.includes(currentWord)) {
            continue;
        }

        let counter = 0;
        for (const word of words) {
            if (currentWord === word.toLowerCase()) {
                counter++;
            }
        }
        if (counter % 2 !== 0) {
            result.push(currentWord)
        }

    }
    console.log(result.join(' '));

}
//--test 1--//
oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');
/*result
c# php 1 5
 */

//--test 2--//
oddOccurrences('Cake IS SWEET is Soft CAKE sweet Food');
/*
soft food
 */