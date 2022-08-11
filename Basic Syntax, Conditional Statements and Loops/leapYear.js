function leapYear(year) {
    let isLeap = false;

    if (year % 400 === 0) {
        isLeap = true;
    } else if ((year % 4 === 0) && (year % 100 !== 0)) {
        isLeap = true;
    }

    if (isLeap) {
        console.log('yes');
    } else {
        console.log('no');
    }
}
leapYear(1984);
leapYear(2003);
leapYear(4);