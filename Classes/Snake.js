
class Snake {
    constructor(segments, direction, nextDirection) {
        segments = [
            new Block(7, 5),
			new Block(6, 5),
			new Block(5, 5)
        ];
        direction = "right";
        nextDirection = "right"
    }
    draw() {
        this.segments[0].drawSquare();
        for (var i = 1; i < this.segments.length; i++) {
            if (i % 2 === 0) {
                this.segments[i].drawSquare();
            } else {
                this.segments[i].drawSquare();
            }
        };
    }

    move() {
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

        if (checkCollision(newHead)) {
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

    checkCollision(head) {
        let leftCollision = new Block(head.col === 0);
        let topCollision = new Block(head.row === 0);
        let rightCollision = new Block(head.col === widthInBlocks - 1);
        let bottomCollision = new Block(head.row === heightInBlocks - 1);

        let wallCollision = leftCollision || topCollision || rightCollision || bottomCollision;

        let selfCollision = false; 

        for (var i = 0; i < this.segments.length; i++) {
            if (head.equal(this.segments[i])) {
                selfCollision = true;
            };
        };

        return wallCollision || selfCollision
    }

    setDirection() {
        if (this.direction === "up" && newDirection === "down") {
			return;
		} else if (this.direction === "right" && newDirection === "left") {
			return;
		} else if (this.direction === "down" && newDirection === "up") {
			return;
		} else if (this.direction === "left" && newDirection === "right") {
			return;
		};

		this.nextDirection = newDirection;  
    }
}

    