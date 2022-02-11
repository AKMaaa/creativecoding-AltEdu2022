let sizeSlider, speedSlider; //スライダー
let sizeText, speedText; //ラベル用テキスト

function setup() {
  createCanvas(960, 300);
  colorMode(HSB,360,100,100,100);
  background(20);
   blendMode(ADD);
}
a = 0;
function draw() {
  translate(width/2, height/2);
  rotate(a + noise(a) * 50);
  for (var i = 0; i <= 2 * PI; i = i + PI / 10) {
    fill(map(i, 0, 2 * PI, 300, 200), random(50,80), 80,0.8);
    stroke(255,1);
    rect(495 * cos(i), 495 * sin(i), 495 * cos(i + a), 495* sin(i + a));
  }
  a += PI /50;
}
