let capture;

function setup() {
    var canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent('p5Canvas');
    capture = createCapture(VIDEO);
    capture.hide();
    capture2 = createCapture(VIDEO);
    capture2.hide();
    capture3 = createCapture(VIDEO);
    capture3.hide();
  }
  
  function draw() {
    noTint();
    image(capture, 0, 0, width, width * capture.height / capture.width);
    tint(0, 150, 200, 125);
    image(capture2, 0, capture.height * 0.75 , width, width * capture.height / capture.width);
    tint(255, 50, 200, 125);
    image(capture3, 0, capture.height * 1.5, width, width * capture.height / capture.width);
    
  }