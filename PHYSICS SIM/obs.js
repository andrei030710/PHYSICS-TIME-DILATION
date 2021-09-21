class Observer{
    constructor(x, y, m) {
        this.pos = createVector(x,y);
        this.vel = createVector(0, 0);
        this.acc = createVector(0, 0);
        this.mass = m;
        this.r = sqrt(this.mass) * 10;
        this.c = 299792458;
        this.t = 0;
    }

    drag(){
        // Drag direction
        let drag = this.vel.copy();
        drag.normalize();
        drag.mult(-1);
        
        let coef = 0.01;
        let speedSq = this.vel.magSq();
        drag.setMag(coef * speedSq);

        this.applyForce(drag);
    }

    friction(){
        let diff = height - (this.pos.y + this.r);
        if (diff < 1) {
            //console.log('friction');

            //Force direction reverse
            let friction = this.vel.copy();
            friction.normalize();
            friction.mult(-1);

            let mu = 0.1;
            let normal = this.mass;
            friction.setMag(mu * normal);
            this.applyForce(friction);
        }
    }

    applyForce(force){
        let f = p5.Vector.div(force, this.mass);
        this.acc.add(f);
    }

    ground(){ // FLOOR AND BOUNCE
        if (this.pos.y >= height - this.r) {
            this.pos.y = height - this.r;
            this.vel.y *= -1;
          }
          
      //FOR INFINITE MOTION
          if (this.pos.x >= width - this.r) {
            this.pos.x = 0;
          }

          // FOR RIGHT WALL TO BOUNCE OFF OF
            //if (this.pos.x >= width - this.r) {
                //this.pos.x = width - this.r;
                //this.vel.x *= -1;
            else if (this.pos.x <= this.r) {
            this.pos.x = this.r;
          }
          // FOR LEFT WALL TO BOUNCE OFF OF
          //else if (this.pos.x <= this.r) {
            //this.pos.x = this.r;
            //this.vel.x *= -1;}
    }

    update() {
        //ADDING ACCELERATION VECTOR TO VELOCITY
        this.vel.add(this.acc);
        
        //VELOCITY AS A WHOLE
        this.vel.limit(this.c/2); //To limit velocity
        this.pos.add(this.vel);
           
        this.acc.set(0, 0);
    //COMPONENTS SEPARATE  
        //this.pos.x = this.pos.x + this.vel.x;
        //this.pos.y = this.pos.y + this.vel.y;
        let s = this.pos.add(this.vel);
        let v = this.vel.add(this.acc);
        console.log(v); // To see both components
        //console.log(s.mag); // To only see magnitude of s vector
    }


    show() {
        stroke(255);
        strokeWeight(2);
        fill(255, 100);
        ellipse(this.pos.x, this.pos.y, this.r * 2);
        //point(this.pos.x, this.pos.y);
    }

    TimeDilation(){
        let velocity1 = this.vel.copy();
        if(velocity1.mag() >= 1){
            let speedSq = this.vel.magSq();
            this.t += 0.017;
            let T = this.t / (Math.sqrt(1 - (speedSq/(this.c**2))))
            console.log([this.t, T]);
        }
    }
}

//let t = 0;

//let speedSq = this.vel.magSq();

//function incrementSeconds() {
  //if (mouseIsPressed) {
    //t += 1;
    //console.log(t);
    //let T = t / (Math.sqrt(1 - (speedSq/(this.c**2))))
    //console.log(T)
 // }
//}

//let cancel = setInterval(incrementSeconds, 1000);

// (Delta t')


