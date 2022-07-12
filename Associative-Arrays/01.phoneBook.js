function phoneBook(data) {
    let phones = {};
    for (const line of data) {
        let [name, number] = line.split(' ')
        phones[name] = number;
    }

    for (const [name, number] of Object.entries(phones)) {

        console.log(`${name} -> ${number}`);
    }



}
//----test----//
phoneBook(['Tim 0834212554',
        'Peter 0877547887',
        'Bill 0896543112',
        'Tim 0876566344'
    ])
    //----result----//
    /*Tim -> 0876566344
    Peter -> 0877547887
    Bill -> 0896543112*/