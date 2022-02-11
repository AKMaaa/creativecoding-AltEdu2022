//https://editor.p5js.org/aferriss/sketches/B1BOfBdZX
//参考資料です↑
let pts;
let fetival_font;
var ptsx = [2001];
let pg;
function preload() {
  festival_font = loadFont("Festive-Regular.ttf");
}

function setup() {
  colorMode(HSB,360,100,100,100);
  createCanvas(960, 300);
  pg=createGraphics(960,300);
  pts = festival_font.textToPoints("SMOKE", 0, 0, 140, {
    sampleFactor: 0.4,
    simplifyThreshold: 0,
  });
  for (let i = 0; i < pts.length; i++) {
    ptsx[i] = 0;
  }
}

function draw() {
  background(0);
  pg_n();
  image(pg,0,0);
  noFill();
  stroke(255);
  push();
  translate(width / 2 - 280, height / 2 + 60);
  beginShape();
  for (let i = 0; i < pts.length; i++) {
    vertex(
      pts[i].x + 10 * sin(frameCount * 0.05 + pts[i].y * 0.1),
      pts[i].y + 2 * cos(frameCount * 0.05 + pts[i].x * 0.1)
    );
  }
  endShape(CLOSE);

  stroke(255, 70);
  beginShape();
  for (let i = 0; i < pts.length; i++) {
    vertex(
      pts[i].x + 10 * sin(frameCount * 0.05 + pts[i].y * 0.1) + 10,
      pts[i].y + 2 * cos(frameCount * 0.07 + pts[i].x * 0.3) - 10
    );
  }
  endShape(CLOSE);

  stroke(255, 40);
  beginShape();
  for (let i = 0; i < pts.length; i++) {
    vertex(
      pts[i].x + 10 * sin(frameCount * 0.06 + pts[i].y * 0.1) + 20,
      pts[i].y + 2 * cos(frameCount * 0.05 + pts[i].x * 0.2) - 20
    );
  }
  endShape(CLOSE);
  stroke(255, 20);
  beginShape();
  for (let i = 0; i < pts.length; i++) {
    vertex(
      pts[i].x + 10 * sin(frameCount * 0.05 + pts[i].y * 0.1) + 15,
      pts[i].y + 2 * cos(frameCount * 0.04 + pts[i].x * 0.1) - 30
    );
  }
  endShape(CLOSE);
    stroke(255, 5);
  beginShape();
  for (let i = 0; i < pts.length; i++) {
    vertex(
      pts[i].x + 10 * sin(frameCount * 0.01 + pts[i].y * 0.1) + 40,
      pts[i].y + 2 * cos(frameCount * 0.04 + pts[i].x * 0.1) - 40
    );
  }
  endShape(CLOSE);
  pop();
}

function pg_n(){
  pg.background(0);
  pg.noStroke();
  for(var t=0;t<20000;t++){
    pg.fill(random(0,200),random(50,70),random(80,90),60);
    pg.rect(floor(random(width)),floor(random(height)),1,1);
  }
}
