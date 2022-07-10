function dictionary(data) {
    let dataForSort = [];
    let dictionaries = {};

    for (const element of data) {
        let tempTerm = JSON.parse(element);
        let entries = Object.entries(tempTerm);
        dataForSort.push(entries);
    }

    let sortData = dataForSort.sort();


    sortData.forEach(element => {
        let tokens = element[0];
        let term = tokens[0]
        let definition = tokens[1];
        dictionaries[term] = definition;
    });
    for (const key in dictionaries) {
        console.log(`Term: ${key} => Definition: ${dictionaries[key]}`);
    }


}
dictionary([
        '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
        '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
        '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
        '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
        '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
    ])
    // dictionary([
    //     '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    //     '{"Coffee":"A hot drink."}',
    // ])