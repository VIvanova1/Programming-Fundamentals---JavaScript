function lastKNumbersSequance(n, k) {
    let sequence = [1];
    for (let i = 1; i <= n; i++) {
        let sum = 0;
        if (k >= i) {
            for (let j = 0; j < k && sequence[j] !== undefined; j++) {
                sum += Number(sequence[j])
            }

        } else {
            for (let j = 0; j < k; j++) {
                sum += Number(sequence[k - j])
            }
        }
        sequence.push(sum)
    }
    console.log(sequence.join(' '));

}
lastKNumbersSequance(6, 3) //1 1 2 4 7 13
    //0 1 2 3 4 5
lastKNumbersSequance(8, 2)