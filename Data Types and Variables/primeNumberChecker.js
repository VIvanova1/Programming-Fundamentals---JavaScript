function primeNumber(number) {
    let isPrime = true;

    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            isPrime = false;
            break;
        }
    }
    console.log(`${isPrime ? 'true': 'false'}`);
}
primeNumber(7);