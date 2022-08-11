function houseParty(arr) {
    let partylist = [];
    for (const element of arr) {
        let tempGuest = element.split(' ');
        let name = tempGuest[0];

        if (tempGuest.length == 3) {

            if (!partylist.includes(name)) {
                partylist.push(name)
            } else {
                console.log(`${name} is already in the list!`);
            }

        } else {

            if (!partylist.includes(name)) {
                console.log(`${name} is not in the list!`);
            } else {
                let numInList = partylist.indexOf(name);
                partylist.splice(numInList, 1)
            }
        }

    }
    console.log(partylist.join('\n'));

}
// houseParty(['Allie is going!',
//     'George is going!',
//     'John is not going!',
//     'George is not going!'
// ]);
houseParty(['Tom is going!',
    'Annie is going!',
    'Tom is going!',
    'Garry is going!',
    'Jerry is going!'
]);