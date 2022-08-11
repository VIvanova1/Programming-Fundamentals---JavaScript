function DungeonestDark(input) {
    let rooms = input[0].split("|");
    let health = 100;
    let coins = 0;
    let isDead = false;
    for (let i = 0; i <= rooms.length - 1; i++) {
        let room = rooms[i].split(" ");

        for (let j = 0; j < room.length - 1; j++) {

            let tempAction = room[j];
            let tempPoints = Number(room[j + 1]);

            if (tempAction === "potion") {
                if (100 - health <= tempPoints) {
                    console.log(`You healed for ${100-health} hp.`);
                    health = 100;
                } else {
                    console.log(`You healed for ${tempPoints} hp.`);
                }
                health += tempPoints;
                if (health > 100) {
                    health = 100;
                }
                console.log(`Current health: ${health} hp.`);
            } else if (tempAction === "chest") {
                console.log(`You found ${tempPoints} coins.`);
                coins += tempPoints;
            } else {

                health -= tempPoints;
                if (health <= 0) {
                    isDead = true;
                    console.log(`You died! Killed by ${tempAction}.`);
                    console.log(`Best room: ${i+1}`);
                    break;
                } else {
                    console.log(`You slayed ${tempAction}.`);
                }
            }
        }
        if (isDead) {
            break;
        }
    }
    if (isDead === false) {
        console.log("You've made it!");
        console.log(`Coins: ${coins}`);
        console.log(`Health: ${health}`);
    }
}
DungeonestDark(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"]);