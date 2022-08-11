function vacation(count, type, day) {
    let singlePrice = 0;
    let price = singlePrice * count;
    if (type === 'Students') {
        switch (day) {
            case 'Friday':
                singlePrice = 8.45;
                break;
            case 'Saturday':
                singlePrice = 9.8;
                break;
            case 'Sunday':
                singlePrice = 10.46;
                break;
        }
        price = singlePrice * count
        if (count >= 30) {
            price *= 0.85;
        }
    } else if (type === 'Business') {
        switch (day) {
            case 'Friday':
                singlePrice = 10.9;
                break;
            case 'Saturday':
                singlePrice = 15.6;
                break;
            case 'Sunday':
                singlePrice = 16;
                break;
        }

        if (count >= 100) {
            count -= 10;
        }
        price = singlePrice * count
    } else if (type === 'Regular') {
        switch (day) {
            case 'Friday':
                singlePrice = 15;
                break;
            case 'Saturday':
                singlePrice = 20;
                break;
            case 'Sunday':
                singlePrice = 22.5;
                break;
        }
        price = singlePrice * count
        if ((count >= 10) && (count <= 20)) {
            price *= 0.95;
        }
    }
    console.log(`Total price: ${price.toFixed(2)}`);
}

vacation(30, "Students", "Sunday");
vacation(40, "Regular", "Saturday")