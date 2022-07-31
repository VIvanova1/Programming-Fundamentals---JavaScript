function fancyBarcodes(data) {
    let counter = data.shift();
    let pattern = /@[#]+[A-Z]([A-Za-z0-9]){4,}[A-Z]@[#]+/gm
    let digitpattern = /\d+/gm;

    for (const line of data) {
        if (line.search(pattern) >= 0) {
            let valid = line.match(digitpattern);
            if (valid === null) {
                valid = '00';
                console.log(`Product group: ${valid}`);
            } else {
                let group = '';
                valid.forEach(element => {
                    group += element;
                });
                console.log(`Product group: ${group}`);
            }

        } else {
            console.log("Invalid barcode");
        }
    }
}
//---test---//
fancyBarcodes(["3",
    "@#FreshFisH@#",
    "@###Brea0D@###",
    "@##Che4s6E@##"
]);
/*---result---
Product group: 00
Product group: 0
Product group: 46
 */
console.log('---------');
//---test---//
fancyBarcodes(["6",
    "@###Val1d1teM@###",
    "@#ValidIteM@#",
    "##InvaliDiteM##",
    "@InvalidIteM@",
    "@#Invalid_IteM@#",
    "@#ValiditeM@#"
]);
/*---result---
Product group: 11
Product group: 00
Invalid barcode
Invalid barcode
Invalid barcode
Product group: 00
 */