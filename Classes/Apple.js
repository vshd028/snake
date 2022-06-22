class Apple {
    constructor(position) {
        position = new Block(3, 3)
    }

    drawApple() {
        this.position.drawCircle()
    }

    moveApple() {
        let isAppleOnSnake = false
		let randomCol = Math.floor(Math.random() * (widthInBlocks - 2)) + 1;
		let randomRow = Math.floor(Math.random() * (heightInBlocks - 2)) + 1;
		this.position = new Block(randomCol, randomRow);
		for (var i = 0; i < segments.length; i++) {
			if (segments[i].equal(this.position)) {
				isAppleOnSnake = true;
			};
		};
		if (isAppleOnSnake === true) {
			this.moveApple();
		};
    }
}