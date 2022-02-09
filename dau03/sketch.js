//参考にさせていただいたサイト
//http://blog.livedoor.jp/reona396/archives/55824524.html
// https://bagelee.com/programming/p5js-pixelsorting/
let img;
let pg;

function preload(){
  img=loadImage('alteduday02.png');
}

function setup() {
  createCanvas(960, 300);
  smooth();
  pg=createGraphics(960,300);
  background(255,100,200);
  image(img,0,0);
  filter_();
  pg1();
  image(pg,0,0);
}

function draw() {
}

var addx=0;
var addy=0;
var r=[];
var b=[];
var g=[];

function filter_(){
  for(x=0;x<width;x+=1){
    r[x] = [];
    g[x] = [];
    b[x] = [];
    for(y=0;y<height;y+=1){
      let color=get(x,y);
      r[x][y]=color[0];
      g[x][y]=color[1];
      b[x][y]=color[2];
 }
}
  for(x=0;x<width;x+=1){
    for(y=0;y<height;y+=1){
      fill(r[x][y],g[x][y],b[x][y]);
      noStroke();
      rect(y,x,1,1);
    }
  }
}

function pg1(){
  pg.background(255);
  pg.erase();
  pg.rect(30,30,width-60,height-60);
  pg.noStroke();
  pg.textSize(20);
  pg.textFont('RocknRoll One');
  pg.text("2022.02.02",width/2-66,23);
  pg.text("海と硝子",width/2-46,294);
  pg.noErase();
}