function shoppingList(arr) {
    let list = arr.shift().split('!');

    let index = 0;
    let tempCommand = arr[index];

    while (tempCommand !== 'Go Shopping!') {
        let [command, item1, item2] = arr[index].split(' ');
        switch (command) {
            case 'Urgent':
                urgent(item1);
                break;
            case 'Unnecessary':
                unnecessary(item1);
                break;
            case 'Correct':
                correct(item1, item2);
                break;
            case 'Rearrange':
                rearrange(item1);
                break;

        }
        tempCommand = arr[++index];
    }
    console.log(list.join(', '));

    function findItem(item) {
        return list.indexOf(item)
    }

    function unnecessary(item1) {
        let indexItem = findItem(item1)
        if (indexItem >= 0) {
            list.splice(indexItem, 1);
        }
    }

    function urgent(item1) {
        if (findItem(item1) < 0) {
            list.unshift(item1)
        }
    }

    function correct(item1, item2) {
        let indexNewIthem = findItem(item1);
        if (indexNewIthem >= 0) {
            list.splice(indexNewIthem, 1, item2)
        }
    }

    function rearrange(item) {
        let indexArangeItem = findItem(item);
        if (indexArangeItem >= 0) {
            list.splice(indexArangeItem, 1);
            list.push(item);
        }

    }
}
// shoppingList(["Tomatoes!Potatoes!Bread",
//     "Unnecessary Milk",
//     "Urgent Tomatoes",
//     "Go Shopping!"
// ]);

shoppingList(["Milk!Pepper!Salt!Water!Banana",
    "Urgent Salt",
    "Unnecessary Grapes",
    "Correct Pepper Onion",
    "Rearrange Grapes",
    "Correct Tomatoes Potatoes",
    "Go Shopping!"
]);