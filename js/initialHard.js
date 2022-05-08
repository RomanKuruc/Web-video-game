const canvasHard = document.querySelector("#canvas-hard");
const titleHard = document.querySelector("#scoreHard");
const hard = canvasHard.getContext("2d");

/* GAME */
let gameIsRunningHard = true;
const titleSizeHard = 25;
const titlecountXHard = canvasHard.width / titleSizeHard;
const titlecountYHard = canvasHard.height / titleSizeHard;
const fpsHard = 30;
let currentHardScore = 0;
let scoreHard = 0;

/* PLAYER */
let snakeSpeedHard = titleSizeHard;
let snakePosXHard = 0;
let snakePosYHard = canvasHard.height / 2;
let velocityXHard = 1;
let velocityYHard = 0;

/* TAIL */
let tailHard = [];
let snakeLenghtHard = 1;

/* FOOD */
let foodPosXHard = 0;
let foodPosYHard = 0;
