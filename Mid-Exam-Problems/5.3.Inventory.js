function inventory(arr) {
    let journal = arr.shift().split(', ');

    let index = 0;
    let [command, item] = arr[index].split(' - ');
    while (command !== 'Craft!') {
        let indexEl = journal.indexOf(item);
        switch (command) {
            case 'Collect':
                collect(item, indexEl);
                break;
            case 'Drop':
                drop(indexEl);
                break;
            case 'Combine Items':
                combItems(item);
                break;
            case 'Renew':
                renew(indexEl);
                break;
        }


        [command, item] = arr[++index].split(' - ');
    }
    console.log(journal.join(', '));

    function collect(item, indexEl) {
        if (indexEl == -1) {
            journal.push(item);
        }
    }

    function drop(indexEl) {
        if (indexEl >= 0) {
            journal.splice(indexEl, 1);
        }
    }

    function combItems(item) {
        let [oldItem, newItem] = item.split(':');
        let indexEl = journal.indexOf(oldItem);
        if (indexEl >= 0) {
            journal.splice(indexEl + 1, 0, newItem);

        }
    }

    function renew(indexEl) {
        if (indexEl >= 0) {
            let renewItem = journal.splice(indexEl, 1);
            journal.push(renewItem);
        }
    }

}
// inventory([
//     'Iron, Wood, Sword',
//     'Collect - Gold',
//     'Drop - Wood',
//     'Craft!'
// ]);
inventory([
    'Iron, Sword',
    'Drop - Bronze',
    'Combine Items - Sword:Bow',
    'Renew - Iron',
    'Craft!'
])