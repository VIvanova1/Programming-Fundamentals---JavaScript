function numbers(input) {
    let integers = input.split(' ');

    let averNum = average(integers);

    let bigerrArr = [];
    for (const elements of integers) {
        if (elements > averNum) {
            bigerrArr.unshift(elements)
        }
    }

    bigerrArr.sort(function(a, b) {
        return b - a;
    })

    if (bigerrArr.length > 5) {
        bigerrArr.splice(5)
    }


    if (bigerrArr.length <= 0) {
        console.log('No');
    } else {
        console.log(bigerrArr.join(' '));
    }


    function average(integers) {
        let averageNum = 0;
        let count = integers.length;
        for (const el of integers) {
            averageNum += Number(el);
        }
        averageNum /= count;
        return (averageNum)
    }

}
numbers('4 5');
numbers('10 20 30 40 50');
numbers('5 2 3 4 -10 30 40 50 20 50 60 60 51');
numbers('-1 -2 -3 -4 -5 -6');