function DayOfWeek(numOfDay) {
    // let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    // let res = ' ';
    // if (numOfDay < 1 || numOfDay > 7) {
    //     res = 'Invalid day!'
    // } else {
    //     res = days[numOfDay - 1]
    // }


    console.log(numOfDay < 1 || numOfDay > 7 ? 'Invalid day!' : ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'][numOfDay - 1]);
}
DayOfWeek(3);
DayOfWeek(6);
DayOfWeek(11);