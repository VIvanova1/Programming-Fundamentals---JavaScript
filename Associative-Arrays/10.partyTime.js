function partyTime(data) {

    let vip = new Set();
    let regular = new Set();

    let isParty = false;
    for (const element of data) {

        if (element === 'PARTY') {
            isParty = true;
            continue;
        }
        if (!isParty) {
            let firstCh = Number(element[0]);

            if (isNaN(firstCh)) {
                regular.add(element)
            } else {
                vip.add(element)
            }
        } else {

            vip.delete(element);
            regular.delete(element);
        }

    }
    let countGuests = vip.size + regular.size;

    console.log(countGuests);

    vip.forEach(element => {
        console.log(element);
    });

    regular.forEach(element => {
        console.log(element);
    });

}
//---test 1---//
partyTime(['7IK9Yo0h',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc',
    'tSzE5t0p',
    'PARTY',
    '9NoBUajQ',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc'
]);
/*--result--
2
7IK9Yo0h
tSzE5t0p
 */