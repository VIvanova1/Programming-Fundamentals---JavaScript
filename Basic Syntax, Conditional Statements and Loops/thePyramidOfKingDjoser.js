function thePyramidOfKingDjoser(base, increment) {
    let stone = 0;
    let marble = 0;
    let lapis = 0;
    let gold = 0;
    let counter = 0;
    for (let i = 1; i <= Number.MAX_SAFE_INTEGER; i++) {
        counter++;
        if (base <= 2) {
            gold = base * base * increment;
            break;
        }

        let size = base * base * increment;
        let tempStone = (base - 2) * (base - 2) * increment;
        stone += tempStone;
        let tempOutLine = size - tempStone;
        if (counter % 5 === 0) {
            lapis += tempOutLine
        } else {
            marble += tempOutLine;
        }

        base -= 2;
    }
    let totalHeight = counter * increment
    console.log(`Stone required: ${Math.ceil(stone)}`);
    console.log(`Marble required: ${Math.ceil(marble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapis)}`);
    console.log(`Gold required: ${Math.ceil(gold)}`);
    console.log(`Final pyramid height: ${Math.floor(totalHeight)}`);

}
thePyramidOfKingDjoser(2, 0.5)