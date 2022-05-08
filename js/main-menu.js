//observer
class Observer {
  //I'll create an array where I store elements
  constructor() {
    this.subscriptions = [];
  }

  //I'll pass an argument called callback which push new elements into subscription array
  subscribe(callback) {
    this.subscriptions.push(callback);
  }

  //this will notify every model that somethinghas changed
  notify() {
    //I'll loop through subscription array to check if anythinghas changed
    this.subscriptions.forEach(function (value) {
      //I'll invoke the function, yes I can do it
      value();
    });
  }
}

//instance of the observer
var menuModelObserver = new Observer();

//model
class MenuModel {
  constructor(observerable) {
    this.visibleView = 1; //main menu is visible
    this.observer = observerable;
    this.observer.notify();
  }
  goToSettings() {
    this.visibleView = 2; //settigns are visible
    this.observer.notify();
  }
  goToMainMenu() {
    this.visibleView = 1; //back to main menu
    this.observer.notify();
  }
  goToCredits() {
    this.visibleView = 3; //credits are visible
    this.observer.notify();
  }
  goToControls() {
    this.visibleView = 4; //controls are visible
    this.observer.notify();
  }
  goToDifficulty() {
    this.visibleView = 5; //difficulty is visible
    this.observer.notify();
  }
}
var menuModel = new MenuModel(menuModelObserver);

//controller
//if anything has changed this will notife me in console about it
var menuController = {
  goToSettings: function () {
    menuModel.goToSettings();
    console.log("I am in settings");
  },

  goToMainMenu: function () {
    menuModel.goToMainMenu();
    console.log("I am in menu");
  },

  goToCredits: function () {
    menuModel.goToCredits();
    console.log("I am in credits");
  },

  goToControls: function () {
    menuModel.goToControls();
    console.log("I am in control");
  },

  goToDifficulty: function () {
    menuModel.goToDifficulty();
    console.log("I am in difficulty");
  },
};

//here I assign value for each render
function render() {
  if (menuModel.visibleView == 1) {
    renderMainMenu();
  } else if (menuModel.visibleView == 2) {
    renderSettings();
  } else if (menuModel.visibleView == 3) {
    renderCredits();
  } else if (menuModel.visibleView == 4) {
    renderControls();
  } else if (menuModel.visibleView == 5) {
    renderDifficulty();
  }
}

//here I call the subscribed render
menuModelObserver.subscribe(render);

//rendering main menu
function renderMainMenu() {
  document.getElementById("difficulty-menu").style.display = "none";
  document.getElementById("main-menu").style.display = "flex";
  document.getElementById("settings-menu").style.display = "none";
  document.getElementById("control-menu").style.display = "none";
  document.getElementById("credits-menu").style.display = "none";

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
}

//rendering settings
function renderSettings() {
  document.getElementById("main-menu").style.display = "none";
  document.getElementById("settings-menu").style.display = "flex";

  const canvas2 = document.querySelector("#settings-canvas");
  var settings = canvas2.getContext("2d");

  settings.font = "30px Comic Sans MS";
  settings.fillStyle = "white";
  settings.fillRect(0, 0, canvas2.height, canvas2.width);
  settings.fillStyle = "black";
  settings.fillText("SETTINGS", 165, 90);

  settings.font = "10px Comic Sans MS";
  settings.fillStyle = "black";
  settings.fillText("created by Roman Kuruc", 385, 495);

  var mySong = document.getElementById("mySong");
  var icon = document.getElementById("icon");

  icon.onclick = function () {
    if (mySong.paused) {
      mySong.play();
      icon.src = "../pictures, audio/sound-on.png";
    } else {
      mySong.pause();
      icon.src = "../pictures, audio/sound-off.png";
    }
  };
}

