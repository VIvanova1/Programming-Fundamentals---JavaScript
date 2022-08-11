function gladiator(
    lostFights,
    helmetPrice,
    swordPrice,
    shieldPrice,
    armorPrice
) {
    let totalAmound = 0;
    for (let index = 1; index <= lostFights; index++) {
        if (index % 2 === 0) {
            totalAmound += helmetPrice;
        }
        if (index % 3 === 0) {
            totalAmound += swordPrice;
        }
        if (index % 6 === 0) {
            totalAmound += shieldPrice;
        }
        if (index % 12 === 0) {
            totalAmound += armorPrice
        }

    }
    console.log(`Gladiator expenses: ${totalAmound.toFixed(2)} aureus`);

}
gladiator(7, 2, 3, 4, 5);