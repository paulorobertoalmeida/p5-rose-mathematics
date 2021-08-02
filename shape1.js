//Mathematical Rose Patterns
let d = 6;
let n = 7;

function setup() {
  createCanvas(600, 600);
}

function draw() {
  let k = n/d;
  background(255);
  translate(width/2, height/2);
  noFill();
  
  beginShape();
  for ( let a = 0; a < TWO_PI * d; a += 0.002){
    let r = 200 * cos(k * a);
    let x = r * cos(a);
    let y = r * sin(a);
    stroke(0);
    strokeWeight(4);
    vertex(x, y);
  }
  endShape(CLOSE);
}