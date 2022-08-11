function train(commands) {
    let vagons = commands.shift().split(' ')
    let maxCapacity = Number(commands.shift());

    for (let i = 0; i < commands.length; i++) {
        // let command = commands[i]
        let [command, passengers] = commands[i].split(' ');
        if (command == 'Add') {
            vagons.push(passengers);
        } else {
            let vagonIndex = 0;
            let tempVagon = Number(vagons[vagonIndex]);
            let newPass = Number(command);
            while (vagonIndex < vagons.length) {
                if (tempVagon + newPass <= maxCapacity) {
                    let newVagon = tempVagon + newPass;
                    vagons.splice(vagonIndex, 1, newVagon);
                    break;
                } else {
                    vagonIndex++;
                    tempVagon = Number(vagons[vagonIndex]);
                }

            }
        }
    }
    console.log(vagons.join(' '));
}
train(['32 54 21 12 4 0 23',
    '75',
    'Add 10',
    'Add 0',
    '30',
    '10',
    '75'
]);
train(['0 0 0 10 2 4',
    '10',
    'Add 10',
    '10',
    '10',
    '10',
    '8',
    '6'
])