function loadingBar(num) {
    let part = num / 10;

    if (num !== 100) {
        console.log(`${num}% [${'%'.repeat(part)}${'.'.repeat(10-part)}]`);
        console.log('Still loading...');
    } else {
        console.log('100% Complete!');
        console.log(`[${'%'.repeat(10)}]`);
    }
}
loadingBar(80)