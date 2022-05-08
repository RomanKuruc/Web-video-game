document.addEventListener("keydown", keyPushHard);
/* FUNCTION FOR CONTROLING */
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
