//#AltEdu2022 day1

function setup() {
  createCanvas(960, 300);
  colorMode(HSB, 360, 100, 100, 100);
  background(240);
  for(var step=0;step<=910;step+=50){
  ellipse_motion(random(width),random(height));
  }
  for(var step2=0;step2<1000;step2+=0.08){
    tubutubu(Math.floor(random(width)),Math.floor(random(height)));
  }
}

function draw() {}

function ellipse_motion(x,y){
  var r=0;
  var i_max=50;
  var th=0;
  var th2=0;
  var col_H=0;
  var rn_r=random(0.2,4);
  var a=0;
  var rotate_rn=random(TAU);
  noStroke();
  push();
  translate(x,y);
  rotate(rotate_rn);
  for (var i = 0; i < i_max; i += 0.1) {
    rth=map(i,0,i_max,0,2*TAU);
    r=15*cos(rth*noise(x*0.01+i*0.01));//大きさ
    th=map(i,0,i_max,0,TAU);//角度1
    col_H=map(x,0,960,150,260);//色の制御
    fill(col_H+50*sin(th*5),40,map(i,0,i_max,90,100),60);
    ellipse(i*sin(th*2)*2*cos(th%x), map(i,0,i_max,0,height),r,r);
  }
  rotate(-rotate_rn);
  pop();
}

function tubutubu(x,y){
  fill(300,100,40,5);
  noStroke();
  rect(x,y,1,1);
}
