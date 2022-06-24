function towns(arr) {

    let city = {};

    for (let i = 0; i < arr.length; i++) {
        let [town, latitude, longitude] = arr[i].split(' | ');

        city.town = town;
        city.latitude = Number(latitude).toFixed(2);
        city.longitude = Number(longitude).toFixed(2);

        console.log(city);
    }

}
towns(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625'
]);
towns(['Plovdiv | 136.45 | 812.575']);