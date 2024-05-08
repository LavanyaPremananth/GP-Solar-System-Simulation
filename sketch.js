//solarSystem

//For further development, I have implemented an aestroid object that is stuck in orbit around the moon. 

//Additionally, I have also added a different sized second moon that rotates around the earth at a different speed with different distance from the earth. 

var speed;
var starLocs = [];

function setup() {
    createCanvas(900,900);
}

function draw() {
    background(0);
    speed = frameCount;
    
    sky();
    
    //Sun
    push();
    //sun to the centre
    translate(450,450);
    rotate(radians(speed/3)); // sun rotating on its own orbit
    sunObj(color(255,150,0), 200); 
    pop();
    
    
    
    //Earth
    push();
    //follow sun to the centre
    translate(450,450);
    rotate(radians(speed)); //earth rotaing around the sun's orbit 
    
    //Translate from sun and rotate
    translate(200,200);
    rotate(radians(speed)); //earth rotating on its own axis 
    earthObj(color(0,0,255), 80); 
    pop();
    
    
    
    //Moon
    push();
    //follow sun to the centre
    translate(450, 450);
    rotate(radians(speed)); //moon roataing around the sun's orbit
    
    //Translate from sun and rotate
    translate(200, 200);
    rotate(radians(-speed*2)); //moon roatting around the earth's orbit
    
    //Translate from earth and rotate
    translate(100, 100);
    moonObj(color(255,255,255), 30);
    pop();
    
    
    
    //Asteroid
    push();
    //folow sun to centre
    translate(450, 450);
    rotate(radians(speed)); //asteroid roatating around the sun's orbit
    
    //Translate from sun and rotate
    translate(200, 200);
    rotate(radians(-speed*2)); //asteroid roatting around the earth's orbit
    
    //Translate from earth and roate
    translate(100, 100);
    rotate(radians(-speed*2)); //asteroid rotating around the moon's orbit
    
    //Translate from the moon and rotate
    translate(20, 20);
    asteroidObj(color(192,20,0), 20);
    pop();
    
    
    //secondMoon
    push();
    //follow sun to the centre
    translate(450, 450);
    rotate(radians(speed)); //secondMoon rotating around the sun's orbit
    
    //Translate from sun and rotate
    translate(200, 200);
    rotate(radians(-speed*4)); //secondMoon roatting around the earth's orbit
    
    //Translate from earth and rotate
    translate(50, 50);
    secondMoonObj(color(192,192,0), 25);
    pop();
    
}


function sunObj(c, size){
    strokeWeight(5);
    fill(c);
    stroke(0);
    ellipse(0, 0, size, size);
    line(0, 0, size/2, 0);
}

function earthObj(c,size){
    strokeWeight(5);
    fill(c);
    stroke(0);
    ellipse(0,0,size,size);
    line(0, 0, size/2, 0);
}


function moonObj(c,size){
    strokeWeight(5);
    fill(c);
    stroke(0);
    ellipse(0,0,size,size);
    line(0, 0, size/2, 0);
}

function secondMoonObj(c,size){
    strokeWeight(5);
    fill(c);
    stroke(0);
    ellipse(0,0,size,size);
    line(0, 0, size/2, 0);
}

function asteroidObj(c, size){
    strokeWeight(5);
    fill(c);
    stroke(0);
    ellipse(0, 0, size, size);
}


function sky(){
  push();
  while (starLocs.length<300){
    starLocs.push(new createVector(random(width), random(height)));
  }
  fill(255);
  for (var i=0; i<starLocs.length; i++){
    rect(starLocs[i].x, starLocs[i].y,2,2);
  }

  if (random(1)<0.3) starLocs.splice(int(random(starLocs.length)),1);
  pop();
}
