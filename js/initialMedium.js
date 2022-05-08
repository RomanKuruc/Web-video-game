const canvasMedium = document.querySelector("#canvas-medium");
const titleMedium = document.querySelector("#scoreMedium");
const med = canvasMedium.getContext("2d");

/* GAME */
let gameIsRunningMedium = true;
const titleSizeMedium = 25;
const titlecountXMedium = canvasMedium.width / titleSizeMedium;
const titlecountYMedium = canvasMedium.height / titleSizeMedium;
const fpsMedium = 20;
let currentMediumScore = 0;
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
