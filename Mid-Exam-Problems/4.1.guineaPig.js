function guineaPig(arr) {

    let food = Number(arr.shift()) * 1000;
    let hay = Number(arr.shift()) * 1000;
    let cover = Number(arr.shift()) * 1000;;
    let weightPig = Number(arr.shift()) * 1000;

    let isOver = false;

    for (let i = 1; i <= 30; i++) {
        food -= 300;

        if (i % 2 === 0) {
            let tempHay = food * 0.05;
            hay -= tempHay;
        }
        if (i % 3 === 0) {
            cover -= weightPig / 3;
        }

        if (food <= 0 || hay <= 0 || cover <= 0) {
            isOver = true;
            break;
        }
    }
    if (isOver) {
        console.log("Merry must go to the pet store!");
    } else {
        console.log(`Everything is fine! Puppy is happy! Food: ${(food/1000).toFixed(2)}, Hay: ${(hay/1000).toFixed(2)}, Cover: ${(cover/1000).toFixed(2)}.
        `);
    }

}
guineaPig(["10",
    "5",
    "5.2",
    "1"
]);
guineaPig(["1",
    "1.5",
    "3",
    "1.5"
]);
guineaPig(["9",
    "5",
    "5.2",
    "1"
]);