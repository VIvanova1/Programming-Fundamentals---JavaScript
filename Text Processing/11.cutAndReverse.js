function cutAndReverse(text) {
    let firstPart = text.substring(0, text.length / 2);
    let secPart = text.substring(text.length / 2, );

    firstPart = firstPart.split('');
    secPart = secPart.split('');

    console.log(firstPart.reverse().join(''));
    console.log(secPart.reverse().join(''));


}
//---test 1---//
cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT');
/*---result---
ThisIsDifficult
ThisIsSoAmazing
*/
console.log('------');
//---test 2---/
cutAndReverse('sihToDtnaCuoYteBIboJsihTtAdooGoSmI');
/*---result---
IBetYouCantDoThis
ImSoGoodAtThisJob
*/