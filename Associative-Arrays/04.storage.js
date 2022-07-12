function storage(data) {
    let myMap = new Map();

    for (const line of data) {
        let tokens = line.split(' ');
        let product = tokens[0];
        let quantity = Number(tokens[1]);


        if (!myMap.has(product)) {
            myMap.set(product, quantity)
        } else {
            let oldQuantity = myMap.get(product);
            let newQuantity = oldQuantity + quantity;
            myMap.set(product, newQuantity)
        }
    }
    for (const [product, newQuantity] of myMap) {
        console.log(`${product} -> ${newQuantity}`);
    }
}
//---test1---//
storage(['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40'
]);
/*result
tomatoes -> 10
coffee -> 45
olives -> 100
 */