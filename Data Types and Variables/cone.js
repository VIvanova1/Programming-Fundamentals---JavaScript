function cone(radius, height) {
    let volume = radius * radius * height * Math.PI / 3;
    let forming = Math.sqrt(radius * radius + height * height)
    let area = (Math.PI * radius * radius) + (Math.PI * radius * forming)
    console.log(`volume = ${volume.toFixed(4)}`);
    console.log(`area = ${area.toFixed(4)}`);

}
cone(3.3, 7.8)