function MuOnline(rooms) {
    let health = 100;
    let bitcoins = 0;
    let isLose = false;

    rooms = rooms.split("|");
    for (let i = 0; i < rooms.length; i++) {
        let [command, amount] = rooms[i].split(" ");
        amount = Number(amount)
        switch (command) {
            case "potion":
                potion(amount);
                break;
            case "chest":
                chest(amount);
                break;
            default:
                health -= amount;
                battle(health, command);
                break;
        }
        if (isLose) {
            console.log(`You died! Killed by ${command}.`);
            console.log(`Best room: ${i+1}`);
            break;
        }
    }

    if (isLose == false) {
        console.log("You've made it!");
        console.log(`Bitcoins: ${bitcoins}`);
        console.log(`Health: ${health}`);
    }

    function potion(amount) {
        if (amount > 100 - health) {
            amount = 100 - health;
        }
        health += amount;
        console.log(`You healed for ${amount} hp.`);
        console.log(`Current health: ${health} hp.`);
    }

    function chest(amount) {
        bitcoins += amount;
        console.log(`You found ${amount} bitcoins.`);
    }

    function battle(health, command) {

        if (health > 0) {
            console.log(`You slayed ${command}.`);
        } else {
            isLose = true;
        }
    }
}
MuOnline("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110");
console.log('-----------');
MuOnline("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000");