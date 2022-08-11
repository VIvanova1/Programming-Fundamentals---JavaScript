function chessB(n) {
    console.log(`<div class="chessboard">`);
    let j = 0;
    for (let i = 1; i <= n; i++) {
        console.log(`  <div>`);
        if (i % 2 !== 0) {
            while (j <= n * n) {
                if (j % 2 === 0) {
                    console.log(`    <span class="black"></span>`);
                } else {
                    console.log(`    <span class="white"></span>`);
                }
                j++;
                if (j % n === 0) {
                    break;
                }
            }
        } else {
            while (j <= n * n) {
                if (j % 2 === 0) {
                    console.log(`    <span class="white"></span>`);
                } else {
                    console.log(`    <span class="black"></span>`);
                }
                j++;
                if (j % n === 0) {
                    break;
                }
            }
        }
        console.log(`  </div>`);
    }
    console.log(`</div>`);
}
chessB(6)