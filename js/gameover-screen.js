
  const GameOver = document.querySelector("#canvas-easy");
  var credits = GameOver.getContext("2d");

  credits.font = "40px Comic Sans MS";
  credits.fillStyle = "white";
  credits.fillRect(0, 0, GameOver.height, GameOver.width);
  credits.fillStyle = "black";
  credits.fillText(
    "☠️ GAME OVER ☠️",
    60,
    250
  );