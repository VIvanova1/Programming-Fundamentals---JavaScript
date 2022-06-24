function employees(arr) {

    class Employee {
        constructor(employeeName, personalNum) {
            this.employeeName = employeeName;
            this.personalNum = personalNum;
        }
    };
    let employeers = [];
    for (let i = 0; i < arr.length; i++) {
        let tempEmployee = new Employee(arr[i], arr[i].length);
        employeers.push(tempEmployee)
    }
    for (const el of employeers) {
        console.log(`Name: ${el['employeeName']} -- Personal Number: ${el['personalNum']}`);
    }
}
employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]);
employees([
    'Samuel Jackson',
    'Will Smith',
    'Bruce Willis',
    'Tom Holland'
]);