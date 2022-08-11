function nxNMatrix(num) {

    let repeated = Number(num);
    let sent = String(num) + ' ';

    for (let i = 0; i < repeated; i++) {
        console.log(`${sent.repeat(repeated)}`);
    }
}
nxNMatrix(7)