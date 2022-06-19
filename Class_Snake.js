var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var width = canvas.width;
var height = canvas.height;

var isGameOver = false

var colors = ["Blue", "Yellow"]

var blockSize = 50;
var widthInBlocks = width / blockSize;
var heightInBlocks = height / blockSize;

var score = 0;

class Block {
    constructor(col, row) {
        this.col = col
        this.row = row
    }
}

class Snake extends Block {
    constructor(segments, direction, nextDirection) {
        segments = [
            new Block(7, 5),
			new Block(6, 5),
			new Block(5, 5)
        ];
        direction = "right";
        nextDirection = "right"
    }
}

class Draw extends Snake {
    constructor () {
        super(segments)
        this.segments[0].drawSquare("Green");
        for (var i = 1; i < this.segments.length; i++) {
            if (i % 2 === 0) {
                this.segments[i].drawSquare("Blue");
            } else {
                this.segments[i].drawSquare("Yellow");
            }
        };
    } 
};

class CheckCollision extends Snake {
    constructor(head) {
        super(segments, col, row)
        let leftCollision = (head.this.col === 0);
        let topCollision = (head.this.row === 0);
        let rightCollision = (head.this.col === widthInBlocks - 1);
        let bottomCollision = (head.this.row === heightInBlocks - 1);

        let wallCollision = leftCollision || topCollision || rightCollision || bottomCollision;

        let selfCollision = false; 

        for (var i = 0; i < this.segments.length; i++) {
            if (head.equal(this.segments[i])) {
                selfCollision = true;
            };
        };

        return wallCollision || selfCollision
    }
    
};

class Move extends Snake {
    constructor () {
        super(segments, direction, nextDirection, col, row)
        let head = this.segments[0];
        let newHead;

        this.direction = this.nextDirection;

        if (this.direction === "right") {
            newHead = new Block(head.col + 1, head.row);
        } else if (this.direction === "down") {
            newHead = new Block(head.col, head.row + 1);
        } else if (this.direction === "left") {
            newHead = new Block(head.col - 1, head.row);
        } else if (this.direction === "up") {
            newHead = new Block(head.col, head.row - 1);
        };

        if (this.checkCollision(newHead)) {
            gameOver();
            return;
        };

        this.segments.unshift(newHead);

        if (newHead.equal(apple.position)) {
            score++;
            animationTime --;
            apple.move();
        } else {
            this.segments.pop();
        };
    }
    
};
    