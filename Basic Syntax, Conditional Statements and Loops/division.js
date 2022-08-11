function division(num) {
    let divs = 0;
    let isFlase = false;
    if (num % 10 === 0) {
        divs = 10;
    } else if (num % 7 === 0) {
        divs = 7;
    } else if (num % 6 === 0) {
        divs = 6;
    } else if (num % 3 === 0) {
        divs = 3;
    } else if (num % 2 === 0) {
        divs = 2;
    } else {
        isFlase = true
    }

    if (isFlase) {
        console.log('Not divisible');
    } else {
        console.log(`The number is divisible by ${divs}`)
    }
}
division(30);
division(15);
division(12);
division(1643);