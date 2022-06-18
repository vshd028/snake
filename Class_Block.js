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

class DrawSquare extends Block {
    constructor(color) {
        super(col, row)
        let x = this.col * blockSize;
		let y = this.row * blockSize;
		ctx.fillStyle = color;
		ctx.fillRect(x, y, blockSize, blockSize);
    }
}

class DrawCircle extends Block {
    constructor(color) {
        super(col, row)
        let centerX = this.col * blockSize + blockSize / 2;
		let centerY = this.row * blockSize + blockSize / 2;
		ctx.fillStyle = color;
		circle(centerX, centerY, blockSize / 2, true);
    }
}

class Equal extends Block {
    constructor(otherBlock) {
        super(col, row)
        this.col === otherBlock.col && this.row === otherBlock.row;
    }
    
}
