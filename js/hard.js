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
    });
  },
  false
);

document.addEventListener("keydown", keyPushHard);
const canvasHard = document.querySelector("#canvas-hard");
        const titleHard = document.querySelector("#scoreHard");
        const hard = canvasHard.getContext("2d");

        /*
           GAME
         */
        let gameIsRunningHard = true;
        const titleSizeHard = 25;
        const titlecountXHard = canvasHard.width / titleSizeHard;
        const titlecountYHard = canvasHard.height / titleSizeHard;
        const fpsHard = 30;
        let currentHardScore = 0;
        let scoreHard = 0;

        /*
           PLAYER
         */
        let snakeSpeedHard = titleSizeHard;
        let snakePosXHard = 0;
        let snakePosYHard = canvasHard.height / 2;
        let velocityXHard = 1;
        let velocityYHard = 0;

        /*
           TAIL
         */
        let tailHard = [];
        let snakeLenghtHard = 1;

        /*
           FOOD
         */
        let foodPosXHard = 0;
        let foodPosYHard = 0;

        /*
           LOOP
         */
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
            if (
              snakePosXHard === snakePart.x &&
              snakePosYHard === snakePart.y
            ) {
              gameOverHard();
            }
          });

          //tail
          tailHard.push({ x: snakePosXHard, y: snakePosYHard });

          //this code will only draw me last 5 positions of my "tail"
          tailHard = tailHard.slice(-1 * snakeLenghtHard);

          //food collision
          if (
            snakePosXHard == foodPosXHard &&
            snakePosYHard == foodPosYHard
          ) {
            scoreHard++;
            snakeLenghtHard++;
            currentHardScore = scoreHard * 10;
            titleHard.textContent = currentHardScore;

            if(currentHardScore >= 80){
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

        //this function will draw me two rectangles
        function drawStuffHard() {
          rectangleHard(
            "rgb(137, 166, 105)",
            0,
            0,
            canvasHard.width,
            canvasHard.height
          );

          //this function draws me grid on canvas
          gridHard();

          //food
          rectangleHard(
            "#C7372F",
            foodPosXHard,
            foodPosYHard,
            titleSizeHard,
            titleSizeHard
          );

          //tail
          tailHard.forEach((snakePart) =>
            rectangleHard(
              "rgb(127, 0, 255)",
              snakePart.x,
              snakePart.y,
              titleSizeHard,
              titleSizeHard
            )
          );

          //SNAAAAAAAAAAAAAAAAKE
          rectangleHard(
            "black",
            snakePosXHard,
            snakePosYHard,
            titleSizeHard,
            titleSizeHard
          );
        }

        //DRAW RECTANGLE
        function rectangleHard(color, x, y, width, height) {
          hard.fillStyle = color;
          hard.fillRect(x, y, width, height);
        }

        //this function will randomly place "food" on map
        function randomFoodHard() {
          if (snakeLenghtHard === titlecountXHard * titlecountYHard) {
            gameOverHard();
          }

          foodPosXHard =
            Math.floor(Math.random() * titlecountXHard) * titleSizeHard;
          foodPosYHard =
            Math.floor(Math.random() * titlecountYHard) * titleSizeHard;

          if (
            foodPosXHard === snakePosXHard &&
            foodPosYHard === snakePosYHard
          ) {
            randomFoodHard();
          }
          if (
            tailHard.some(
              (snakePart) =>
                snakePart.x === foodPosXHard && snakePart.y === foodPosYHard
            )
          ) {
            resetFood();
          }
        }

        //GAME OVER
        //KEYBOARD RESTARTS GAME
        function gameOverHard() {
          titleHard.innerHTML = `<strong> ${currentHardScore} </strong>`;
          gameIsRunningHard = false;
        }

        /*
            FUNCTION FOR CONTROLING
          */
        //controling the snake using arrows up, down, left, right
        //this if statement prevents me to turn into opposite direction I am heading to. Wihout it this would lead the snake just turning into itself and losing the game
        function keyPushHard(event) {
          switch (event.key) {
            case "ArrowLeft":
              if (velocityXHard !== 1) {
                velocityXHard = -1;
                velocityYHard = 0;
              }
              break;
            case "ArrowUp":
              if (velocityYHard !== 1) {
                velocityXHard = 0;
                velocityYHard = -1;
              }
              break;
            case "ArrowRight":
              if (velocityXHard !== -1) {
                velocityXHard = 1;
                velocityYHard = 0;
              }
              break;
            case "ArrowDown":
              if (velocityYHard !== -1) {
                velocityXHard = 0;
                velocityYHard = 1;
              }
              break;
            case "A":
              if (velocityXHard !== 1) {
                velocityXHard = -1;
                velocityYHard = 0;
              }
              break;
            case "W":
              if (velocityYHard !== 1) {
                velocityXHard = 0;
                velocityYHard = -1;
              }
              break;
            case "D":
              if (velocityXHard !== -1) {
                velocityXHard = 1;
                velocityYHard = 0;
              }
              break;
            case "S":
              if (velocityYHard !== -1) {
                velocityXHard = 0;
                velocityYHard = 1;
              }
              break;
            case "a":
              if (velocityXHard !== 1) {
                velocityXHard = -1;
                velocityYHard = 0;
              }
              break;
            case "w":
              if (velocityYHard !== 1) {
                velocityXHard = 0;
                velocityYHard = -1;
              }
              break;
            case "d":
              if (velocityXHard !== -1) {
                velocityXHard = 1;
                velocityYHard = 0;
              }
              break;
            case "s":
              if (velocityYHard !== -1) {
                velocityXHard = 0;
                velocityYHard = 1;
              }
              break;
            default:
              // restart game
              if (!gameIsRunningHard) location.reload();
              break;
          }
        }

        function gridHard() {
          //this first for cycle draws me the width of the grid
          for (let i = 0; i < titlecountXHard; i++) {
            //while this second one draws me the height of the grid
            //using canvas.height/width and dividing by i get the same grid size as my snake.
            for (let j = 0; j < titlecountYHard; j++) {
              rectangleHard(
                "white",
                titleSizeHard * i,
                titleSizeHard * j,
                titleSizeHard - 1,
                titleSizeHard - 1
              );
            }
          }
        }

        

