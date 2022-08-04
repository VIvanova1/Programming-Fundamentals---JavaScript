function pirates(data) {
    let targets = {};
    let isSail = false;


    const plundering = (targets, city, people, gold) => {
        targets[city].population -= people;
        targets[city].gold -= gold;
        console.log(`${city} plundered! ${gold} gold stolen, ${people} citizens killed.`);

        if (targets[city].population <= 0 || targets[city].gold <= 0) {
            delete targets[city]
            console.log(`${city} has been wiped off the map!`);
        }
    }

    const prospering = (targets, city, gold) => {
        if (gold < 0) {
            console.log('Gold added cannot be a negative number!');
        } else {
            targets[city].gold += gold;
            console.log(`${gold} gold added to the city treasury. ${city} now has ${targets[city].gold} gold.`);
        }
    }

    for (const line of data) {
        if (line === 'Sail') {
            isSail = true;
            continue;
        }
        if (!isSail) {

            let [city, population, gold] = line.split('||');

            if (!targets.hasOwnProperty(city)) {
                targets[city] = {
                    population: Number(population),
                    gold: Number(gold),
                };
            } else {
                targets[city].population += Number(population);
                targets[city].gold += Number(gold);
            }

        } else {
            let [command, value1, value2, value3] = line.split('=>');

            switch (command) {
                case 'Plunder':
                    plundering(targets, value1, Number(value2), Number(value3))
                    break;
                case 'Prosper':
                    prospering(targets, value1, Number(value2));
                    break;
            }
        }
    }
    let countingTowns = Object.keys(targets).length
    if (countingTowns > 0) {
        console.log(`Ahoy, Captain! There are ${countingTowns} wealthy settlements to go to:`);

        for (const [key, value] of Object.entries(targets)) {
            let [population, gold] = Object.entries(value);
            console.log(`${key} -> Population: ${population[1]} citizens, Gold: ${gold[1]} kg`);
        }
    } else {
        console.log("Ahoy, Captain! All targets have been plundered and destroyed!");
    }
}
console.log('----test 1----');
pirates(["Tortuga||345000||1250",
    "Santo Domingo||240000||630",
    "Havana||410000||1100",
    "Sail",
    "Plunder=>Tortuga=>75000=>380",
    "Prosper=>Santo Domingo=>180",
    "End"
]);
/*---result---
Tortuga plundered! 380 gold stolen, 75000 citizens killed.
180 gold added to the city treasury. Santo Domingo now has 810 gold.
Ahoy, Captain! There are 3 wealthy settlements to go to:
Tortuga -> Population: 270000 citizens, Gold: 870 kg
Santo Domingo -> Population: 240000 citizens, Gold: 810 kg
Havana -> Population: 410000 citizens, Gold: 1100 kg
*/
console.log('----test 2----');
//---test 2 ---//
pirates(["Nassau||95000||1000",
    "San Juan||930000||1250",
    "Campeche||270000||690",
    "Port Royal||320000||1000",
    "Port Royal||100000||2000",
    "Sail",
    "Prosper=>Port Royal=>-200",
    "Plunder=>Nassau=>94000=>750",
    "Plunder=>Nassau=>1000=>150",
    "Plunder=>Campeche=>150000=>690",
    "End"
]);
/*---result---
Gold added cannot be a negative number!
Nassau plundered! 750 gold stolen, 94000 citizens killed.
Nassau plundered! 150 gold stolen, 1000 citizens killed.
Nassau has been wiped off the map!
Campeche plundered! 690 gold stolen, 150000 citizens killed.
Campeche has been wiped off the map!
Ahoy, Captain! There are 2 wealthy settlements to go to:
San Juan -> Population: 930000 citizens, Gold: 1250 kg
Port Royal -> Population: 420000 citizens, Gold: 3000 kg*/