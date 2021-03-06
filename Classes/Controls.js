class Controls {
    constructor() {
        let directions = {
            37: "left",
            38: "up",
            39: "right",
            40: "down",
            32: "space"
        };
    
        $("body").keydown(function (event) {
            let newDirection = directions[event.keyCode];
            if (newDirection !== undefined) {
                snake.setDirection(newDirection);
            };
        });
    
    }
}