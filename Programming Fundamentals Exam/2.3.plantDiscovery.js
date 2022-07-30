function plantDiscovery(data) {
    let plantsCount = Number(data.shift());
    let plantation = {}
    for (let index = 0; index < plantsCount; index++) {
        let [name, rarity] = data.shift().split('<->');
        rarity = Number(rarity);

        plantation[name] = {
            rarity: rarity,
            ratings: [],
        }
    }

    for (const line of data) {
        if (line === 'Exhibition') break;

        let [command, values] = line.split(': ');
        let [plant, value] = values.split(' - ');

        if (!plantation.hasOwnProperty(plant)) {
            console.log('error');
            continue;
        }

        switch (command) {
            case 'Rate':
                ratingPlant(plantation, plant, value);
                break;
            case 'Update':
                updating(plantation, plant, value);
                break;
            case 'Reset':
                reset(plantation, plant);
                break;
        }
    }
    console.log('Plants for the exhibition:');
    for (const [plant, values] of Object.entries(plantation)) {
        let averageRating = 0;
        let totalRating = values.ratings;

        for (const val of totalRating) {
            averageRating += Number(val);
        }
        let length = totalRating.length;

        if (length > 0) {
            averageRating /= totalRating.length;
        }

        console.log(`- ${plant}; Rarity: ${values.rarity}; Rating: ${averageRating.toFixed(2)}`);
    }

    function ratingPlant(plantation, plant, vote) {
        vote = Number(vote);
        plantation[plant].ratings.push(vote);
    }

    function updating(plantation, plant, newRarity) {
        plantation[plant].rarity = Number(newRarity);
    }

    function reset(plantation, plant) {
        plantation[plant].ratings = [];
    }

}
//---test---//
plantDiscovery(["3",
    "Arnoldii<->4",
    "Woodii<->7",
    "Welwitschia<->2",
    "Rate: Woodii - 10",
    "Rate: Welwitschia - 7",
    "Rate: Arnoldii - 3",
    "Rate: Woodii - 5",
    "Update: Woodii - 5",
    "Reset: Arnoldii",
    "Exhibition"
]);
/*---result---
Plants for the exhibition:
- Arnoldii; Rarity: 4; Rating: 0.00
- Woodii; Rarity: 5; Rating: 7.50
- Welwitschia; Rarity: 2; Rating: 7.00
 */
console.log('--------');
//---test---//
plantDiscovery(["3",
    "Arnoldii<->4",
    "Woodii<->7",
    "Arnoldii<->6",

    "Rate: me - 10",
    "Rate: Welwitschia - 7",
    "Rate: Arnoldii - 3",
    "Rate: Woodii - 5",
    "Update: Woodii - 5",
    "Reset: Arnoldii",
    "Exhibition"
]);