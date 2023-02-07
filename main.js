function preload() {}

function setup() {
  canvas = createCanvas(640, 480);
  canvas.position(110, 250);
  video = createCapture(VIDEO);
  video.hide();
 
}

function draw() {
  image(video, 120, 125, 400, 250);
  fill("#f71505")
  strokeWeight(0);
  circle(0,0, 406);
  fill("#f76a05")
  strokeWeight(0);
  circle(0,0, 348);
  fill("#fff700")
  strokeWeight(0);
  circle(0,0, 290);
  fill("#1aff00")
  strokeWeight(0);
  circle(0,0, 232);
  fill("#02eff7")
  strokeWeight(0);
  circle(0,0, 174);
  fill("#1505fa")
  strokeWeight(0);
  circle(0,0, 116);
  fill("#fa05b5")
  strokeWeight(0);
  circle(0,0, 58);

  fill("#f71505")
  strokeWeight(0);
  circle(0,480, 406);
  fill("#f76a05")
  strokeWeight(0);
  circle(0,480, 348);
  fill("#fff700")
  strokeWeight(0);
  circle(0,480, 290);
  fill("#1aff00")
  strokeWeight(0);
  circle(0,480, 232);
  fill("#02eff7")
  strokeWeight(0);
  circle(0,480, 174);
  fill("#1505fa")
  strokeWeight(0);
  circle(0,480, 116);
  fill("#fa05b5")
  strokeWeight(0);
  circle(0,480, 58);

  fill("#f71505")
  strokeWeight(0);
  circle(640,0, 406);
  fill("#f76a05")
  strokeWeight(0);
  circle(640,0, 348);
  fill("#fff700")
  strokeWeight(0);
  circle(640,0, 290);
  fill("#1aff00")
  strokeWeight(0);
  circle(640,0, 232);
  fill("#02eff7")
  strokeWeight(0);
  circle(640,0, 174);
  fill("#1505fa")
  strokeWeight(0);
  circle(640,0, 116);
  fill("#fa05b5")
  strokeWeight(0);
  circle(640,0, 58);

  fill("#f71505")
  strokeWeight(0);
  circle(640,480, 406);
  fill("#f76a05")
  strokeWeight(0);
  circle(640,480, 348);
  fill("#fff700")
  strokeWeight(0);
  circle(640,480, 290);
  fill("#1aff00")
  strokeWeight(0);
  circle(640,480, 232);
  fill("#02eff7")
  strokeWeight(0);
  circle(640,480, 174);
  fill("#1505fa")
  strokeWeight(0);
  circle(640,480, 116);
  fill("#fa05b5")
  strokeWeight(0);
  circle(640,480, 58);
}


function take_snapshot(){
    save("image.png")
}