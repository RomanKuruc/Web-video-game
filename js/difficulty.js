//BACK BUTTON
document.getElementById("difficulty-back").addEventListener(
  "click",
  function () {
    setTimeout(function () {
      document.getElementById("main-menu-canvas").hidden = false;
      document.getElementById("settings").hidden = false;
      document.getElementById("control").hidden = false;
      document.getElementById("credits").hidden = false;
      document.getElementById("select-difficulty").hidden = false;
      document.getElementById("difficulty-canvas").hidden = true;
      document.getElementById("difficulty-back").hidden = true;
      document.getElementById("easy").hidden = true;
      document.getElementById("medium").hidden = true;
      document.getElementById("hard").hidden = true;
    });
  },
  false
);

//EASY BUTTON
document.getElementById("easy").addEventListener(
  "click",
  function () {
    setTimeout(function () {
      document.getElementById("canvas-easy").hidden = false;
      document.getElementById("settings").hidden = true;
      document.getElementById("difficulty-canvas").hidden = true;
      document.getElementById("easy").hidden = true;
      document.getElementById("medium").hidden = true;
      document.getElementById("hard").hidden = true;
      document.getElementById("difficulty-back").hidden = true;
      document.getElementById("easy-score").hidden = false;
      document.getElementById("easy-back").hidden = false;
      document.getElementById("levelOne").hidden = false;
    });
  },
  false
);

//MEDIUM BUTTON
document.getElementById("medium").addEventListener(
  "click",
  function () {
    setTimeout(function () {
      document.getElementById("canvas-medium").hidden = false;
      document.getElementById("settings").hidden = true;
      document.getElementById("difficulty-canvas").hidden = true;
      document.getElementById("easy").hidden = true;
      document.getElementById("medium").hidden = true;
      document.getElementById("hard").hidden = true;
      document.getElementById("difficulty-back").hidden = true;
      document.getElementById("scoreMedium").hidden = false;
      document.getElementById("medium-back").hidden = false;
      document.getElementById("levelOneMedium").hidden = false;
    });
  },
  false
);

//HARD BUTTON
document.getElementById("hard").addEventListener(
  "click",
  function () {
    setTimeout(function () {
      document.getElementById("canvas-hard").hidden = false;
      document.getElementById("settings").hidden = true;
      document.getElementById("difficulty-canvas").hidden = true;
      document.getElementById("easy").hidden = true;
      document.getElementById("medium").hidden = true;
      document.getElementById("hard").hidden = true;
      document.getElementById("difficulty-back").hidden = true;
      document.getElementById("scoreHard").hidden = false;
      document.getElementById("hard-back").hidden = false;
      document.getElementById("levelOneHard").hidden = false;
    });
  },
  false
);

const canvas3 = document.querySelector("#difficulty-canvas");
var difficulty = canvas3.getContext("2d");

difficulty.font = "30px Comic Sans MS ";
difficulty.fillStyle = "white";
difficulty.fillRect(0, 0, canvas3.height, canvas3.width);
difficulty.fillStyle = "black";

difficulty.font = "30 px Comic Sans MS";
difficulty.fillText("SELECT DIFFICULTY", 90, 100);

difficulty.font = "10px Comic Sans MS";
difficulty.fillStyle = "black";
difficulty.fillText("created by Roman Kuruc", 385, 495);