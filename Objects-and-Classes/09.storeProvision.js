function storeProvision(stock, productsOrder) {

    class StoreProduct {
        constructor(product, quantity) {
            this.product = product;
            this.quantity = quantity;
        }
    }

    for (let i = 0; i < productsOrder.length; i += 2) {

        let nameProduct = productsOrder[i];
        let countProduct = Number(productsOrder[i + 1]);

        let indexProduct = stock.indexOf(nameProduct);
        let tempCountInShop = Number(stock[indexProduct + 1]);

        if (indexProduct >= 0) {
            tempCountInShop = tempCountInShop + countProduct;
            stock.splice(indexProduct + 1, 1, tempCountInShop);
        } else {
            stock.push(productsOrder[i]);
            stock.push(countProduct)
        }
    }
    let shop = [];
    for (let j = 0; j < stock.length; j += 2) {
        let currProduct = new StoreProduct(stock[j], Number(stock[j + 1]));
        shop.push(currProduct);
    }
    for (const element of shop) {
        console.log(`${element.product} -> ${element.quantity}`);
    }

}
storeProvision([
    'Chips', '5', 'CocaCola', '9',
    'Bananas', '14', 'Pasta', '4',
    'Beer', '2'
], [
    'Flour', '44', 'Oil', '12',
    'Pasta', '7', 'Tomatoes', '70',
    'Bananas', '30'
]);
console.log('----------------------');
storeProvision([
    'Salt', '2', 'Fanta', '4',
    'Apple', '14', 'Water', '4',
    'Juice', '5'
], [
    'Sugar', '44', 'Oil', '12',
    'Apple', '7', 'Tomatoes', '7',
    'Bananas', '30'
]);