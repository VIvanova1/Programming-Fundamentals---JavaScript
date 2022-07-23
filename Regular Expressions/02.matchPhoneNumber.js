function matchPhoneNumber(data) {
    let pattern = /\+359([ |-])2\1\d{3}\1\d{4}\b/gm
    let numbers = data[0]
    let numbersList = [];
    let match = pattern.exec(numbers)
    while (match !== null) {
        numbersList.push(match[0]);
        match = pattern.exec(numbers)
    }
    console.log(numbersList.join(', '));
}
//---test 1 ---//
matchPhoneNumber(['+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222']);
/*---result---
+359 2 222 2222, +359-2-222-2222
 */