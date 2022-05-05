  const GameOver = document.querySelector("#GameOverCanvas");
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


  const GameOverMed = document.querySelector("#GameOverCanvasMed");
  var credits = GameOverMed.getContext("2d");

  credits.font = "40px Comic Sans MS";
  credits.fillStyle = "white";
  credits.fillRect(0, 0, GameOverMed.height, GameOverMed.width);
  credits.fillStyle = "black";
  credits.fillText(
    "☠️ GAME OVER ☠️",
    60,
    250
  );

  const GameOverHard = document.querySelector("#GameOverCanvasHard");
  var credits = GameOverHard.getContext("2d");

  credits.font = "40px Comic Sans MS";
  credits.fillStyle = "white";
  credits.fillRect(0, 0, GameOverHard.height, GameOverHard.width);
  credits.fillStyle = "black";
  credits.fillText(
    "☠️ GAME OVER ☠️",
    60,
    250
  );