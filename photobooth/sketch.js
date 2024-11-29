let video;
function preload(){
}
let heartArr = [];
let colorList = []; 

function setup() {
  var canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent('p5Canvas');
  video = createCapture(VIDEO);
  video.hide();  // DOM 요소로 직접 비디오를 표시하지 않도록 숨깁니다.

}

function draw() { 
  image(video, 0, 0, width, width * video.height / video.width);


  let a = windowWidth-mouseX
  let b = mouseY -15
  theta = radians(a);
  thetb = radians(b);
  translate(a,b);

  MakeHeart(); // 실행할 함수 호출
  generateColors();
  for (let i = 0; i < colorList.length; i++) {
      fill(0,0,0); // 리스트에 저장된 색상으로 선 그리기
    }
}

function MakeHeart(){
let x = 0;
let y = 0;
let size = 100;

push();
noStroke();
beginShape();
vertex(x, y);
bezierVertex(0 - size / 2, 0 - size / 2, x - size, y + size / 3, x, y + size);
bezierVertex(x + size, y + size / 3, x + size / 2, y - size / 2, x, y);            
endShape(CLOSE);
pop();
}

function generateColors() {
for (let i = 0; i < 10; i++) {
  let r = random(255); // 0부터 255 사이의 랜덤한 값을 R에 할당
  let g = random(10); // 0부터 255 사이의 랜덤한 값을 G에 할당
  let b = random(25); // 0부터 255 사이의 랜덤한 값을 B에 할당
  colorList.push(color(r, g, b)); // R, G, B로 색상을 생성하고 리스트에 추가
}
}
