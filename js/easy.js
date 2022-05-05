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
    });
  },
  false
);

document.addEventListener("keydown", keyPush);
const canvas = document.querySelector("#canvas-easy");
const title = document.querySelector("#easy-score");
const easy = canvas.getContext("2d");

/*
    GAME
  */
let gameIsRunning = true;
const titleSize = 25;
const titlecountX = canvas.width / titleSize;
const titlecountY = canvas.height / titleSize;
let score = 0;
let currentScore = 0;
let fps = 10;

/*
    PLAYER
  */
let snakeSpeed = titleSize;
let snakePosX = 0;
let snakePosY = canvas.height / 2;
let velocityX = 1;
let velocityY = 0;

/*
    TAIL
  */
let tail = [];
let snakeLenght = 1;

/*
    FOOD
  */
let foodPosX = 0;
let foodPosY = 0;

/*
    LOOP
  */
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
    if (
      snakePosX === snakePart.x &&
      snakePosY === snakePart.y
    ) {
      gameOver();
    }
  });

  //tail
  tail.push({ x: snakePosX, y: snakePosY });

  //this code will only draw me last 5 positions of my "tail"
  tail = tail.slice(-1 * snakeLenght);

  //food collision
  if (
    snakePosX == foodPosX &&
    snakePosY == foodPosY
  ) {
    score++;
    snakeLenght++;
    currentScore = score * 2.5
    title.textContent = currentScore;

    if(currentScore >= 20){
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

//this function will draw me two rectangles
function drawStuff() {
  rectangle(
    "rgb(137, 166, 105)",
    0,
    0,
    canvas.width,
    canvas.height
  );

  //this function draws me grid on canvas
  grid();

  //food
  rectangle(
    "#C7372F",
    foodPosX,
    foodPosY,
    titleSize,
    titleSize
  );

  //tail
  tail.forEach((snakePart) =>
    rectangle(
      "rgb(127, 0, 255)",
      snakePart.x,
      snakePart.y,
      titleSize,
      titleSize
    )
  );

  //SNAAAAAAAAAAAAAAAAKE
  rectangle(
    "black",
    snakePosX,
    snakePosY,
    titleSize,
    titleSize
  );
}

//DRAW RECTANGLE
function rectangle(color, x, y, width, height) {
  easy.fillStyle = color;
  easy.fillRect(x, y, width, height);
}

//this function will randomly place "food" on map
function randomFood() {
  if (snakeLenght === titlecountX * titlecountY) {
    gameOver();
  }

  foodPosX =
    Math.floor(Math.random() * titlecountX) * titleSize;
  foodPosY =
    Math.floor(Math.random() * titlecountY) * titleSize;

  if (
    foodPosX === snakePosX &&
    foodPosY === snakePosY
  ) {
    randomFood();
  }
  if (
    tail.some(
      (snakePart) =>
        snakePart.x === foodPosX && snakePart.y === foodPosY
    )
  ) {
    randomFood();
  }
}

//GAME OVER
//KEYBOARD RESTARTS GAME
function gameOver() {
  title.innerHTML = `<strong> SCORE: ${currentScore} </strong>`;
  gameIsRunning = false;
}


/*
    FUNCTION FOR CONTROLING
  */
//controling the snake using arrows up, down, left, right
//this if statement prevents me to turn into opposite direction I am heading to. Wihout it this would lead the snake just turning into itself and losing the game
function keyPush(event) {
  switch (event.key) {
    case "ArrowLeft":
      if (velocityX !== 1) {
        velocityX = -1;
        velocityY = 0;
      }
      break;
    case "ArrowUp":
      if (velocityY !== 1) {
        velocityX = 0;
        velocityY = -1;
      }
      break;
    case "ArrowRight":
      if (velocityX !== -1) {
        velocityX = 1;
        velocityY = 0;
      }
      break;
    case "ArrowDown":
      if (velocityY !== -1) {
        velocityX = 0;
        velocityY = 1;
      }
      break;
    case "A":
      if (velocityX !== 1) {
        velocityX = -1;
        velocityY = 0;
      }
      break;
    case "W":
      if (velocityY !== 1) {
        velocityX = 0;
        velocityY = -1;
      }
      break;
    case "D":
      if (velocityX !== -1) {
        velocityX = 1;
        velocityY = 0;
      }
      break;
    case "S":
      if (velocityY !== -1) {
        velocityX = 0;
        velocityY = 1;
      }
      break;
    case "a":
      if (velocityX !== 1) {
        velocityX = -1;
        velocityY = 0;
      }
      break;
    case "w":
      if (velocityY !== 1) {
        velocityX = 0;
        velocityY = -1;
      }
      break;
    case "d":
      if (velocityX !== -1) {
        velocityX = 1;
        velocityY = 0;
      }
      break;
    case "s":
      if (velocityY !== -1) {
        velocityX = 0;
        velocityY = 1;
      }
      break;
    default:
      // restart game
      if (!gameIsRunning) location.reload();
      break;
  }
}

function grid() {
  //this first for cycle draws me the width of the grid
  for (let i = 0; i < titlecountX; i++) {
    //while this second one draws me the height of the grid
    //using canvas.height/width and dividing by i get the same grid size as my snake.
    for (let j = 0; j < titlecountY; j++) {
      rectangle(
        "white",
        titleSize * i,
        titleSize * j,
        titleSize - 1,
        titleSize - 1
      );
    }
  }
}
