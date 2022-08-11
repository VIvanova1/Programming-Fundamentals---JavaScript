function pointsValidation(arr) {

    if (Number.isInteger(distance([arr[0], arr[1], 0, 0]))) {
        console.log(`{${arr[0]}, ${arr[1]}} to {0, 0} is valid`);
    } else {
        console.log(`{${arr[0]}, ${arr[1]}} to {0, 0} is invalid`);
    }

    if (Number.isInteger(distance([arr[2], arr[3], 0, 0]))) {
        console.log(`{${arr[2]}, ${arr[3]}} to {0, 0} is valid`);
    } else {
        console.log(`{${arr[2]}, ${arr[3]}} to {0, 0} is invalid`);
    }

    if (Number.isInteger(distance(arr))) {
        console.log(`{${arr[0]}, ${arr[1]}} to {${arr[2]}, ${arr[3]}} is valid`);
    } else {
        console.log(`{${arr[0]}, ${arr[1]}} to {${arr[2]}, ${arr[3]}} is invalid`);
    }

    function distance(arr) {
        let partOne = Number(arr[2]) - Number(arr[0]);
        let partTwo = Number(arr[3]) - Number(arr[1]);
        let partThree = partOne * partOne + partTwo * partTwo;
        let formula = Math.sqrt(partThree);
        return formula;
    }
}
pointsValidation([2, 1, 1, 1]);
//                x1,y1,x2,y2