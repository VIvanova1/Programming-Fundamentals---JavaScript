function counterStrike(arr) {
    let energy = arr.shift();

    let counter = 0;
    let isLoseGame = false;
    let index = 0;
    let command = arr[index];

    while (command !== "End of battle") {
        let distance = Number(command);

        if (battle(energy, distance) < 0) {
            isLoseGame = true;
            break;
        }
        energy = battle(energy, distance);
        counter++;
        energy = increaseEnegry(counter, energy);
        command = arr[++index]
    }

    endGame(energy, counter, isLoseGame);


    function battle(energy, distance) {
        let remainingЕnergy = energy - distance;
        return remainingЕnergy;
    }

    function increaseEnegry(counter, energy) {
        if (counter % 3 === 0) {
            energy += counter;
        }
        return energy;
    }

    function endGame(energy, counter, isLoseGame) {
        if (isLoseGame) {
            console.log(`Not enough energy! Game ends with ${counter} won battles and ${energy} energy`);
        } else {
            console.log(`Won battles: ${counter}. Energy left: ${energy}`);
        }
    }

}
counterStrike(["1", '2'])
counterStrike(["100", "10", "10", "10", "1", "2", "3", "73", "10"]);
//counterStrike(["200", "54", "14", "28", "13", "End of battle"]);