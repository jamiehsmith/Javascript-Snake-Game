let snake;
// Scale of the grid
let scale = 20;

function setup() {
    createCanvas(500, 500);
    snake = new Snake();
    // Reduce frame rate for nostalgic feel
    frameRate(10);
}

function draw() {
    // Set background to gray
    background(51);
    snake.update();
    snake.show();
}

function keyPressed() {
    if (keyCode === LEFT_ARROW) {
        snake.dir(-1, 0);
    } else if (keyCode === UP_ARROW) {
        snake.dir(0, -1);
    }  else if (keyCode === RIGHT_ARROW) {
        snake.dir(1, 0);
    } else if (keyCode === DOWN_ARROW) {
        snake.dir(0, 1);
    }
}