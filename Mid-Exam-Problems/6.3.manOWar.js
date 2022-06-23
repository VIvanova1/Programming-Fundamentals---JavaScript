function manOWar(array) {
    let statusPirateShip = array.shift().split('>').map(Number);
    let statusWarShip = array.shift().split('>').map(Number);
    let maxHealthCapacity = Number(array.shift());

    let sunkenEnemyShip = false;
    let loseWar = false;

    for (let i = 0; i < array.length; i++) {
        let tokens = array[i].split(' ');
        let command = tokens.shift();

        switch (command) {
            case 'Fire':
                if (fireAttack(tokens)) {
                    sunkenEnemyShip = true;
                }
                break;
            case 'Defend':
                if (defending(tokens)) {
                    loseWar = true;
                }
                break;
            case 'Repair':
                repairShip(tokens);
                break;
            case 'Status':
                console.log(`${statusShip(statusPirateShip, maxHealthCapacity)} sections need repair.`);
                break;
        }
        if (sunkenEnemyShip) {
            console.log("You won! The enemy ship has sunken.");
            break;
        }
        if (loseWar) {
            console.log("You lost! The pirate ship has sunken.");
            break;
        }

    }

    if (!sunkenEnemyShip && !loseWar) {
        console.log(`Pirate ship status: ${pirates(statusPirateShip)}`);
        console.log(`Warship status: ${pirates(statusWarShip)}`);
    }

    function validAttack(index, ship) {
        let boundsShip = ship.length;
        if (index >= 0 && index < boundsShip) {
            return true;
        }
    }

    function sunkenShip(index, ship) {
        let section = ship[index]
        if (section <= 0) {
            return true;
        }
    }

    //commands//
    function fireAttack(tokens) {
        let index = Number(tokens[0]);
        let demage = Number(tokens[1]);

        if (validAttack(index, statusWarShip)) {
            statusWarShip[index] -= demage;
        }
        if (sunkenShip(index, statusWarShip)) {
            return true
        }
    }

    function defending(tokens) {
        let startIndex = Number(tokens[0]);
        let endIndex = Number(tokens[1]);
        let demage = Number(tokens[2]);

        if (validAttack(startIndex, statusPirateShip) &&
            validAttack(endIndex, statusPirateShip)) {
            for (let j = startIndex; j <= endIndex; j++) {
                statusPirateShip[j] -= demage;

                if (sunkenShip(j, statusPirateShip)) {
                    return true;
                }

            }
        }
    }

    function repairShip(tokens) {
        let index = Number(tokens[0]);
        let health = Number(tokens[1]);

        if (validAttack(index, statusPirateShip)) {
            statusPirateShip[index] += health;
            if (statusPirateShip[index] > maxHealthCapacity) {
                statusPirateShip[index] = maxHealthCapacity;
            }
        }
    }

    function statusShip(statusPirateShip, maxHealthCapacity) {
        let healthBound = maxHealthCapacity * 0.2;
        let sectionNeedRepair = 0;
        for (const section of statusPirateShip) {
            if (section < healthBound) {
                sectionNeedRepair++;
            }
        }
        return sectionNeedRepair
    }

    function pirates(status) {
        let sum = 0;
        for (const el of status) {
            sum += el;
        }
        return sum
    }

}
manOWar((["12>13>11>20>66",
    "12>22>33>44>55>32>18",
    "70",
    "Fire 2 11",
    "Fire 8 100",
    "Defend 3 6 11",
    "Defend 0 3 5",
    "Repair 1 33",
    "Status",
    "Retire"
]));
manOWar((["2>3>4>5>2",
    "6>7>8>9>10>11",
    "20",
    "Status",
    "Fire 2 3",
    "Defend 0 4 11",
    "Repair 3 18",
    "Retire"
]));