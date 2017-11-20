/**
 * Created by Ziheng on 19/11/2017.
 */

function Snake() {

    this.init = function(){
        this.pos = createVector(0, 0);
        this.speed = createVector(1, 0);
        this.total = 1;
        this.tail = [];
    }

    // To eat the food
    this.eat = function(pos) {
        var d = dist(this.pos.x, this.pos.y, pos.x, pos.y);
        if (d < 1) {
            this.total++;
            return true;
        } else {
            return false;
        }
    }

    // To direct the snake
    this.dir = function(x, y) {
        if (this.speed.x != Math.abs(x) && this.speed.y != Math.abs(y)) {
            this.speed.x = x;
            this.speed.y = y;
        }
    }

    // To check the death
    this.death = function() {
        for (var i = 0; i < this.tail.length; i++) {
            var pos = this.tail[i];
            var d = dist(this.pos.x, this.pos.y, pos.x, pos.y);
            if (d < 1) {
                console.log('starting over');
                return true;
            }
        }
        return false;
    }

    // To update the snake
    this.update = function() {
        for (var i = 0; i < this.tail.length - 1; i++) {
            this.tail[i] = this.tail[i + 1];
        }
        if (this.total >= 1) {
            this.tail[this.total - 1] = createVector(this.pos.x, this.pos.y);
        }

        this.pos.x = this.pos.x + this.speed.x * scl;
        this.pos.y = this.pos.y + this.speed.y * scl;

        this.pos.x = constrain(this.pos.x, 0, width - scl);
        this.pos.y = constrain(this.pos.y, 0, height - scl);
    }

    // To show the snake
    this.show = function() {
        fill(255);
        for (var i = 0; i < this.tail.length; i++) {
            rect(this.tail[i].x, this.tail[i].y, scl, scl);
        }
        rect(this.pos.x, this.pos.y, scl, scl);

    }

}