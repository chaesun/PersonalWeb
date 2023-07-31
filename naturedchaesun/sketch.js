 // JavaScript 코드
    // 텍스트 링크들을 가지고 있는 배열
    const links = document.querySelectorAll('.floating-link');

    // 텍스트 링크들의 위치를 저장하는 함수
    function floatLinks() {
      links.forEach(link => {
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        link.style.left = x + 'px';
        link.style.top = y + 'px';
      });
      setTimeout(floatLinks, 2500);
    }

    // 페이지가 로드되면 텍스트 링크들을 떠다니도록 시작
    window.onload = function() {
      floatLinks();
    };

    // 마우스 호버 시에 떠다니는 움직임 멈추기
    links.forEach(link => {
      link.addEventListener('mouseover', function() {
        link.style.transition = 'none';
      });

      link.addEventListener('mouseout', function() {
        link.style.transition = 'left 0.3s steps(5), top 0.3s steps(5)';
      });
    });

    // 창 크기가 변경될 때마다 텍스트 링크들이 새로운 위치로 이동
    window.addEventListener('resize', function() {
      floatLinks();
    });


function preload(){
}
let heartArr = [];
let colorList = []; 

function setup() {
    var canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent('p5Canvas');
    //background('black');

    const pigCartImage = select('.pigCartImage');
            const pigCartLinks = selectAll('.pigCart');

            pigCartLinks.forEach(link => {
                link.mouseOver(() => {
                    pigCartImage.removeClass('hidden');
                    pigCartImage.addClass('show-image');
                });

                link.mouseOut(() => {
                    pigCartImage.removeClass('show-image');
                    pigCartImage.addClass('hidden');
                });
            });
        
}

function windowResized() {
    var reCanvas = resizeCanvas(windowWidth, windowHeight);
      reCanvas.parent('p5Canvas');
}

function draw() { 
    let a = mouseX
    let b = mouseY
    theta = radians(a);
    thetb = radians(b);
    translate(a,b);
    let degree = random(100);
    rotate(PI * degree);
    MakeHeart();
    generateColors();
    for (let i = 0; i < colorList.length; i++) {
        fill(colorList[i]); // 리스트에 저장된 색상으로 선 그리기
      }
}

function MakeHeart(){
  let x = 0;
  let y = 0;
  let size = 15;

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
