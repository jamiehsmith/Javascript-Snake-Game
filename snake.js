function Snake() {
    // Current location
    this.x = 0;
    this.y = 0;
    // Speed
    this.xspeed = 1;
    this.yspeed = 0;
    // Total blocks
    this.total = 0;
    this.tail = [];

    this.update = function() {
        // No food eaten
        if (this.total === this.tail.length) {
            // Shift tail squares over by 1
            // So the food when eaten can be added to the front
            for (let i = 0; i < this.tail.length-1; i++) {
                this.tail[i] = this.tail[i+1];
            }
        }
        // Front square
        this.tail[this.total-1] = createVector(this.x, this.y);

        // Increase speed
        this.x += this.xspeed * scale;
        this.y += this.yspeed * scale;

        // Constrain values
        // Between 0 and width || height - scale so snake doesn't go off screen
        this.x = constrain(this.x, 0, width - scale);
        this.y = constrain(this.y, 0, height - scale);
    }

    this.show = function() {
        // Draw the snake
        // Make a white rectangle
        fill(255);
        // Shift tail squares over by 1
        for (let i = 0; i < this.tail.length;i++) {
            rect(this.tail[i].x, this.tail[i].y, scale, scale);
        }

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
        if (d < 1) {
            this.total++;
            return true;
        } else {
            return false;
        }
    }

    this.death = function() {
        // Check if snake has intersected with tail
        // Loop through every spot in the tail
        for (let i = 0; i < this.tail.length; i++) {
            // Tail position
            const pos = this.tail[i];
            // Distance
            const d = dist(this.x, this.y, pos.x, pos.y);

            if (d < 1) {
                // If tail is connected
                // Reset total and tail
                this.total = 0;
                this.tail = [];
            }
        }
    }
}