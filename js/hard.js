document.getElementById("hard-back").addEventListener(
  "click",
  function () {
    setTimeout(function () {
      document.getElementById("canvas-hard").hidden = true;
      document.getElementById("settings").hidden = false;
      document.getElementById("difficulty-canvas").hidden = false;
      document.getElementById("easy").hidden = false;
      document.getElementById("medium").hidden = false;
      document.getElementById("hard").hidden = false;
      document.getElementById("difficulty-back").hidden = false;
      document.getElementById("scoreHard").hidden = true;
      document.getElementById("hard-back").hidden = true;
      document.getElementById("levelOneHard").hidden = true;
      document.getElementById("levelTwoHard").hidden = true;
      document.getElementById("levelThreeHard").hidden = true;
      document.getElementById("GameOverCanvas").hidden = true;
      document.getElementById("GameOverCanvasMed").hidden = true;
      location.reload();
    });
  },
  false
);

/* LOOP */
function gameLoopHard() {
  if (gameIsRunningHard) {
    drawStuffHard();
    moveStuffHard();
    setTimeout(gameLoopHard, 1000 / fpsHard);
  }
}

randomFoodHard();
gameLoopHard();

//function which will moves me the object
function moveStuffHard() {
  snakePosXHard += snakeSpeedHard * velocityXHard;
  snakePosYHard += snakeSpeedHard * velocityYHard;

  //this if statement says that if the object hits border, it will replace it at beginning location
  //why snake size because I am checking if my whole body just got out of the border. Also it allows smoother transition
  if (snakePosXHard > canvasHard.width - titleSizeHard) {
    snakePosXHard = 0;
  }
  if (snakePosXHard < 0) {
    snakePosXHard = canvasHard.width;
  }
  if (snakePosYHard > canvasHard.height - titleSizeHard) {
    snakePosYHard = 0;
  }
  if (snakePosYHard < 0) {
    snakePosYHard = canvasHard.height;
  }

  //body collision
  tailHard.forEach((snakePart) => {
    if (snakePosXHard === snakePart.x && snakePosYHard === snakePart.y) {
      gameOverHard();
    }
  });

  //tail
  tailHard.push({ x: snakePosXHard, y: snakePosYHard });

  //this code will only draw me last 5 positions of my "tail"
  tailHard = tailHard.slice(-1 * snakeLenghtHard);

  //food collision
  if (snakePosXHard == foodPosXHard && snakePosYHard == foodPosYHard) {
    scoreHard++;
    snakeLenghtHard++;
    currentHardScore = scoreHard * 10;
    titleHard.textContent = currentHardScore;

    if (currentHardScore >= 80) {
      document.getElementById("levelOneHard").hidden = true;
      document.getElementById("levelTwoHard").hidden = false;
      fps = 35;
    }
    if (currentHardScore >= 160) {
      document.getElementById("levelOneHard").hidden = true;
      document.getElementById("levelTwoHard").hidden = true;
      document.getElementById("levelThreeHard").hidden = false;
      fps = 40;
    }
    randomFoodHard();
  }
}

//this function will randomly place "food" on map
function randomFoodHard() {
  if (snakeLenghtHard === titlecountXHard * titlecountYHard) {
    gameOverHard();
  }

  foodPosXHard = Math.floor(Math.random() * titlecountXHard) * titleSizeHard;
  foodPosYHard = Math.floor(Math.random() * titlecountYHard) * titleSizeHard;

  if (foodPosXHard === snakePosXHard && foodPosYHard === snakePosYHard) {
    randomFoodHard();
  }
  if (
    tailHard.some(
      (snakePart) =>
        snakePart.x === foodPosXHard && snakePart.y === foodPosYHard
    )
  ) {
    randomFoodHard();
  }
}

//GAME OVER
//KEYBOARD RESTARTS GAME
function gameOverHard() {
  titleHard.innerHTML = `<strong>YOUR SCORE IS: ${currentHardScore} </strong>`;
  gameIsRunningHard = false;

  document.getElementById("canvas-hard").hidden = true;
  document.getElementById("scoreHard").hidden = false;
  document.getElementById("levelOneHard").hidden = true;
  document.getElementById("levelTwoHard").hidden = true;
  document.getElementById("levelThreeHard").hidden = true;
  document.getElementById("GameOverCanvas").hidden = true;

  document.getElementById("GameOverCanvasHard").hidden = false;
}
