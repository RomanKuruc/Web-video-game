//by using getElementbyId we can create a back button, which will send us back to difficulty screen
document.getElementById("easy-back").addEventListener(
  "click",
  function () {
    setTimeout(function () {
      document.getElementById("canvas-easy").hidden = true;
      document.getElementById("settings").hidden = false;
      document.getElementById("difficulty-canvas").hidden = false;
      document.getElementById("easy").hidden = false;
      document.getElementById("medium").hidden = false;
      document.getElementById("hard").hidden = false;
      document.getElementById("difficulty-back").hidden = false;
      document.getElementById("easy-score").hidden = true;
      document.getElementById("easy-back").hidden = true;
      document.getElementById("levelOne").hidden = true;
      document.getElementById("levelTwo").hidden = true;
      document.getElementById("levelThree").hidden = true;
      document.getElementById("GameOverCanvas").hidden = true;
      location.reload();
    });
  },
  false
);

/* GAME LOOP */
function gameLoop() {
  if (gameIsRunning) {
    drawStuff();
    moveStuff();
    setTimeout(gameLoop, 1000 / fps);
  }
}

randomFood();
gameLoop();

//function which will moves me the object
function moveStuff() {
  snakePosX += snakeSpeed * velocityX;
  snakePosY += snakeSpeed * velocityY;

  //this if statement says that if the object hits border, it will replace it at beginning location
  //why snake size because I am checking if my whole body just got out of the border. Also it allows smoother transition
  if (snakePosX > canvas.width - titleSize) {
    snakePosX = 0;
  }
  if (snakePosX < 0) {
    snakePosX = canvas.width;
  }
  if (snakePosY > canvas.height - titleSize) {
    snakePosY = 0;
  }
  if (snakePosY < 0) {
    snakePosY = canvas.height;
  }

  //body collision
  tail.forEach((snakePart) => {
    if (snakePosX === snakePart.x && snakePosY === snakePart.y) {
      gameOver();
    }
  });

  //tail
  tail.push({ x: snakePosX, y: snakePosY });

  //this code will only draw me last 5 positions of my "tail"
  tail = tail.slice(-1 * snakeLenght);

  //food collision
  if (snakePosX == foodPosX && snakePosY == foodPosY) {
    score++;
    snakeLenght++;
    currentScore = score * 2.5;
    title.textContent = currentScore;

    if (currentScore >= 20) {
      document.getElementById("levelOne").hidden = true;
      document.getElementById("levelTwo").hidden = false;
      fps = 15;
    }
    if (currentScore >= 40) {
      document.getElementById("levelOne").hidden = true;
      document.getElementById("levelTwo").hidden = true;
      document.getElementById("levelThree").hidden = false;
      fps = 20;
    }
    randomFood();
  }
}

//this function will randomly place "food" on canvas
function randomFood() {
  if (snakeLenght === titlecountX * titlecountY) {
    gameOver();
  }

  foodPosX = Math.floor(Math.random() * titlecountX) * titleSize;
  foodPosY = Math.floor(Math.random() * titlecountY) * titleSize;

  if (foodPosX === snakePosX && foodPosY === snakePosY) {
    randomFood();
  }
  if (
    tail.some(
      (snakePart) => snakePart.x === foodPosX && snakePart.y === foodPosY
    )
  ) {
    randomFood();
  }
}

//GAME OVER
//KEYBOARD RESTARTS GAME
function gameOver() {
  title.innerHTML = `<strong>YOUR SCORE IS: ${currentScore} </strong>`;
  gameIsRunning = false;

  //this piece of code hides gameplay canvas and shows gameover canvas
  document.getElementById("levelOne").hidden = true;
  document.getElementById("levelTwo").hidden = true;
  document.getElementById("levelThree").hidden = true;
  document.getElementById("canvas-easy").hidden = true;
  document.getElementById("easy-score").hidden = false;

  document.getElementById("GameOverCanvas").hidden = false;
}
