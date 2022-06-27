class Score {
    constructor() {
        ctx.font = "20px Comic Sans MS";
		ctx.fillStyle = "Black";
		ctx.textAlign = "left";
		ctx.textBaseline = "top";
		ctx.fillText("Score: " + score, blockSize, blockSize);
    }
}