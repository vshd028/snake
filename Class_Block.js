
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
		circle(centerX, centerY, blockSize / 2, true);
    }

    equal(otherBlock) {
        return this.col === otherBlock.col && this.row === otherBlock.row;
    }
}

