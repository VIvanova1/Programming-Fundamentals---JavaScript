function centuriesTominutes(centuries) {
    let years = centuries * 100;
    let days = Math.floor(years * 365.2422);
    let hours = Math.floor(days * 24);
    let min = Math.floor(hours * 60);

    console.log(`${centuries} centuries = ${years} years = ${days} days = ${hours} hours = ${min} minutes`);

}
centuriesTominutes(1);
centuriesTominutes(5)