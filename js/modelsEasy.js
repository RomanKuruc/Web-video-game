//this function will draw me all of the stuff that I need
function drawStuff() {
  rectangle("rgb(137, 166, 105)", 0, 0, canvas.width, canvas.height);

  //this function draws me grid on canvas
  grid();

  //food
  rectangle("#C7372F", foodPosX, foodPosY, titleSize, titleSize);

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
  rectangle("black", snakePosX, snakePosY, titleSize, titleSize);
}

//DRAW RECTANGLE
function rectangle(color, x, y, width, height) {
  easy.fillStyle = color;
  easy.fillRect(x, y, width, height);
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
