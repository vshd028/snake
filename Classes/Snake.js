
class Snake {
    constructor(mainBody) {
        this.mainBody = mainBody;
        this.segments = [
            new Block(7, 5),
			new Block(6, 5),
			new Block(5, 5)
        ];
        this.direction = "right";
        this.nextDirection = "right";
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

    // start() {
    //     if (this.direction === "space") {
    //         this.mainBody.gameLoop()
    //     }
    // }

    move() {

        let GameOver = new Audio("Classes/GameOver.mp3")
        let SoundApple = new Audio("Classes/SoundApple.mp3")

        let head = this.segments[0];
        let newHead;

        this.direction = this.nextDirection;

        // if (this.direction === "space") {
        //     this.mainBody.gameLoop()
        // }
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
            this.mainBody.gameOver();
            GameOver.play();
            return;
        };

        this.segments.unshift(newHead);

        if (newHead.equal(apple.position)) {
            apple.move(this.segments);
            this.mainBody.score++;
            this.mainBody.animationTime --;
            SoundApple.play();
        } else {
            this.segments.pop();
        };
    }

    checkCollision(head) {
        let leftCollision = head.col === 0
        let topCollision = head.row === 0
        let rightCollision = head.col === this.mainBody.widthInBlocks - 1
        let bottomCollision = head.row === this.mainBody.heightInBlocks - 1

        let wallCollision = leftCollision || topCollision || rightCollision || bottomCollision;

        let selfCollision = false; 
        
        for (var i = 0; i < this.segments.length; i++) {
            if (head.equal(this.segments[i])) {
                selfCollision = true;
            };
        };
        return wallCollision || selfCollision
    }

    setDirection(newDirection) {
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

    