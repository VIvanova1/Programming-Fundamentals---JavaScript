function passwordReset(data) {
    let password = data.shift();

    for (const line of data) {
        if (line === 'Done') break;
        let [command, value1, value2] = line.split(' ');
        let nothingToReplace = false;

        const takingOdd = password => {
            let newPass = '';
            for (let index = 0; index < password.length; index++) {
                if (index % 2 !== 0) {
                    newPass += password[index];
                }
            }
            return newPass;
        }

        const cutting = (password, value1, value2) => {
            let partForCut = password.substring(value1, value1 + value2);
            password = password.replace(partForCut, '');
            return password;
        }

        const substitute = (password, substr, replacement) => {
            if (password.indexOf(substr) >= 0) {
                let regexp = new RegExp(substr, 'g');
                password = password.replace(regexp, replacement);
            } else {
                nothingToReplace = true;
            }
            return password;
        }

        switch (command) {
            case 'TakeOdd':
                password = takingOdd(password);
                break;
            case 'Cut':
                password = cutting(password, Number(value1), Number(value2));
                break;
            case 'Substitute':
                password = substitute(password, value1, value2)
                break;
        }


        if (nothingToReplace) {
            console.log('Nothing to replace!');
        } else {
            console.log(password)
        }

    }
    console.log(`Your password is: ${password}`);


}
//---test---//
passwordReset(["Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
    "TakeOdd",
    "Cut 15 3",
    "Substitute :: -",
    "Substitute | ^",
    "Done"
]);
/*---result---
icecream::hot::summer
icecream::hot::mer
icecream-hot-mer
Nothing to replace!
Your password is: icecream-hot-mer
*/
console.log('--------');
//---test---//
passwordReset(["up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy",
    "TakeOdd",
    "Cut 18 2",
    "Substitute ! ***",
    "Substitute ? .!.",
    "Done"
]);
/*---result---
programming!is!funny
programming!is!fun
programming***is***fun
Nothing to replace!
Your password is: programming***is***fun
*/