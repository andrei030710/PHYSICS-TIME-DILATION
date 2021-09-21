
let observer;

function setup() {
  createCanvas(1200, 800);
  observer = new Observer(100, 1200, 2);
  background(0);
  
}

function draw() {
  background(0);

  if (mouseIsPressed){ // CONTROLS ACCELERATION IN X-AXIS
     let accel = createVector(1000000, 0);
     observer.applyForce(accel);
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

// SECONDS COUNTER (delta t)
//let t = 0;

//function incrementSeconds() {
  //if (mouseIsPressed) {
    //t += 1;
    //console.log(t);
  //}
//}

//let cancel = setInterval(incrementSeconds, 1000);

// (Delta t')



  //FOR NOW F = a DUE TO m = 1
  //x = x + v 
  // Moving up at a constant speed
  //y = y
  
  // Reset to the bottom
  //if (x < 0) {
    //x = width;
  //}
