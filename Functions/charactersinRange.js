function charactersInRange(firstChar, secChar) {

    let firstNum = firstChar.charCodeAt();
    let secNum = secChar.charCodeAt();
    let res = '';

    if (firstNum < secNum) {
        for (let i = firstNum + 1; i < secNum; i++) {
            res += `${String.fromCharCode(i)} `;
        }
    } else {
        for (let j = secNum + 1; j < firstNum; j++) {
            res += `${String.fromCharCode(j)} `;
        }
    }

    console.log(res);
}
charactersInRange('C', '#');