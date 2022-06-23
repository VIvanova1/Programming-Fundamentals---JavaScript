function treasureHunt(arr) {
    let chest = arr.shift().split('|');

    for (let i = 0; i < arr.length; i++) {

        let tokens = arr[i].split(' ');
        let command = tokens.shift();

        switch (command) {
            case 'Loot':
                lootItems(tokens, chest);
                break;
            case 'Drop':
                dropItems(tokens, chest);
                break;
            case 'Steal':
                stealItems(tokens, chest);
                break;
        }


    }
    if (chest.length <= 0) {
        console.log("Failed treasure hunt.");
    } else {
        console.log(`Average treasure gain: ${treasureGain(chest)} pirate credits.`);
    }


    function lootItems(tokens, chest) {
        for (const element of tokens) {
            let index = chest.indexOf(element)

            if (index === -1) {
                chest.unshift(element)
            }
        }
    }

    function dropItems(tokens, chest) {
        let bounds = chest.length;
        let indexItem = Number(tokens[0]);

        if (indexItem >= 0 && indexItem < bounds) {
            let delEl = chest.splice(indexItem, 1);
            chest.push(...delEl);
        }
    }

    function stealItems(tokens, chest) {
        let countStolenEl = Number(tokens[0]);
        let stolenEls = chest.splice(-countStolenEl);
        console.log(stolenEls.join(', '));
    }

    function treasureGain(chest) {
        let sum = 0;
        for (const element of chest) {
            sum += element.length;
        }
        let gain = (sum / chest.length).toFixed(2);
        return gain
    }
}
treasureHunt((["Gold|Silver|Bronze|Medallion|Cup",
    "Loot Wood Gold Coins",
    "Loot Silver Pistol",
    "Drop 3",
    "Steal 3",
    "Yohoho!"
]));
treasureHunt((["Diamonds|Silver|Shotgun|Gold",
    "Loot Silver Medals Coal",
    "Drop -1",
    "Drop 1",
    "Steal 6",
    "Yohoho!"
]));