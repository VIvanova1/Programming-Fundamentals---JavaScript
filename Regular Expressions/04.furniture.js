function furniture(data) {
    let pattern = />{2}(?<furniture>[A-Z][A-Za-z]+)<{2}(?<price>\d+\.?\d+)!(?<quantity>\d+)/gm;
    let result = [];
    let totalSum = 0;
    let match = pattern.exec(data)
    while (match !== null) {
        let furniture = match.groups['furniture'];
        result.push(furniture);

        let price = match.groups['price'];
        let quantity = match.groups['quantity'];
        totalSum += Number(price) * Number(quantity);

        match = pattern.exec(data)
    }
    console.log('Bought furniture:');
    result.forEach(element => {
        console.log(element);
    });
    console.log(`Total money spend: ${totalSum.toFixed(2)}`);

}
//---test 1 ---//
furniture(['>>Sofa<<312.23!3',
    '>>TV<<300!5',
    '>Invalid<<!5',
    'Purchase'
]);
/*---result---
Bought furniture:
Sofa
TV
Total money spend: 2436.69
 */