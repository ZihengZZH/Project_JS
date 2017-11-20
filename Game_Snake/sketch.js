/**
 * Created by Ziheng on 19/11/2017.
 */

var s;
var scl = 20;
var highest = 0;

/*
* 600 = 20 * 30
* there are 30 spaces in one line
* */

var food;

// SETUP OF THE GAME
function setup() {
    createCanvas(600, 600);
    s = new Snake();
    s.init();
    frameRate(10); // FPS OF THE GAME
    pickLocation();
}

// SET THE RANDOM LOCATION OF THE FOOD
function pickLocation() {
    var cols = floor(width/scl);
    var rows = floor(height/scl);
    food = createVector(floor(random(cols)), floor(random(rows)));
    food.mult(scl);
}

// DRAW THE CANVAS
function draw() {
    background(50, 50, 100);

    if (s.eat(food)) {
        pickLocation();
        document.getElementById("score").innerHTML = (s.total-1);
    }
    if (s.death()){
        if (s.total > highest){
            highest = s.total-1;
            document.getElementById("highest").innerHTML = highest;
        }
        s.init();
        document.getElementById("score").innerHTML = (s.total-1);
    }
    s.update();
    s.show();

    fill(255, 220, 0);
    rect(food.x, food.y, scl, scl);
}

// RESPOND TO KEY PRESS
function keyPressed() {
    if (keyCode === UP_ARROW) {
        s.dir(0, -1);
    } else if (keyCode === DOWN_ARROW) {
        s.dir(0, 1);
    } else if (keyCode === RIGHT_ARROW) {
        s.dir(1, 0);
    } else if (keyCode === LEFT_ARROW) {
        s.dir(-1, 0);
    }
}
