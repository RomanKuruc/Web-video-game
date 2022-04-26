document.getElementById("back-settings").addEventListener(
  "click",
  function () {
    setTimeout(function () {
      document.getElementById("main-menu-canvas").hidden = false;
      document.getElementById("settings").hidden = false;
      document.getElementById("control").hidden = false;
      document.getElementById("credits").hidden = false;
      document.getElementById("select-difficulty").hidden = false;
      document.getElementById("settings-canvas").hidden = true;
      document.getElementById("main-menu").hidden = true;
      document.getElementById("back-settings").hidden = true;
      document.getElementById("icon").hidden = true;
      document.getElementById("settings-canvas-menu").hidden = true;
      document.getElementById("audio").hidden = true;
    });
  },
  false
);
const canvas2 = document.querySelector("#settings-canvas");
var settings = canvas2.getContext("2d");

settings.font = "30px Comic Sans MS";
settings.fillStyle = "white";
settings.fillRect(0, 0, canvas2.height, canvas2.width);
settings.fillStyle = "black";
settings.fillText("SETTINGS", 165, 90);

settings.font = "10px Comic Sans MS";
settings.fillStyle = "black";
settings.fillText("created by Roman Kuruc", 385, 495);

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