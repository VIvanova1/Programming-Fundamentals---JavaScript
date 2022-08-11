function passwordValidator(pass) {

    const length = pass => {
        if (pass.length > 10 || pass.length < 6) {
            return false;
        } else {
            return true
        }
    }

    const lettersAndDigits = pass => {
        let pattern = /^[a-zA-Z0-9]*$/g;
        if (pattern.test(pass)) {
            return true;
        } else {
            return false;
        }
    }

    const countDigit = pass => {
        counter = 0;
        for (const ch of pass) {
            if (!isNaN(ch)) {
                counter++;
            }
        }
        if (counter >= 2) {
            return true;
        } else {
            return false;

        }

    }


    if (length(pass) && lettersAndDigits(pass) && countDigit(pass)) {
        console.log("Password is valid");
    } else {
        if (!length(pass)) {
            console.log("Password must be between 6 and 10 characters");
        }

        if (!lettersAndDigits(pass)) {
            console.log('Password must consist only of letters and digits');
        }

        if (!countDigit(pass)) {
            console.log('Password must have at least 2 digits');
        };
    }
}

passwordValidator('logIn')