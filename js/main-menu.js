// DIFFICULTY
document.getElementById("select-difficulty").addEventListener(
    "click",

    function () {
      document.getElementById("difficulty-canvas").hidden = false;
      document.getElementById("main-menu-canvas").hidden = true;
      document.getElementById("main-menu").hidden = true;
      document.getElementById("settings").hidden = true;
      document.getElementById("control").hidden = true;
      document.getElementById("credits").hidden = true;
      document.getElementById("select-difficulty").hidden = true;
      document.getElementById("difficulty-back").hidden = false;
      document.getElementById("easy").hidden = false;
      document.getElementById("medium").hidden = false;
      document.getElementById("hard").hidden = false;
    },
    false
  );

  //SETTINGS
  document.getElementById("settings").addEventListener(
    "click",

    function () {
      document.getElementById("settings-canvas").hidden = false;
      document.getElementById("main-menu-canvas").hidden = true;
      document.getElementById("main-menu").hidden = true;
      document.getElementById("settings").hidden = true;
      document.getElementById("control").hidden = true;
      document.getElementById("credits").hidden = true;
      document.getElementById("select-difficulty").hidden = true;
      document.getElementById("back-settings").hidden = false;
      document.getElementById("icon").hidden = false;
      document.getElementById("audio").hidden = false;
      document.getElementById("settings-canvas-menu").hidden = true;
    },
    false
  );

  //CONTROL
  document.getElementById("control").addEventListener(
    "click",

    function () {
      document.getElementById("control-canvas").hidden = false;
      document.getElementById("main-menu-canvas").hidden = true;
      document.getElementById("main-menu").hidden = true;
      document.getElementById("settings").hidden = true;
      document.getElementById("control").hidden = true;
      document.getElementById("credits").hidden = true;
      document.getElementById("select-difficulty").hidden = true;
      document.getElementById("control-back").hidden = false;
    },
    false
  );

  document.getElementById("credits").addEventListener(
    "click",

    function () {
      document.getElementById("credits-canvas").hidden = false;
      document.getElementById("main-menu-canvas").hidden = true;
      document.getElementById("main-menu").hidden = true;
      document.getElementById("settings").hidden = true;
      document.getElementById("control").hidden = true;
      document.getElementById("credits").hidden = true;
      document.getElementById("select-difficulty").hidden = true;
      document.getElementById("credits-back").hidden = false;
    },
    false
  );

  const canvas7 = document.querySelector("#main-menu-canvas");
  var menu = canvas7.getContext("2d");

  menu.fillStyle = "white";
  menu.fillRect(0, 0, canvas7.height, canvas7.width);

  menu.fillStyle = "black";
  menu.fillRect(150, 100, 20, 20);

  menu.fillStyle = "white";
  menu.fillRect(162, 103, 5, 5);
  menu.fillRect(162, 112, 5, 5);

  menu.fillStyle = "pink";
  menu.fillRect(170, 107, 10, 5);

  menu.fillStyle = "#C7372F";
  menu.fillRect(250, 100, 20, 20);

  menu.fillStyle = "rgb(123, 178, 87)";
  menu.fillRect(130, 100, 20, 20);
  menu.fillRect(110, 100, 20, 20);
  menu.fillRect(90, 100, 20, 20);
  menu.fillRect(70, 100, 20, 20);
  menu.fillRect(50, 100, 20, 20);
  menu.fillRect(50, 120, 20, 20);
  menu.fillRect(50, 140, 20, 20);
  menu.fillRect(50, 160, 20, 20);
  menu.fillRect(50, 180, 20, 20);
  menu.fillRect(50, 200, 20, 20);
  menu.fillRect(50, 220, 20, 20);
  menu.fillRect(50, 240, 20, 20);
  menu.fillRect(50, 260, 20, 20);
  menu.fillRect(50, 280, 20, 20);
  menu.fillRect(50, 300, 20, 20);

  menu.font = "10px Comic Sans MS";
  menu.fillStyle = "black";
  menu.fillText("created by Roman Kuruc", 385, 495);