function inventory(arr) {
    let heroes = [];

    arr.forEach(el => {
        let [name, level, items] = el.split(' / ');

        let curentHero = {
            name,
            level: +level,
            items,
        };
        heroes.push(curentHero)
    });
    let sortedByLevel = heroes.sort((a, b) => {
        return a.level - b.level
    });

    sortedByLevel.forEach(element => {
        console.log(`Hero: ${element.name}`);
        console.log(`level => ${element.level}`);
        console.log(`items => ${element.items}`);
    });
}
//----Тest 1 ----//
inventory([
    "Isacc / 25 / Apple, GravityGun",
    "Derek / 12 / BarrelVest, DestructionSword",
    "Hes / 1 / Desolator, Sentinel, Antara",
]);

//----Result----//
// Hero: Hes
// level => 1
// items => Desolator, Sentinel, Antara
// Hero: Derek
// level => 12
// items => BarrelVest, DestructionSword
// Hero: Isacc
// level => 25
// items => Apple, GravityGun


//----Тest 2 ----//
inventory([
    "Batman / 2 / Banana, Gun",
    "Superman / 18 / Sword",
    "Poppy / 28 / Sentinel, Antara",
]);

//----Result----//
// Hero: Batman
// level => 2
// items => Banana, Gun
// Hero: Superman
// level => 18
// items => Sword
// Hero: Poppy
// level => 28
// items => Sentinel, Antara