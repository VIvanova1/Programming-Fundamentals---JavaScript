function requiredReading(pagesBook, pagesPerHour, days) {
    let hours = pagesBook / pagesPerHour;
    let hoursDay = hours / days;
    console.log(hoursDay);

}
requiredReading(212, 20, 2);
requiredReading(432, 15, 4);