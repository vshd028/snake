
class Block {
    constructor(col, row) {
        this.col = col
        this.row = row
    }

    drawSquare() {
        let x = this.col * blockSize;
		let y = this.row * blockSize;
		ctx.fillStyle = "Green";
		ctx.fillRect(x, y, blockSize, blockSize);
    }

    drawCircle() {
        let centerX = this.col * blockSize + blockSize / 2;
		let centerY = this.row * blockSize + blockSize / 2;
		ctx.fillStyle = "Yellow";
		this.circle(centerX, centerY, blockSize / 2, true);
    }

    equal(otherBlock) {
        return this.col === otherBlock.col && this.row === otherBlock.row;
    }

    circle(x, y, radius, fillCircle) {
		ctx.beginPath();
		ctx.arc(x, y, radius, 0, Math.PI * 2, false);

		if (fillCircle) {
			ctx.fill();
		} else {
			ctx.stroke();
		};
	}
}



