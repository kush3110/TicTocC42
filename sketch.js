var hr;
var mn;
var sc;


function setup() {
  
  createCanvas(400,400);
  angleMode(DEGREES);  
  
}

function draw() {
  background(0,0,0);
  translate(200, 200);
  rotate(-90);
  
  hr = hour();
  mn = minute();
  sc = second();

  strokeWeight(4);
  stroke(255);
  noFill();

  stroke(150, 255, 100);
  scAngle = map(sc, 0, 59, 0, 360);
  arc(0,0,240,240,0,scAngle);

  stroke(0, 255, 255);
  mnAngle = map(mn, 0, 59, 0, 360);
  arc(0,0,260,260,0,mnAngle);

  stroke(250, 255, 0);
  hrAngle = map(hr % 12, 0, 12, 0, 360);
  arc(0,0,280,280,0,hrAngle);
  
  
  push();
  rotate(scAngle)
  stroke(150, 255, 100);
  line(0,0,100,0);
  pop();

  push();
  rotate(mnAngle)
  stroke(0, 255, 255);
  line(0,0,80,0);
  pop();

  push();
  rotate(hrAngle)
  stroke(250, 255, 0);
  line(0,0,50,0);
  pop();
  
  
  
  drawSprites();
}