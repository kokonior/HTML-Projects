var config = {
  apiKey: "AIzaSyAsAkHke9lXEU_97a8rYpMm7gOH3eWDxrM",
  authDomain: "collab-draw.firebaseapp.com",
  databaseURL: "https://collab-draw.firebaseio.com",
  storageBucket: "collab-draw.appspot.com",
};
firebase.initializeApp(config);

var pointsData = firebase.database().ref();
var points = [];

function setup() {
  var canvas = createCanvas(400, 400);
  background(255);
  fill(0);
  pointsData.on("child_added", function (point) {
    points.push(point.val());
  });
  canvas.mousePressed(drawPoint);
  /*
  canvas.mouseMoved(function () {
    if (mouseIsPressed) {
      drawPoint();
    }
  });
  */
}

function draw() {
  background(255);
  for (var i = 0; i < points.length; i++) {
    var point = points[i];
    ellipse(point.x, point.y, 5, 5);
  }
}

function drawPoint() {
  alert("DON'T TOUCH THE MASTERPIECE! NO COLLABORATION!");
  //pointsData.push({x: mouseX, y: mouseY});
  return false;
}

$("#saveDrawing").on("click", saveDrawing);

function saveDrawing() {
  saveCanvas("Painter Orpheus");
}

$("#clearDrawing").on("click", clearDrawing);

function clearDrawing() {
  alert("HOW DARE YOU!");
  /*
  pointsData.remove();
  points = [];
  */
}
