function worldTour(data) {
    let destinations = data.shift();
    const addingStop = (destinations, index, second) => {

        if (index < destinations.length && index >= 0) {
            return destinations.slice(0, index) + second + destinations.slice(index);
        }

        return destinations;
    }

    const removing = (destinations, startIndex, endIndex) => {
        let bound = destinations.length;
        if (startIndex < bound && endIndex < bound && startIndex >= 0 && endIndex >= 0) {
            return destinations.slice(0, startIndex) + destinations.slice(endIndex + 1);
        }
        return destinations;
    }

    const switching = (destinations, first, second) => {
        const regexp = new RegExp(first, 'g');
        return destinations.replace(regexp, second)
    }

    for (const line of data) {
        if (line === 'Travel') break;
        let [command, first, second] = line.split(':');

        switch (command) {
            case 'Add Stop':
                destinations = addingStop(destinations, Number(first), second)
                break;
            case 'Remove Stop':
                destinations = removing(destinations, Number(first), Number(second))
                break;
            case 'Switch':
                destinations = switching(destinations, first, second)
                break;
            default:
                console.log('No such command!');
                continue;
        }
        console.log(destinations);
    }

    console.log(`Ready for world tour! Planned stops: ${destinations}`);
}
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