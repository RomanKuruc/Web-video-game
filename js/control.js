document.getElementById("control-back").addEventListener(
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
        document.getElementById("control-back").hidden = true;
        document.getElementById("control-canvas").hidden = true;
      });
    },
    false
  );

  const canvas4 = document.querySelector("#control-canvas");
  var credits = canvas4.getContext("2d");

  credits.font = "20px Comic Sans MS";
  credits.fillStyle = "white";
  credits.fillRect(0, 0, canvas4.height, canvas4.width);
  credits.fillStyle = "black";
  credits.fillText("CONTROLING OF THE SNAKE:", 50, 120);
  credits.font = "15px Comic Sans MS";
  credits.fillStyle = "black";
  credits.fillText("UP:     Arrow UP/W", 50, 150);
  credits.fillText("DOWN:       Arrow DOWN/S", 50, 180);
  credits.fillText("LEFT:       Arrow LEFT/A", 50, 210);
  credits.fillText("RIGHT:      Arrow RIGHT/D", 50, 240);
  credits.fillText("Restart of the game:        Any key", 50, 270);

  credits.font = "30px Comic Sans MS";
  credits.fillStyle = "black";
  credits.fillText("CONTROL", 180, 70);

  credits.font = "20px Comic Sans MS";
  credits.fillStyle = "black";
  credits.fillText("WHAT'S THE MAIN GOAL OF THE GAME?", 50, 320);
  credits.font = "15px Comic Sans MS";
  credits.fillStyle = "black";
  credits.fillText(
    "Your main objective of the game is to get as much score",
    50,
    340
  );
  credits.fillText(
    "as you can before the timer runs out. You gain your score",
    50,
    360
  );
  credits.fillText(
    "by eating the red thingy on the screen, meanwhile trying",
    50,
    380
  );
  credits.fillText("not to 'eat' your body. :)", 50, 400);

  credits.font = "10px Comic Sans MS";
  credits.fillStyle = "black";
  credits.fillText("created by Roman Kuruc", 385, 495);