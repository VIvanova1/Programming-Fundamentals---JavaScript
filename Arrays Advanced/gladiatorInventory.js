function gladiatorInventory(arr) {
    let inventory = arr.shift().split(' ');

    let index = 0;
    while (index < arr.length) {

        let [command, equipment] = arr[index].split(' ');
        switch (command) {
            case 'Buy':
                buy(equipment);
                break;
            case 'Trash':
                trash(equipment)
                break;
            case 'Repair':
                repair(equipment)
                break;
            default:
                upgrade(equipment)
                break;
        }

        index++;
    }

    console.log(inventory.join(' '));

    function buy(item) {
        let itemIndex = inventory.indexOf(item);
        if (itemIndex < 0) {
            inventory.push(item)
        }
    }

    function trash(item) {
        let itemIndex = inventory.indexOf(item);
        if (itemIndex >= 0) {
            inventory.splice(itemIndex, 1);
        }
    }

    function repair(item) {
        let itemIndex = inventory.indexOf(item);
        if (itemIndex >= 0) {
            let delEl = inventory.splice(itemIndex, 1);
            inventory.push(delEl[0]);
        }
    }

    function upgrade(item) {

        let [oldItem, newItem] = item.split('-');
        let itemIndex = inventory.indexOf(oldItem);
        if (itemIndex >= 0) {
            inventory.splice(itemIndex + 1, 0, `${oldItem}:${newItem}`)
        }
    }
}
gladiatorInventory(['SWORD Shield Spear',
    'Buy Bag',
    'Trash Shield',
    'Repair Spear',
    'Upgrade SWORD-Steel'
]);
gladiatorInventory(['SWORD Shield Spear',
    'Trash Bow',
    'Repair Shield',
    'Upgrade Helmet-V'
]);