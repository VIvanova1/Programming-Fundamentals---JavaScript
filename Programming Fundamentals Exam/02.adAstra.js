function adAstra(data) {
    let pattern = /[#|](?<itemName>[A-Za-z ]+)[#|](?<date>\d{2}[/]\d{2}[/]\d{2})[#|](?<calories>\d+)[#|]/gm;

    let totalCalories = 0;

    let result = data[0].match(pattern);
    let names = [];
    let dates = [];
    let calorie = [];

    for (const line of result) {
        let productInfo = pattern.exec(result);
        totalCalories += Number(productInfo.groups.calories);
        names.push(productInfo.groups.itemName);
        dates.push(productInfo.groups.date);
        calorie.push(productInfo.groups.calories);

    }
    let days = Math.floor(totalCalories / 2000)
    console.log(`You have food to last you for: ${days} days!`);

    for (let index = 0; index < names.length; index++) {
        console.log(`Item: ${names[index]}, Best before: ${dates[index]}, Nutrition: ${calorie[index]}`);
    }

}
//---test 1 ---//
adAstra([
    '#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|'
]);
/*---result---
You have food to last you for: 2 days!
Item: Bread, Best before: 19/03/21, Nutrition: 4000
Item: Apples, Best before: 08/10/20, Nutrition: 200
Item: Carrots, Best before: 06/08/20, Nutrition: 500
 */