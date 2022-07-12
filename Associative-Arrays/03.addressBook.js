function addressBook(data) {
    let bookaddress = {};
    for (const line of data) {
        let [name, address] = line.split(':');
        bookaddress[name] = address;
    }
    let sortedAddress = Object.entries(bookaddress).sort(([keyA, valueA], [keyB, valueB]) => {
        return keyA.localeCompare(keyB);
    });

    for (const [name, address] of sortedAddress) {
        console.log(`${name} -> ${address}`);
    }


}
//--test--//
addressBook(['Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd'
]);
/*--result--
Bill -> Ornery Rd
Peter -> Carlyle Ave
Tim -> Doe Crossing */