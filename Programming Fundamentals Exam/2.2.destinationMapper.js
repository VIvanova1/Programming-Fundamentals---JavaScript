function destinationMapper(data) {
    let pattern = /([=\/])(?<destination>[A-Z][A-Za-z]{2,})\1/g;
    let destinationsMatch = data.matchAll(pattern);
    let destinations = [];
    let poinst = 0;
    for (const element of destinationsMatch) {
        destinations.push(element.groups.destination);
        poinst += element.groups.destination.length;
    }
    console.log(`Destinations: ${destinations.join(', ')}`);
    console.log(`Travel Points: ${poinst}`);

}
//---test---//
destinationMapper("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=");
/*---result---
Destinations: Hawai, Cyprus
Travel Points: 11
 */