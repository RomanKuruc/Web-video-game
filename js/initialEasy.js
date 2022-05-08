const canvas = document.querySelector("#canvas-easy");
const title = document.querySelector("#easy-score");
const easy = canvas.getContext("2d");
/* GAME */
let gameIsRunning = true;

const titleSize = 25;
const titlecountX = canvas.width / titleSize;
const titlecountY = canvas.height / titleSize;
let score = 0;
let currentScore = 0;
let fps = 10;

/* PLAYER */
let snakeSpeed = titleSize;
let snakePosX = 0;
let snakePosY = canvas.height / 2;
let velocityX = 1;
let velocityY = 0;

/* TAIL */
let tail = [];
let snakeLenght = 1;

/* FOOD */
let foodPosX = 0;
let foodPosY = 0;
