function computerStore(arr) {

    let typeClient = arr.pop();
    let priceWithoutTaxes = 0;
    let totalPrice = 0;

    let taxes = price => price *= 0.2;
    let specialDiscount = price => price *= 0.9

    for (const element of arr) {

        let singlePrice = Number(element);

        if (invalidPrice(singlePrice)) {
            continue;
        }

        priceWithoutTaxes += singlePrice;
    }
    let tax = taxes(priceWithoutTaxes);
    totalPrice = priceWithoutTaxes + tax;

    if (typeClient === 'special') {
        totalPrice = specialDiscount(totalPrice);
    }

    if (!invalidOrder(totalPrice)) {
        headReceipt();
        console.log(`Price without taxes: ${priceWithoutTaxes.toFixed(2)}$`);
        console.log(`Taxes: ${tax.toFixed(2)}$`);
        endReceipt();
        console.log(`Total price: ${totalPrice.toFixed(2)}$`);

    }


    function headReceipt() {
        console.log("Congratulations you've just bought a new computer!");
    }

    function endReceipt() {
        console.log("-----------");
    }

    function invalidOrder(sum) {
        if (sum <= 0) {
            console.log('Invalid order!');
            return true;
        }
    }

    function invalidPrice(price) {
        if (price < 0) {
            console.log("Invalid price!");
            return true
        }
    }

}
computerStore([
    '1050',
    '200',
    '450',
    '2',
    '18.50',
    '16.86',
    'special'
]);
console.log("/-/-/-/-/-/-/-/-/-/");
computerStore([
    '1023',
    '15',
    '-20',
    '-5.50',
    '450',
    '20',
    '17.66',
    '19.30', 'regular'
])