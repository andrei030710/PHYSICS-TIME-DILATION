
let observer;

function setup() {
  createCanvas(1200, 800);
  observer = new Observer(100, 1200, 2);
  background(0);
  
}

function draw() {
  background(0);

  if (mouseIsPressed){ // CONTROLS ACCELERATION IN X-AXIS
    if (mouseButton === LEFT) {
     let accel = createVector(1, 0);
     observer.applyForce(accel);
    }
    if (mouseButton === RIGHT) {
     let stop = createVector(-1, 0);
     observer.applyForce(stop);
    }
  }

    // GRAVITY VECTOR
    let gravity = createVector(0, 0.8);
    let weightObs = p5.Vector.mult(gravity, observer.mass)
    observer.applyForce(weightObs);

  //observer.drag();
  observer.friction();
  observer.update();
  observer.ground();
  observer.show();
  setInterval(observer.TimeDilation(), 1000);
}
