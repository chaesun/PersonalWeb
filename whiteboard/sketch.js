function preload(){
}

function setup() {
    var canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent('p5Canvas');
    background(255);
    frameRate(360);  
        
}

function windowResized() {
    var reCanvas = resizeCanvas(windowWidth, windowHeight);
      reCanvas.parent('p5Canvas');
}

function draw() {
  
}

function mousePressed() {
  // 마우스 위치에 랜덤 색상의 점을 그린다
  let r = random(255);  // 빨간색 (0~255)
  let g = random(255);  // 초록색 (0~255)
  let b = random(255);  // 파란색 (0~255)
  let X = windowWidth-mouseX;

  // 랜덤 색상의 점을 마우스 위치에 그리기
  fill(r, g, b);
  noStroke();  // 점의 외곽선을 없애기
  ellipse(X, mouseY, 5, 5);  // 마우스 위치에 작은 원을 그린다
}

function mouseDragged() {
  // 마우스를 드래그할 때마다 점을 그리기
  let r = random(255);
  let g = random(255);
  let b = random(255);
  let X = windowWidth-mouseX;

  fill(r, g, b);
  noStroke();
  ellipse(X, mouseY, 5, 5);  // 드래그 중인 위치에 점을 그림
}