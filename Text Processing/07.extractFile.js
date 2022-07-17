function extractFile(data) {
    let files = {};
    let link = data.split('\\');

    let linkPart = link[link.length - 1];

    let linkArr = linkPart.split('.');
    let extension = linkArr.pop();

    let name = linkArr.join('.');
    files[name] = name;
    files[extension] = extension;


    console.log(`File name: ${files[name]}`);
    console.log(`File extension: ${files[extension]}`);

}
//---test 1---//
extractFile('C:\\Internal\\training-internal\\Template.pptx');
/*---result---
File name: Template
File extension: pptx
*/
console.log('------');
//---test 2---/
extractFile('C:\\Projects\\Data-Structures\\Linked.List.cs');
/*---result---
File name: LinkedList
File extension: cs
*/