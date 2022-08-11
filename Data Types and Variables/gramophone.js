function gramophone(band, album, song) {
    let songDuration = (album.length * band.length) * song.length / 2;
    let timesDuration = songDuration / 2.5;
    console.log(`The plate was rotated ${Math.ceil(timesDuration)} times.`);

}
gramophone('Black Sabbath', 'Paranoid', 'War Pigs');
gramophone('Rammstein', 'Sehnsucht', 'Engel');