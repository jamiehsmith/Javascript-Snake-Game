let snake;
// Scale of the grid
let scale = 20;
let food;

function setup() {
    createCanvas(500, 500);
    snake = new Snake();
    // Reduce frame rate for nostalgic feel
    frameRate(10);

    // Place food
    pickLocation();
}

function draw() {
    // Set background to gray
    background(51);
    snake.update();
    snake.show();

    // Draw food
    fill(255, 0, 100);
    rect(food.x, food.y, scale, scale);

    // Check if snake ate food
    if (snake.eat(food)) {
        // Pick a new location for food
        pickLocation();
    }
}

function pickLocation() {
    // Number of columns - width || height of window / scale
    // To put the food in a box on the grid
    // Floor for whole numbers
    const columns = floor(width/scale);
    const rows = floor(height/scale);

    // Create food vector
    // Place in a random spot
    food = createVector(floor(random(columns)), floor(random(rows)));
    // Multiple food by scale to expand
    food.mult(scale);
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