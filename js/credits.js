document.getElementById("credits-back").addEventListener(
    "click",
    function () {
      setTimeout(function () {
        document.getElementById("main-menu-canvas").hidden = false;
        document.getElementById("settings").hidden = false;
        document.getElementById("control").hidden = false;
        document.getElementById("credits").hidden = false;
        document.getElementById("select-difficulty").hidden = false;
        document.getElementById("settings-canvas").hidden = true;
        document.getElementById("main-menu").hidden = true;
        document.getElementById("credits-back").hidden = true;
        document.getElementById("credits-canvas").hidden = true;
      });
    },
    false
  );
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