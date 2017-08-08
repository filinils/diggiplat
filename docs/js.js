(function () {
    console.log("hej");
    var timings = [200, 400, 600, 800, 1000, 1200, 1400];
    var lyric = ['Annie', '', 'Annie', '', 'Annie', '', 'Löööv'];
    for (var i = 0; i < timings.length; i++) {
        (function (index) {
            setTimeout(writeLyric, timings[index], index);
        })(i)
    }

    function writeLyric(index) {
        console.log(lyric[index]);
        document.getElementById('first').innerText = lyric[index];
    }
})();