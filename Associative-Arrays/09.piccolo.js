function piccolo(data) {
    let parking = new Set();

    for (const line of data) {
        let [command, number] = line.split(', ');

        switch (command) {
            case 'IN':
                parking.add(number)
                break;
            case 'OUT':
                parking.delete(number)
                break;
        }
    };

    if (parking.size === 0) {
        return console.log(`Parking Lot is Empty`);
    };

    let sortedParking = Array.from(parking.values()).sort();

    sortedParking.forEach(element => {
        console.log(element);
    });

}
// --- test 1 ---//
piccolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU'
])

/* --- result
CA2822UU
CA2844AA
CA9876HH
CA9999TT
*/

// --- test 2 ---//
piccolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'OUT, CA1234TA'
]);

/* --- result
Parking Lot is Empty
*/