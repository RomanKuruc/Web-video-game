//this function will draw me all of the stuff I need
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
