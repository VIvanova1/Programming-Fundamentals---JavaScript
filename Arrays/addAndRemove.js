function AddAndRemove(arr) {
    let newArr = [];

    for (let i = 0; i <= arr.length - 1; i++) {
        let command = arr[i];
        if (command === 'add') {
            newArr.push(i + 1);
        } else {
            newArr.pop();
        }
    }
    console.log(newArr.length >= 1 ? `${newArr.join(' ')}` : 'Empty');
}
AddAndRemove(['add', 'add', 'remove', 'add', 'add'])