function setup() {
  createCanvas(windowWidth, windowHeight).position(0,0).style("z-index", -1);
  createA("https://github.com/katherineburgosa","Mi cuenta","_blank").id("aqui")
  textSize(35)
  frameRate(30);
}

function draw() {
  //background(220);
  text("✈", mouseX, mouseY);
}

function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
}