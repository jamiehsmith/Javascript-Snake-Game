function Snake() {
    this.x = 0;
    this.y = 0;
    this.xspeed = 1;
    this.yspeed = 0;

    this.update = function() {
        // Increase speed
        this.x += this.xspeed * scale;
        this.y += this.yspeed * scale;

        // Constrain values
        // Between 0 and width || height - scale so snake doesn't go off screen
        this.x = constrain(this.x, 0, width - scale);
        this.y = constrain(this.y, 0, height - scale);
    }

    this.show = function() {
        // Make a white rectangle
        fill(255);
        rect(this.x, this.y, scale, scale);
    }

    this.dir = function(x, y) {
        this.xspeed = x;
        this.yspeed = y;
    }

    this.eat = function(pos) {
        // Distance between snake and food
        const d = dist(this.x, this.y, pos.x, pos.y);

        // Snake ate food if distance is less than 1 pixel
        return d < 1;
    }
}