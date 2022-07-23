function matchDates(data) {
    let pattern = /\b(?<day>\d{2})(?<sep>[-.\/])(?<month>[A-Z][a-z]{2})\2(?<year>\d{4})\b/gm;
    let days = data[0].split(',');

    let calendar = [];
    let validDate = pattern.exec(days);
    while (validDate !== null) {
        let day = validDate.groups['day'];
        let month = validDate.groups['month'];
        let year = validDate.groups['year'];
        console.log(`Day: ${day}, Month: ${month}, Year: ${year}`);
        validDate = pattern.exec(days);
    }
}
//---test 1 ---//
matchDates(['13/Jul/1928, 10-Nov-1934, , 01/Jan-1951,f 25.Dec.1937 23/09/1973, 1/Feb/2016']);
/*---result---
Day: 13, Month: Jul, Year: 1928
Day: 10, Month: Nov, Year: 1934
Day: 25, Month: Dec, Year: 1937
 */