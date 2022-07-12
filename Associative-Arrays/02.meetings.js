function meetings(data) {
    let schedule = {};
    for (const element of data) {
        let [day, name] = element.split(' ');

        if (schedule.hasOwnProperty(day)) {
            console.log(`Conflict on ${day}!`);
        } else {
            schedule[day] = name;
            console.log(`Scheduled for ${day}`);
        }
    }
    for (const [key, value] of Object.entries(schedule)) {
        console.log(`${key} -> ${value}`);
    }

}
//--test==//
meetings(['Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim'
]);
//--result--//
/* Scheduled for Monday
Scheduled for Wednesday
Conflict on Monday!
Scheduled for Friday
Monday -> Peter
Wednesday -> Bill
Friday -> Tim*/