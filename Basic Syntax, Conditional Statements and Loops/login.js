function login(input) {
    let index = 0;
    let username = input[index];
    let counter = 0;

    while (counter < 4) {
        let tempPass = input[++index];
        let pass = tempPass.split('').reverse().join('')
        if (pass === username) {
            console.log(`User ${username} logged in.`);
            break;
        } else {
            console.log(`Incorrect password. Try again.`);
        }
        counter++;
        if (counter >= 3) {
            console.log(`User ${username} blocked!`);
            break;
        }
    }
}
//login(['Acer', 'login', 'go', 'let me in', 'recA']);
login(['sunny', 'rainy', 'cloudy', 'sunny', 'not sunny'])