class Game_over {
    constructor() {
        isGameOver = true;
		clearTimeout(gameLoop);
		ctx.font = "60px Comic Sans MS";
		ctx.fillStyle = "Black";
		ctx.textAlign = "center";
		ctx.textBaseline = "middle";
		ctx.fillText("Game Over", width / 2, height / 2);
    }
}