let snake;

function setup() {
    createCanvas(600, 600);
    snake = new Snake();
}

function draw() {
    // Set background to gray
    background(51);
    snake.update();
    snake.show();
}

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
}