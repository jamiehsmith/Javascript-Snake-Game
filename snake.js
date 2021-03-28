function Snake() {
    this.x = 0;
    this.y = 0;
    this.xspeed = 1;
    this.yspeed = 0;

    this.update = function() {
        // Increase speed
        this.x += this.xspeed;
        this.y += this.yspeed;
    }

    this.show = function() {
        // Make a white rectangle
        fill(255);
        rect(this.x, this.y, 10, 10);
    }

    this.dir = function(x, y) {
        this.xspeed = x;
        this.yspeed = y;
    }
}