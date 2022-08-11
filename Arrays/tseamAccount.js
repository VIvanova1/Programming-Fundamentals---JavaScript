function tseamAccount(arr) {
    let account = arr.shift().split(' ');

    let index = 0;
    let [action, game] = arr[index].split(' ')
    while (action !== 'Play!') {

        let gameIndex = account.indexOf(game);

        switch (action) {
            case 'Install':
                instal(gameIndex)
                break;
            case 'Uninstall':
                uninstall(gameIndex)
                break;
            case 'Update':
                update(gameIndex)
                break;
            case 'Expansion':
                expansionGame(game)
                break;
        }

        [action, game] = arr[++index].split(' ')
    }
    console.log(account.join(' '));


    function instal(gameIndex) {
        if (gameIndex < 0) {
            account.push(game)
        }
    }

    function uninstall(gameIndex) {
        if (gameIndex >= 0) {
            account.splice(gameIndex, 1);
        }
    }

    function update(gameIndex) {
        if (gameIndex >= 0) {
            let updateGame = account.splice(gameIndex, 1);
            account.push(updateGame[0]);
        }
    }

    function expansionGame(game) {
        let [originalGame, epansion] = game.split('-');
        let indexOriginalG = account.indexOf(originalGame);
        if (indexOriginalG >= 0) {
            account.splice(indexOriginalG + 1, 0, `${originalGame}:${epansion}`)
        }
    }
}
tseamAccount(['CS WoW Diablo',
    'Install LoL',
    'Uninstall WoW',
    'Update Diablo',
    'Expansion CS-Go',
    'Play!'
]);
tseamAccount(['CS WoW Diablo',
    'Uninstall XCOM',
    'Update PeshoGame',
    'Update WoW',
    'Expansion Civ-V',
    'Play!'
]);