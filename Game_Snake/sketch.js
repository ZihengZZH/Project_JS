/**
 * Created by Ziheng on 19/11/2017.
 */

var s;
var scl = 20;

/*
* 600 = 20 * 30
* there are 30 spaces in one line
* */

var food;

function setup() {
    createCanvas(600, 600);
    s = new Snake();
    s.init();
    frameRate(10);
    pickLocation();
}

function pickLocation() {
    var cols = floor(width/scl);
    var rows = floor(height/scl);
    food = createVector(floor(random(cols)), floor(random(rows)));
    food.mult(scl);
}

function draw() {
    background(51);

    if (s.eat(food)) {
        pickLocation();
        document.getElementById("score").innerHTML = s.total;
    }
    if (s.death()){
        s.init();
        document.getElementById("score").innerHTML = s.total;
    }
    s.update();
    s.show();

    fill(255, 0, 100);
    rect(food.x, food.y, scl, scl);
}

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
