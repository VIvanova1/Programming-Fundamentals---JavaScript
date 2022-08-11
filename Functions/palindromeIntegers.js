function palindromeIntegers(arr) {
    for (let i = 0; i < arr.length; i++) {

        let tempNum = String(arr[i]);
        let newArr = '';

        let isPalindrome = false;

        for (let j = tempNum.length - 1; j >= 0; j--) {
            newArr += tempNum[j];
        }
        if (Number(newArr) === Number(tempNum)) {
            isPalindrome = true;
        }

        console.log(isPalindrome ? 'true' : 'false');
    }

}
palindromeIntegers([32, 2, 232, 1010]);