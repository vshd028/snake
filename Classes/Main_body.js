class Main_body {
    constructor () {}

    Game_over(gameLoop) {
        isGameOver = true;
		clearTimeout(gameLoop);
		ctx.font = "60px Comic Sans MS";
		ctx.fillStyle = "Black";
		ctx.textAlign = "center";
		ctx.textBaseline = "middle";
		ctx.fillText("Game Over", width / 2, height / 2);
    }

    Score() {
        ctx.font = "20px Comic Sans MS";
		ctx.fillStyle = "Black";
		ctx.textAlign = "left";
		ctx.textBaseline = "top";
		ctx.fillText("Score: " + score, blockSize, blockSize);
    }

    Border() {
        ctx.fillStyle = "Gray";
		ctx.fillRect(0, 0, width, blockSize);
		ctx.fillRect(0, height - blockSize, width, blockSize);
		ctx.fillRect(0, 0, blockSize, height);
		ctx.fillRect(width - blockSize, 0, blockSize, height);
    }

	Circle(x, y, radius, fillCircle) {
		ctx.beginPath();
		ctx.arc(x, y, radius, 0, Math.PI * 2, false);

		if (fillCircle) {
			ctx.fill();
		} else {
			ctx.stroke();
		};
	}

	Gameloop() {
		ctx.clearRect(0, 0, width, height);
		drawScore;
		snake.moveSnake();
		snake.drawSnake();
		apple.drawApple();
		drawBorder();
	}
}