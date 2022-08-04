function аctivationKeys(data) {
    let activationKey = data.shift();
    for (const line of data) {
        if (line === 'Generate') break;

        let [command, value1, value2, value3, ] = line.split('>>>');

        switch (command) {
            case 'Contains':
                containing(activationKey, value1)
                break;
            case 'Flip':
                activationKey = flipping(activationKey, value1, Number(value2), Number(value3))
                break;
            case 'Slice':
                activationKey = slicing(activationKey, Number(value1), Number(value2))
                break;
        }
    }

    console.log(`Your activation key is: ${activationKey}`);

    function containing(activationKey, substring) {
        if (activationKey.includes(substring)) {
            console.log(`${activationKey} contains ${substring}`);
        } else {
            console.log('Substring not found!');
        }
    }

    function flipping(activationKey, type, startIndex, endIndex) {
        let replacement = activationKey.slice(startIndex, endIndex);
        switch (type) {
            case 'Upper':
                replacement = replacement.toUpperCase()
                break;
            case 'Lower':
                replacement = replacement.toLowerCase()
                break;
        }
        activationKey = activationKey.slice(0, startIndex) + replacement + activationKey.slice(endIndex);
        console.log(activationKey);
        return activationKey
    }

    function slicing(activation, startIndex, endIndex) {
        activationKey = activation.slice(0, startIndex) + activationKey.slice(endIndex);
        console.log(activationKey);
        return activationKey
    }
}
console.log('----test 1----');
аctivationKeys(["abcdefghijklmnopqrstuvwxyz",
    "Slice>>>2>>>6",
    "Flip>>>Upper>>>3>>>14",
    "Flip>>>Lower>>>5>>>7",
    "Contains>>>def",
    "Contains>>>deF",
    "Generate"
]);
/*---result---
abghijklmnopqrstuvwxyz
abgHIJKLMNOPQRstuvwxyz
abgHIjkLMNOPQRstuvwxyz
Substring not found!
Substring not found!
Your activation key is: abgHIjkLMNOPQRstuvwxyz
*/
console.log('----test 2----');
//---test 2 ---//
аctivationKeys(["134softsf5ftuni2020rockz42",
    "Slice>>>3>>>7",
    "Contains>>>-rock",
    "Contains>>>-uni-",
    "Contains>>>-rocks",
    "Flip>>>Upper>>>2>>>8",
    "Flip>>>Lower>>>5>>>11",
    "Generate"
]);
/*---result---
134sf5ftuni2020rockz42
Substring not found!
Substring not found!
Substring not found!
134SF5FTuni2020rockz42
134SF5ftuni2020rockz42
Your activation key is: 134SF5ftuni2020rockz42
*/