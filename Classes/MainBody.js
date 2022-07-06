class MainBody {
    constructor () {
		let canvas = document.getElementById("canvas");

	
		this.width = canvas.width;
		this.height = canvas.height;
	
		this.isGameOver = false;
	
		this.colors = ["Blue", "Yellow"]
	
		this.widthInBlocks = this.width / blockSize;
		this.heightInBlocks = this.height / blockSize;
	
		this.score = 0;
		this.animationTime = 100;
	}

    gameOver() {
        this.isGameOver = true;
		ctx.font = "60px Comic Sans MS";
		ctx.fillStyle = "Black";
		ctx.textAlign = "center";
		ctx.textBaseline = "middle";
		ctx.fillText("Game Over", this.width / 2, this.height / 2);
    }

    drawScore() {
        ctx.font = "20px Comic Sans MS";
		ctx.fillStyle = "Black";
		ctx.textAlign = "left";
		ctx.textBaseline = "top";
		ctx.fillText("Score: " + this.score, blockSize, blockSize);
    }

    border() {
        ctx.fillStyle = "Gray";
		ctx.fillRect(0, 0, this.width, blockSize);
		ctx.fillRect(0, this.height - blockSize, this.width, blockSize);
		ctx.fillRect(0, 0, blockSize, this.height);
		ctx.fillRect(this.width - blockSize, 0, blockSize, this.height);
    }

	start(direction) {
		if (direction === "space") {
			this.gameLoop()
		}
	}

	gameLoop() {
		if (this.isGameOver === false) {
			setTimeout(()=>{
				ctx.clearRect(0, 0, this.width, this.height);
				this.drawScore();
				snake.move();
				snake.draw();
				apple.draw();
				this.border();
				this.gameLoop()
			}, this.animationTime)
		};
	}
}