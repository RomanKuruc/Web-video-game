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


document.addEventListener("keydown", keyPushMedium);
const canvasMedium = document.querySelector("#canvas-medium");
const titleMedium = document.querySelector("#scoreMedium");
const med = canvasMedium.getContext("2d");

/* GAME */
let gameIsRunningMedium = true;
const titleSizeMedium = 25;
const titlecountXMedium = canvasMedium.width / titleSizeMedium;
const titlecountYMedium = canvasMedium.height / titleSizeMedium;
const fpsMedium = 20;
let currentMediumScore = 0
let scoreMedium = 0;

/* PLAYER */
let snakeSpeedMedium = titleSizeMedium;
let snakePosXMedium = 0;
let snakePosYMedium = canvasMedium.height / 2;
let velocityXMedium = 1;
let velocityYMedium = 0;

/* TAIL */
let tailMedium = [];
let snakeLenghtMedium = 1;

/* FOOD */
let foodPosXMedium = 0;
let foodPosYMedium = 0;

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
    if (
      snakePosXMedium === snakePart.x &&
      snakePosYMedium === snakePart.y
    ) {
      gameOverMedium();
    }
  });

  //tail
  tailMedium.push({ x: snakePosXMedium, y: snakePosYMedium });

  //this code will only draw me last 5 positions of my "tail"
  tailMedium = tailMedium.slice(-1 * snakeLenghtMedium);

  //food collision
  if (
    snakePosXMedium == foodPosXMedium &&
    snakePosYMedium == foodPosYMedium
  ) {
    scoreMedium++;
    snakeLenghtMedium++;
    currentMediumScore = scoreMedium * 5;
    titleMedium.textContent = currentMediumScore;
    if(currentMediumScore >= 40){
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

//this function will draw me two rectangles
function drawStuffMedium() {
  rectangleMedium(
    "rgb(137, 166, 105)",
    0,
    0,
    canvasMedium.width,
    canvasMedium.height
  );

  //this function draws me grid on canvas
  gridMedium();

  //food
  rectangleMedium(
    "#C7372F",
    foodPosXMedium,
    foodPosYMedium,
    titleSizeMedium,
    titleSizeMedium
  );

  //tail
  tailMedium.forEach((snakePart) =>
    rectangleMedium(
      "rgb(127, 0, 255)",
      snakePart.x,
      snakePart.y,
      titleSizeMedium,
      titleSizeMedium
    )
  );

  //SNAAAAAAAAAAAAAAAAKE
  rectangleMedium(
    "black",
    snakePosXMedium,
    snakePosYMedium,
    titleSizeMedium,
    titleSizeMedium
  );
}

//DRAW RECTANGLE
function rectangleMedium(color, x, y, width, height) {
  med.fillStyle = color;
  med.fillRect(x, y, width, height);
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

/* FUNCTION FOR CONTROLING */
//controling the snake using arrows up, down, left, right
//this if statement prevents me to turn into opposite direction I am heading to. Wihout it this would lead the snake just turning into itself and losing the game
function keyPushMedium(event) {
  switch (event.key) {
    case "ArrowLeft":
      if (velocityXMedium !== 1) {
        velocityXMedium = -1;
        velocityYMedium = 0;
      }
      break;
    case "ArrowUp":
      if (velocityYMedium !== 1) {
        velocityXMedium = 0;
        velocityYMedium = -1;
      }
      break;
    case "ArrowRight":
      if (velocityXMedium !== -1) {
        velocityXMedium = 1;
        velocityYMedium = 0;
      }
      break;
    case "ArrowDown":
      if (velocityYMedium !== -1) {
        velocityXMedium = 0;
        velocityYMedium = 1;
      }
      break;
    case "A":
      if (velocityXMedium !== 1) {
        velocityXMedium = -1;
        velocityYMedium = 0;
      }
      break;
    case "W":
      if (velocityYMedium !== 1) {
        velocityXMedium = 0;
        velocityYMedium = -1;
      }
      break;
    case "D":
      if (velocityXMedium !== -1) {
        velocityXMedium = 1;
        velocityYMedium = 0;
      }
      break;
    case "S":
      if (velocityYMedium !== -1) {
        velocityXMedium = 0;
        velocityYMedium = 1;
      }
      break;
    case "a":
      if (velocityXMedium !== 1) {
        velocityXMedium = -1;
        velocityYMedium = 0;
      }
      break;
    case "w":
      if (velocityYMedium !== 1) {
        velocityXMedium = 0;
        velocityYMedium = -1;
      }
      break;
    case "d":
      if (velocityXMedium !== -1) {
        velocityXMedium = 1;
        velocityYMedium = 0;
      }
      break;
    case "s":
      if (velocityYMedium !== -1) {
        velocityXMedium = 0;
        velocityYMedium = 1;
      }
      break;
    default:
      // restart game
      if (!gameIsRunningMedium) location.reload();
      break;
  }
}

function gridMedium() {
  //this first for cycle draws me the width of the grid
  for (let i = 0; i < titlecountXMedium; i++) {
    //while this second one draws me the height of the grid
    //using canvas.height/width and dividing by i get the same grid size as my snake.
    for (let j = 0; j < titlecountYMedium; j++) {
      rectangleMedium(
        "white",
        titleSizeMedium * i,
        titleSizeMedium * j,
        titleSizeMedium - 1,
        titleSizeMedium - 1
      );
    }
  }
}

