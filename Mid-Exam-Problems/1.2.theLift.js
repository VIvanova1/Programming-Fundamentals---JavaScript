function lift(arr) {

    let waitingPeole = Number(arr.shift());
    let liftVagons = arr.shift().split(' ').map(Number);

    const totalSpace = 4;
    const totalCabins = liftVagons.length;

    let moreSpase = false;

    let indexSeats = 0;
    let seats = Number(liftVagons[indexSeats]);

    while (indexSeats < totalCabins) {

        if (seats === totalSpace) {
            seats = Number(liftVagons[++indexSeats]);
            continue;
        }

        let freeSeats = totalSpace - seats;

        if (freeSeats > waitingPeole) {
            freeSeats = waitingPeole;
            moreSpase = true;
        }

        seats += freeSeats;
        waitingPeole -= freeSeats;

        liftVagons.splice(indexSeats, 1, seats);

        if (waitingPeole <= 0) {
            break;
        }

        seats = Number(liftVagons[++indexSeats]);
    }

    if (waitingPeole > 0) {
        console.log(`There isn't enough space! ${waitingPeole} people in a queue!`);
    } else if ((waitingPeole <= 0 && indexSeats < totalCabins - 1) || moreSpase) {
        console.log('The lift has empty spots!');
    }


    console.log(liftVagons.join(' '));


}

//lift(["8", "0 0"]);

// lift([
//     "20",
//     "0 2 0"
// ]);

lift([
    "15",
    "0 0 0 0"
]);