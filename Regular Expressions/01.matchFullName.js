function matchFullName(data) {
    let pattern = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/gm;
    let namesList = data.split(', ');
    let correctNames = [];
    let valid;
    while ((valid = pattern.exec(namesList)) !== null) {
        correctNames.push(valid[0]);
    }
    console.log(correctNames.join(' '));
}
//---test 1 ---//
matchFullName("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov");
/*---result---
Ivan Ivanov Test Testov
 */