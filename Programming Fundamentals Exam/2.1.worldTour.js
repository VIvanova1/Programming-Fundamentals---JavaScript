function worldTour(data) {
    let desitnations = data.shift();

    for (const line of data) {
        let tokens = line.split(':');
        let command = tokens[0];
        let first = tokens[1];
        let second = tokens[2];

        switch (command) {
            case 'Add Stop':
                addingStor(first, second)
                break;
            case 'Remove Stop':
                removing(first, second)
                break;
            case 'Switch':
                switching(first, second)
                break;
            case 'Travel':
                console.log(traveling());
                break;
        }
    }

    console.log(`Ready for world tour! Planned stops: ${desitnations}`);


    //"Add Stop:{index}:{string}": Insert the given string at that index only if the index is valid
    function addingStor(first, second) {
        let index = Number(first);
        let destinationsAsArr = desitnations.split('');

        if (index < destinationsAsArr.length && index >= 0) {
            destinationsAsArr.splice(index, 0, second);
        }
        desitnations = destinationsAsArr.join('')
        console.log(desitnations);
    }

    //"Remove Stop:{start_index}:{end_index}":
    //Remove the elements of the string from the starting index to the end index (inclusive) if both indices are valid
    function removing(first, second) {
        let startIndex = Number(first);
        let endIndex = Number(second);
        let destinationsAsArr = desitnations.split('');
        let bound = destinationsAsArr.length;
        if (startIndex < bound && endIndex < bound) {
            destinationsAsArr.splice(startIndex, endIndex - startIndex + 1);
        }
        desitnations = destinationsAsArr.join('')
        console.log(desitnations);
    }

    //"Switch:{old_string}:{new_string}":
    //If the old string is in the initial string, replace it with the new one (all occurrences)
    function switching(first, second) {
        let index = desitnations.indexOf(first);

        while (index !== -1) {
            let endOldString = index + first.length;
            let destinationsAsArr = desitnations.split('');
            destinationsAsArr.splice(index, endOldString, second);
            desitnations = destinationsAsArr.join('');
            index = desitnations.indexOf(first);
            console.log(desitnations);
        }
    }
}
//Still not working
//---test---//
worldTour(["Hawai::Cyprys-Greece",
    "Add Stop:7:Rome",
    "Remove Stop:11:16",
    "Switch:Hawai:Bulgaria",
    "Travel"
]);
/*---result---
Hawai::RomeCyprys-Greece
Hawai::Rome-Greece
Bulgaria::Rome-Greece
Ready for world tour! Planned stops: Bulgaria::Rome-Greece
 */
console.log('--------');
//---test 2---//
worldTour(["Albania:Bulgaria:Cyprus:Deuchland",
    "Add Stop:3:Nigeria",
    "Remove Stop:4:8",
    "Switch:Albania: Azərbaycan",
    "Travel"
]);

/*---result---
AlbNigeriaania:Bulgaria:Cyprus:Deuchland
AlbNaania:Bulgaria:Cyprus:Deuchland
AlbNaania:Bulgaria:Cyprus:Deuchland
Ready for world tour! Planned stops: AlbNaania:Bulgaria:Cyprus:Deuchland
 */