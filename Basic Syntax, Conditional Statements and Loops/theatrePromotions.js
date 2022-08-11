function promotions(day, age) {
    let error = false;
    let price = 0;
    if (age < 0) {
        error = true;
    } else if (age <= 18) {
        switch (day) {
            case "Weekday":
                price = 12;
                break;
            case "Weekend":
                price = 15;
                break;
            case "Holiday":
                price = 5;
                break;
        }
    } else if (age <= 64) {
        switch (day) {
            case "Weekday":
                price = 18;
                break;
            case "Weekend":
                price = 20;
                break;
            case "Holiday":
                price = 12;
                break;
        }
    } else if (age <= 122) {
        switch (day) {
            case "Weekday":
                price = 12;
                break;
            case "Weekend":
                price = 15;
                break;
            case "Holiday":
                price = 10;
                break;
        }
    } else {
        error = true;
    }

    if (error) {
        console.log("Error!");
    } else {
        console.log(price + "$");
    }
}
promotions('Weekday', 42)