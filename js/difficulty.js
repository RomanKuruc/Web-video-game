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
