class Apple {
    constructor(mainBody) {
		this.mainBody = mainBody;
        this.position = new Block(3, 3)
    }

    draw() {
        this.position.drawCircle()
    }

    move(segments) {
        let isAppleOnSnake = false
		let randomCol = Math.floor(Math.random() * (this.mainBody.widthInBlocks - 2)) + 1;
		let randomRow = Math.floor(Math.random() * (this.mainBody.heightInBlocks - 2)) + 1;
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