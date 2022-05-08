document.addEventListener("keydown", keyPushMedium);
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
