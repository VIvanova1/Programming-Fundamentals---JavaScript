function needforSpeedIII(data) {
    let cars = {};
    const maximumFuelPerTank = 75;
    const minimumMileage = 10000;
    let carsCount = Number(data.shift());

    for (let index = 0; index < carsCount; index++) {
        let currentCar = data.shift();
        let [car, mileage, fuel] = currentCar.split('|');

        cars[car] = {
            mileage: Number(mileage),
            fuel: Number(fuel)
        };

    }

    for (const line of data) {
        if (line === 'Stop') break;
        let [command, value1, value2, value3] = line.split(' : ');
        switch (command) {
            case 'Drive':
                drive(cars, value1, Number(value2), Number(value3));
                break;
            case 'Refuel':
                refuel(cars, value1, Number(value2), maximumFuelPerTank)
                break;
            case 'Revert':
                revert(cars, value1, Number(value2), minimumMileage)
                break;
        }

    }

    for (const [car, values] of Object.entries(cars)) {
        console.log(`${car} -> Mileage: ${values.mileage} kms, Fuel in the tank: ${values.fuel} lt.`);

    }

    function drive(cars, car, distance, fuel) {
        let restFuel = cars[car].fuel - fuel;
        if (restFuel <= 0) {
            console.log('Not enough fuel to make that ride');
        } else {
            cars[car].mileage += distance;
            cars[car].fuel = restFuel;
            console.log(`${car} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`);
        }

        if (cars[car].mileage >= 100000) {
            console.log(`Time to sell the ${car}!`);
            delete cars[car]
        }
    }

    function refuel(cars, car, fuel, maximumFuelPerTank) {
        cars[car].fuel += fuel;
        if (cars[car].fuel > maximumFuelPerTank) {
            fuel -= cars[car].fuel - maximumFuelPerTank
            cars[car].fuel = maximumFuelPerTank;


        }
        console.log(`${car} refueled with ${fuel} liters`);
    }

    function revert(cars, car, kilometers, minimumMileage) {
        cars[car].mileage -= kilometers;
        if (cars[car].mileage < minimumMileage) {
            cars[car].mileage = minimumMileage;
        } else {
            console.log(`${car} mileage decreased by ${kilometers} kilometers`);
        }
    }


}
//---test---//
needforSpeedIII([
    '3',
    'Audi A6|38000|62',
    'Mercedes CLS|11000|35',
    'Volkswagen Passat CC|45678|5',
    'Drive : Audi A6 : 543 : 47',
    'Drive : Mercedes CLS : 94 : 11',
    'Drive : Volkswagen Passat CC : 69 : 8',
    'Refuel : Audi A6 : 50',
    'Revert : Mercedes CLS : 500',
    'Revert : Audi A6 : 30000',
    'Stop'
]);
/*---result---
Audi A6 driven for 543 kilometers. 47 liters of fuel consumed.
Mercedes CLS driven for 94 kilometers. 11 liters of fuel consumed.
Not enough fuel to make that ride
Audi A6 refueled with 50 liters
Mercedes CLS mileage decreased by 500 kilometers
Audi A6 -> Mileage: 10000 kms, Fuel in the tank: 65 lt.
Mercedes CLS -> Mileage: 10594 kms, Fuel in the tank: 24 lt.
Volkswagen Passat CC -> Mileage: 45678 kms, Fuel in the tank: 5 lt.
 */
console.log('--------');
//---test---//
needforSpeedIII([
    '4',
    'Lamborghini Veneno|11111|74',
    'Bugatti Veyron|12345|67',
    'Koenigsegg CCXR|67890|12',
    'Aston Martin Valkryie|99900|50',
    'Drive : Koenigsegg CCXR : 382 : 82',
    'Drive : Aston Martin Valkryie : 99 : 23',
    'Drive : Aston Martin Valkryie : 2 : 1',
    'Refuel : Lamborghini Veneno : 40',
    'Revert : Bugatti Veyron : 2000',
    'Stop'
]);
/*---result---
Not enough fuel to make that ride
Aston Martin Valkryie driven for 99 kilometers. 23 liters of fuel consumed.
Aston Martin Valkryie driven for 2 kilometers. 1 liters of fuel consumed.
Time to sell the Aston Martin Valkryie!
Lamborghini Veneno refueled with 1 liters
Bugatti Veyron mileage decreased by 2000 kilometers
Lamborghini Veneno -> Mileage: 11111 kms, Fuel in the tank: 75 lt.
Bugatti Veyron -> Mileage: 10345 kms, Fuel in the tank: 67 lt.
Koenigsegg CCXR -> Mileage: 67890 kms, Fuel in the tank: 12 lt.
*/