//this function will draw me everything I need
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
