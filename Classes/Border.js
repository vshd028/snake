
class Border {
    constructor() {
        ctx.fillStyle = "Gray";
		ctx.fillRect(0, 0, width, blockSize);
		ctx.fillRect(0, height - blockSize, width, blockSize);
		ctx.fillRect(0, 0, blockSize, height);
		ctx.fillRect(width - blockSize, 0, blockSize, height);
    }
}