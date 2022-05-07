var mySong = document.getElementById("mySong");
var icon = document.getElementById("icon");

icon.onclick = function () {
  if (mySong.paused) {
    mySong.play();
    icon.src = "../pictures, audio/sound-on.png";
  } else {
    mySong.pause();
    icon.src = "../pictures, audio/sound-off.png";
  }
};

function setHalfVolume() {
  var myAudio = document.getElementById("mySong");
  myAudio.volume = 0.05;
}
