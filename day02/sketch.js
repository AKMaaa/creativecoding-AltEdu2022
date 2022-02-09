let squid1;
let pgs;
function setup() {
  pgs=createGraphics(960,300);
  c=createCanvas(960, 300);
  colorMode(HSB, 360, 100, 100, 100);
  pgs.squid1 = new squid(width / 2, height / 4);
  pgs.squid2 = new squid(width / 2+250, height / 4+200);
  pgs.squid3 = new squid(width / 2+800, height / 4+500);
  pgs.squid4 = new squid(width / 2+1600, height / 4+300);
  pgs.squid5 = new squid(width / 2+1200, height / 4+400);
  pgs.squid6 = new squid(width / 2+2000, height / 4+100);
  backg_osean();
  scale(0.28);
  pgs.squid1.display();
  pgs.squid4.display();
  scale(1.5);
  pgs.squid2.display();
  pgs.squid5.display();
  scale(0.8);
  pgs.squid3.display();
  pgs.squid6.display();
}

function draw() {
}

function backg_osean() {
  for (var lh = 0; lh < height; lh++) {
    stroke(190, 50, map(lh, 0, height, 100, 25));
    line(0, lh, width, lh);
  }

  noStroke();
  for (var num = 0; num < 20000; num++) {
    fill(0, 0, random(100, 90), 8);
    rect(Math.floor(random(width)), Math.floor(random(height)), 1, 1);
  }

  strokeWeight(0.5);
  noFill();
  for (var step = 0; step < 40; step++) {
    var r = random(50);
    var rlx = random(width);
    var rlx2 = random(width);
    stroke(0, 0, 100, 10);
    ellipse(random(width), random(height), r, r); //小さい気泡
    stroke(0, 0, 100, 10);
    line(rlx, 0, rlx, r * 3); //線
    line(rlx2, 0, rlx2, r * 2); //線
  }
  stroke(0, 0, 100, 8);
  fill(0, 50, 0, 2);
  for (var step2 = 0; step2 < 20; step2++) {
    var r2 = random(50);
    ellipse(random(width), random(height), r2, r2); //白色の気泡
  }
  fill(0, 0, 100, 1.5);
  stroke(0, 0, 100, 1);
  for (var step3 = 0; step3 < 20; step3++) {
    var r3 = random(60, 200);
    ellipse(random(width), random(height), r3, r3); //大きい気泡
  }
}

class squid {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  
  display() {
    stroke(255,20);
    fill(255,10);
    push();
    translate(this.x,this.y);
    rotate(random(-PI,PI));
    bezier(0,0,-80,40,-80,80,0,100);//後ろ
    bezier(0,0,80,40,80,80,0,100);
    stroke(255,20);
    noFill();
    strokeWeight(1.5);
    bezier(0,110,-30,100,-40,180,-65,200);//足
    bezier(0,110,-15,100,-20,180,-40,215);//足
    bezier(0,110,-15,80,-30,200,-100,60);//足
    bezier(0,110,-30,100,15,180,-15,230);//足
    ///////////////////////////////
    bezier(0,110,30,100,40,180,65,200);
    bezier(0,110,15,100,20,180,40,215);//足
    bezier(0,110,15,80,30,200,100,60);//足
    bezier(0,110,30,100,-15,180,15,230);//足
    stroke(255,20);
    strokeWeight(1);
    fill(90,80);
    bezier(0,0,-30,100,-30,100,0,120);//前
    bezier(0,0,30,100,30,100,0,120);
    
    pop();
  }
}