//rendering credits
function renderCredits() {
  document.getElementById("main-menu").style.display = "none";
  document.getElementById("credits-menu").style.display = "flex";

  const canvas5 = document.querySelector("#credits-canvas");
  var credits = canvas5.getContext("2d");

  credits.font = "15px Comic Sans MS";
  credits.fillStyle = "white";
  credits.fillRect(0, 0, canvas5.height, canvas5.width);
  credits.fillStyle = "black";
  credits.fillText(
    "this web game was created for my semestrial project",
    50,
    120
  );
  credits.fillText("LEAD OF DEVELOPMENT: Roman Kuruc", 50, 180);
  credits.fillText("DEVELOPMENT: Roman Kuruc", 50, 210);
  credits.fillText("GRAPHIC DESIGNER: Roman Kuruc", 50, 240);
  credits.fillText("LEAD PROGRAMMER: Roman Kuruc", 50, 270);
  credits.fillText("QA MANAGER: Roman Kuruc", 50, 300);
  credits.fillText("AUTHOR: Roman Kuruc", 50, 330);

  credits.font = "30px Comic Sans MS";
  credits.fillStyle = "black";
  credits.fillText("CREDITS", 180, 70);

  credits.font = "10px Comic Sans MS";
  credits.fillStyle = "black";
  credits.fillText("created by Roman Kuruc", 385, 495);
}

//rendering controls
function renderControls() {
  document.getElementById("main-menu").style.display = "none";
  document.getElementById("control-menu").style.display = "flex";

  const canvas4 = document.querySelector("#control-canvas");
  var credits = canvas4.getContext("2d");

  credits.font = "20px Comic Sans MS";
  credits.fillStyle = "white";
  credits.fillRect(0, 0, canvas4.height, canvas4.width);
  credits.fillStyle = "black";
  credits.fillText("CONTROLING OF THE SNAKE:", 50, 120);
  credits.font = "15px Comic Sans MS";
  credits.fillStyle = "black";
  credits.fillText("UP:     Arrow UP/W", 50, 150);
  credits.fillText("DOWN:       Arrow DOWN/S", 50, 180);
  credits.fillText("LEFT:       Arrow LEFT/A", 50, 210);
  credits.fillText("RIGHT:      Arrow RIGHT/D", 50, 240);
  credits.fillText("Restart of the game:        Any key", 50, 270);

  credits.font = "30px Comic Sans MS";
  credits.fillStyle = "black";
  credits.fillText("CONTROL", 180, 70);

  credits.font = "20px Comic Sans MS";
  credits.fillStyle = "black";
  credits.fillText("WHAT'S THE MAIN GOAL OF THE GAME?", 50, 320);
  credits.font = "15px Comic Sans MS";
  credits.fillStyle = "black";
  credits.fillText(
    "Your main objective of the game is to get as much score",
    50,
    340
  );
  credits.fillText(
    "as you can before the timer runs out. You gain your score",
    50,
    360
  );
  credits.fillText(
    "by eating the red thingy on the screen, meanwhile trying",
    50,
    380
  );
  credits.fillText("not to 'eat' your body. :)", 50, 400);

  credits.font = "10px Comic Sans MS";
  credits.fillStyle = "black";
  credits.fillText("created by Roman Kuruc", 385, 495);
}

//rendering difficulty
function renderDifficulty() {
  document.getElementById("difficulty-menu").style.display = "flex";
  document.getElementById("main-menu").style.display = "none";

  const canvas3 = document.querySelector("#difficulty-canvas");
  var difficulty = canvas3.getContext("2d");

  difficulty.font = "30px Comic Sans MS ";
  difficulty.fillStyle = "white";
  difficulty.fillRect(0, 0, canvas3.height, canvas3.width);
  difficulty.fillStyle = "black";

  difficulty.font = "30 px Comic Sans MS";
  difficulty.fillText("SELECT DIFFICULTY", 90, 100);

  difficulty.font = "10px Comic Sans MS";
  difficulty.fillStyle = "black";
  difficulty.fillText("created by Roman Kuruc", 385, 495);
}
//initial render
render();
