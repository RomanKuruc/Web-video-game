document.getElementById("medium-back").addEventListener(
  "click",
  function () {
    setTimeout(function () {
      document.getElementById("canvas-medium").hidden = true;
      document.getElementById("settings").hidden = false;
      document.getElementById("difficulty-canvas").hidden = false;
      document.getElementById("easy").hidden = false;
      document.getElementById("medium").hidden = false;
      document.getElementById("hard").hidden = false;
      document.getElementById("difficulty-back").hidden = false;
      document.getElementById("scoreMedium").hidden = true;
      document.getElementById("medium-back").hidden = true;
      document.getElementById("levelOneMedium").hidden = true;
      document.getElementById("levelTwoMedium").hidden = true;
      document.getElementById("levelThreeMedium").hidden = true;
      document.getElementById("GameOverCanvas").hidden = true;
      location.reload();
    });
  },
  false
);

/* LOOP */
function gameLoopMedium() {
  if (gameIsRunningMedium) {
    drawStuffMedium();
    moveStuffMedium();
    setTimeout(gameLoopMedium, 1000 / fpsMedium);
  }
}

randomFoodMedium();
gameLoopMedium();

//function which will moves me the object
function moveStuffMedium() {
  snakePosXMedium += snakeSpeedMedium * velocityXMedium;
  snakePosYMedium += snakeSpeedMedium * velocityYMedium;

  //this if statement says that if the object hits border, it will replace it at beginning location
  //why snake size because I am checking if my whole body just got out of the border. Also it allows smoother transition
  if (snakePosXMedium > canvasMedium.width - titleSizeMedium) {
    snakePosXMedium = 0;
  }
  if (snakePosXMedium < 0) {
    snakePosXMedium = canvasMedium.width;
  }
  if (snakePosYMedium > canvasMedium.height - titleSizeMedium) {
    snakePosYMedium = 0;
  }
  if (snakePosYMedium < 0) {
    snakePosYMedium = canvasMedium.height;
  }

  //body collision
  tailMedium.forEach((snakePart) => {
    if (snakePosXMedium === snakePart.x && snakePosYMedium === snakePart.y) {
      gameOverMedium();
    }
  });

  //tail
  tailMedium.push({ x: snakePosXMedium, y: snakePosYMedium });

  //this code will only draw me last 5 positions of my "tail"
  tailMedium = tailMedium.slice(-1 * snakeLenghtMedium);

  //food collision
  if (snakePosXMedium == foodPosXMedium && snakePosYMedium == foodPosYMedium) {
    scoreMedium++;
    snakeLenghtMedium++;
    currentMediumScore = scoreMedium * 5;
    titleMedium.textContent = currentMediumScore;
    if (currentMediumScore >= 40) {
      document.getElementById("levelOneMedium").hidden = true;
      document.getElementById("levelTwoMedium").hidden = false;
      fps = 25;
    }
    if (currentMediumScore >= 80) {
      document.getElementById("levelOneMedium").hidden = true;
      document.getElementById("levelTwoMedium").hidden = true;
      document.getElementById("levelThreeMedium").hidden = false;
      fps = 30;
    }
    randomFoodMedium();
  }
}

//this function will randomly place "food" on map
function randomFoodMedium() {
  if (snakeLenghtMedium === titlecountXMedium * titlecountYMedium) {
    gameOverMedium();
  }

  foodPosXMedium =
    Math.floor(Math.random() * titlecountXMedium) * titleSizeMedium;
  foodPosYMedium =
    Math.floor(Math.random() * titlecountYMedium) * titleSizeMedium;

  if (
    foodPosXMedium === snakePosXMedium &&
    foodPosYMedium === snakePosYMedium
  ) {
    randomFoodMedium();
  }
  if (
    tailMedium.some(
      (snakePart) =>
        snakePart.x === foodPosXMedium && snakePart.y === foodPosYMedium
    )
  ) {
    randomFoodMedium();
  }
}

//GAME OVER
//KEYBOARD RESTARTS GAME
function gameOverMedium() {
  titleMedium.innerHTML = `<strong>YOUR SCORE IS: ${currentMediumScore} </strong>`;
  gameIsRunningMedium = false;

  //this piece of code hides gameplay canvas and shows gameover canvas
  document.getElementById("canvas-medium").hidden = true;
  document.getElementById("scoreMedium").hidden = false;
  document.getElementById("levelOneMedium").hidden = true;
  document.getElementById("levelTwoMedium").hidden = true;
  document.getElementById("levelThreeMedium").hidden = true;
  document.getElementById("GameOverCanvas").hidden = true;
  document.getElementById("levelOneHard").hidden = true;
  document.getElementById("levelTwoHard").hidden = true;
  document.getElementById("levelThreeHard").hidden = true;

  document.getElementById("GameOverCanvasMed").hidden = false;
}
