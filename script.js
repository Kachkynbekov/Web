var mySong = document.getElementById("mySong");
var icon = document.getElementById("icon");
icon.onclick = function () {
    icon.onclick = function () {
        if (mySong.paused) {
            mySong.play();
            icon.src = "images/pause.jpg"
        } else {
            mySong.pause();
            icon.src = "images/click.jpg"
        }
    }
}
