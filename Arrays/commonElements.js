function CommonElements(arr1, arr2) {
    //     for (let i = 0; i < arr1.length - 1; i++) {
    //         for (let j = 0; j < arr2.length - 1; j++) {
    //             if (arr1[i] == arr2[j]) {
    //                 console.log(arr1[i]);
    //             }
    //         }
    //     }
    for (let i = 0; i < arr1.length - 1; i++) {
        if (arr2.includes(arr1[i])) {
            console.log(arr1[i]);
        }
    }


}
CommonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'], ['Petar', 10, 'hey', 4, 'hello', '2']);
console.log('--------');
CommonElements(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '], ['s', 'o', 'c', 'i', 'a', 'l']);