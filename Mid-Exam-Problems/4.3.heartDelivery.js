function heartDelivery(arr) {
    let neighborhood = arr.shift().split('@').map(Number);
    let housesIndex = neighborhood.length - 1;
    let tempHouse = 0;
    let index = 0;
    let command = arr[index];
    while (command !== 'Love!') {
        let [jump, length] = arr[index].split(' ');

        tempHouse += length;
        if (tempHouse > housesIndex) {
            tempHouse %= housesIndex;
        }
        neighborhood[tempHouse] -= 2;
        if (neighborhood[tempHouse] <= 0) {

        }
    }


}
heartDelivery(["10@10@10@2",
    "Jump 1",
    "Jump 2",
    "Love!"
]);

heartDelivery(["2@4@2",
    "Jump 2",
    "Jump 2",
    "Jump 8",
    "Jump 3",
    "Jump 1",
    "Love!"
]);