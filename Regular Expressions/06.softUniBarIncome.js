function softUniBarIncome(data) {
    let pattern = /%(?<name>[A-Z][a-z]+)[%][^|$%.0-9]*[<](?<product>\w+)[>][^|$%.0-9]*[|](?<count>\d+)[|][^|$%.0-9]*(?<price>\d+\.*\d+?)[$]/gm;
    let personAmound = 0;
    let totalSum = 0;

    let matched = pattern.exec(data);

    while (matched !== null) {
        let name = matched.groups['name'];
        let product = matched.groups['product'];
        let count = matched.groups['count'];
        let price = matched.groups['price'];

        personAmound = Number(count) * Number(price);
        console.log(`${name}: ${product} - ${personAmound.toFixed(2)}`);
        totalSum += personAmound;
        matched = pattern.exec(data)
    }
    console.log(`Total income: ${totalSum.toFixed(2)}`);
}
//---test 1 ---//
softUniBarIncome(['%George%<Croissant>|2|10.3$',
    '%Peter%<Gum>|1|1.3$',
    '%Maria%<Cola>|1|2.4$',
    'end of shift'
]);
/*---result---
George: Croissant - 20.60
Peter: Gum - 1.30
Maria: Cola - 2.40
Total income: 24.30
 */