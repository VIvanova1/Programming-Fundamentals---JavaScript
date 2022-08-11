function bitcoinMining(input) {
    let index = 0;

    let isDone = false;
    let theDay;
    let countForFirtst = 0;
    let days = 0;
    let totalMoney = 0;
    const oneBitCoin = 11949.16;
    let command = (input[index]);


    while (command > 0) {
        let dayGoldGain = Number(command);
        days++;
        if (days % 3 === 0) {
            dayGoldGain *= 0.7;
        }
        let money = dayGoldGain * 67.51;
        totalMoney += money;


        if (totalMoney / oneBitCoin >= 1) {
            countForFirtst++;

            if (countForFirtst === 1) {
                isDone = true;
                theDay = days;
            }
        }

        command = String(input[++index]);
        L = command.length
    }
    let countBitCoins = totalMoney / oneBitCoin;
    console.log(`Bought bitcoins: ${Math.floor(countBitCoins)}`);
    if (isDone) {
        console.log(`Day of the first purchased bitcoin: ${theDay}`);
    }
    let leftMoney = totalMoney % oneBitCoin;
    console.log(`Left money: ${leftMoney.toFixed(2)} lv.`);
}
// bitcoinMining([3124.15, 504.212, 2511.124]);
bitcoinMining([100, 200, 300])