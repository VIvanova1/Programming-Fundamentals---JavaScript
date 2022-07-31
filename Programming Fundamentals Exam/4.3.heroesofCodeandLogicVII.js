function heroesofCodeandLogicVII(data) {
    let heroesHounter = Number(data.shift());
    const maximumHPValue = 100;
    const maximumMPValue = 200;
    let heroes = {};

    for (let i = 0; i < heroesHounter; i++) {
        let tempHero = data.shift();
        let [name, HP, MP] = tempHero.split(' ');

        heroes[name] = {
            HP: Number(HP),
            MP: Number(MP),
        }
    }

    for (const line of data) {
        if (line === 'End') break;

        let [command, value1, value2, value3] = line.split(' - ');

        switch (command) {
            case 'CastSpell':
                speel(heroes, value1, Number(value2), value3);
                break;
            case 'TakeDamage':
                demages(heroes, value1, Number(value2), value3);
                break;
            case 'Recharge':
                recharging(heroes, value1, Number(value2));
                break;
            case 'Heal':
                heal(heroes, value1, Number(value2));
                break;
        }
    }
    for (const [name, values] of Object.entries(heroes)) {
        console.log(name);
        console.log(`  HP: ${values.HP}`);
        console.log(`  MP: ${values.MP}`);
    }

    function speel(heroes, name, MPNeeded, spellName) {
        if (heroes[name].MP >= MPNeeded) {
            heroes[name].MP -= MPNeeded;
            console.log(`${name} has successfully cast ${spellName} and now has ${heroes[name].MP} MP!`);
        } else {
            console.log(`${name} does not have enough MP to cast ${spellName}!`);
        }
    }

    function demages(heroes, name, demage, attacker) {
        heroes[name].HP -= demage;
        if (heroes[name].HP > 0) {
            console.log(`${name} was hit for ${demage} HP by ${attacker} and now has ${heroes[name].HP} HP left!`);
        } else {
            delete heroes[name];
            console.log(`${name} has been killed by ${attacker}!`);
        }
    }

    function recharging(heroes, name, amount) {
        heroes[name].MP += amount;
        if (heroes[name].MP > maximumMPValue) {
            amount -= heroes[name].MP - maximumMPValue
            heroes[name].MP = maximumMPValue;
        }
        console.log(`${name} recharged for ${amount} MP!`);
    }

    function heal(heroes, name, amount) {
        heroes[name].HP += amount;
        if (heroes[name].HP > maximumHPValue) {
            amount -= heroes[name].HP - maximumHPValue
            heroes[name].HP = maximumHPValue;
        }
        console.log(`${name} healed for ${amount} HP!`);
    }
}
//---test---//
heroesofCodeandLogicVII(['2',
    'Solmyr 85 120',
    'Kyrre 99 50',
    'Heal - Solmyr - 10',
    'Recharge - Solmyr - 50',
    'TakeDamage - Kyrre - 66 - Orc',
    'CastSpell - Kyrre - 15 - ViewEarth',
    'End'
]);
/*---result---
Solmyr healed for 10 HP!
Solmyr recharged for 50 MP!
Kyrre was hit for 66 HP by Orc and now has 33 HP left!
Kyrre has successfully cast ViewEarth and now has 35 MP!
Solmyr
  HP: 95
  MP: 170
Kyrre
  HP: 33
  MP: 35
 */
console.log('---------');
//---test---//
heroesofCodeandLogicVII(['4',
    'Adela 90 150',
    'SirMullich 70 40',
    'Ivor 1 111',
    'Tyris 94 61',
    'Heal - SirMullich - 50',
    'Recharge - Adela - 100',
    'CastSpell - Tyris - 1000 - Fireball',
    'TakeDamage - Tyris - 99 - Fireball',
    'TakeDamage - Ivor - 3 - Mosquito',
    'End'
]);
/*---result---
SirMullich healed for 30 HP!
Adela recharged for 50 MP!
Tyris does not have enough MP to cast Fireball!
Tyris has been killed by Fireball!
Ivor has been killed by Mosquito!
Adela
  HP: 90
  MP: 200
SirMullich
  HP: 100
  MP: 40

 */