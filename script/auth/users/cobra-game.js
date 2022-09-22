class CobraGame extends TaskObj {
    canvas = document.getElementById("cobra-canvas");
    ctx = this.canvas.getContext("2d");
    pixelSize = 30;
    pixelGapSize = 1;
    pixelsInY = Math.floor(this.canvas.height / this.pixelSize) - 1;
    pixelsInX = Math.floor(this.canvas.width / this.pixelSize) - 1;
    score = 0;
    taskLogic(obj) {
        let timeBetweenTicks = 100;
        let snake = [{ x: 0, y: 2 }, { x: 1, y: 2 }, { x: 2, y: 2 },];
        let fruit = [];
        let timmer;
        let movingDirOld = { x: 1, y: 0 };
        let movingDir = { x: 1, y: 0 };
        let collectedFruits = 0;
        //clearPixel(0,0);
        document.getElementById("spa-root").addEventListener("keydown", (e) => {
            e.preventDefault();
            switch (e.key) {
                case "w":
                    if (movingDirOld.y != 1) {
                        movingDir = { x: 0, y: -1 };
                    }
                    break;
                case "a":
                    if (movingDirOld.x != 1) {
                        movingDir = { x: -1, y: 0 };
                    }
                    break;
                case "s":
                    if (movingDirOld.y != -1) {
                        movingDir = { x: 0, y: 1 };
                    }
                    break;
                case "d":
                    if (movingDirOld.x != -1) {
                        movingDir = { x: 1, y: 0 };
                    }
                    break;
                default:
                    break;
            }
        });
        startGame(this);
        function startGame(obj) {
            obj.scoreChanged(0);
            for (let y = 0; y <= obj.pixelsInY; y++) {
                for (let x = 0; x <= obj.pixelsInX; x++) {
                    setTimeout(function () {
                        obj.clearPixel(x, y, obj);
                    }, 500 + (y + x) * 15);
                }
            }
            timeBetweenTicks = 100;
            snake = [{ x: 0, y: 2 }, { x: 1, y: 2 }, { x: 2, y: 2 },];
            fruit = [];
            movingDirOld = { x: 1, y: 0 };
            movingDir = { x: 1, y: 0 };
            collectedFruits = 0;
            obj.score = 0;
            setTimeout(function () {
                timmer = setInterval(function () { mainUpdate(obj); }, timeBetweenTicks);
            }, 500 + (obj.pixelsInY + obj.pixelsInX) * 15);
        }
        function endGame(message, obj) {
            clearInterval(timmer);
            for (let y = 0; y <= obj.pixelsInY; y++) {
                for (let x = 0; x <= obj.pixelsInX; x++) {
                    setTimeout(function () {
                        obj.placePixel(x, y, obj);
                    }, 250 + (y + x) * 15);
                }
            }
            if (obj.running) {
                setTimeout(function () {
                    //new CobraGame("yo").taskLogic();
                    startGame(obj);
                }, (obj.pixelsInY + obj.pixelsInX) * 15);
            }
            console.log(message);
        }
        function mainUpdate(obj) {
            //ControlsLogic 
            movingDirOld = movingDir;
            //SnakeMove - Removing last block
            if (collectedFruits <= 0) {
                obj.clearPixel(snake[0].x, snake[0].y, obj);
                snake.shift();
            }
            else {
                collectedFruits--;
                obj.scoreChanged(++obj.score);
            }
            //SnakeMove - Adding block in movingDir
            let newHead = {
                x: snake[snake.length - 1].x + movingDir.x,
                y: snake[snake.length - 1].y + movingDir.y,
            };
            snake.push(newHead);
            if (!obj.placePixel(newHead.x, newHead.y, obj)) { //Returns false if pixel is outside play-area => end game 
                endGame("Outside play-area", obj);
            }
            //SnakeLogic - Checking if snake is on itself, ending game
            for (let i = 0; i < snake.length - 1; i++) {
                if (newHead.x == snake[i].x && newHead.y == snake[i].y) {
                    endGame("Collided with tail", obj);
                }
            }
            //SnakeLogic - Checking if snake head is on fruid, awarding points
            for (let i = 0; i < fruit.length; i++) {
                if (newHead.x == fruit[i].x && newHead.y == fruit[i].y) {
                    collectedFruits++;
                    fruit.splice(i, 1);
                    //endGame("Collided with fruit lol");
                }
            }
            //FruitLogic - Spawning fruit if none are present.
            if (fruit.length <= 0) {
                let newFruit = { x: -1, y: -1 };
                let invalidPos = false;
                let tried = 0;
                do {
                    tried++;
                    newFruit = {
                        x: Math.floor(Math.random() * obj.pixelsInX),
                        y: Math.floor(Math.random() * obj.pixelsInY),
                    };
                    snake.forEach(snakePart => {
                        if (snakePart.x == newFruit.x && snakePart.y == newFruit.y) {
                            invalidPos = true;
                        }
                    });
                } while (invalidPos && tried < snake.length + 10);
                fruit.push(newFruit);
                obj.placePixel(newFruit.x, newFruit.y, obj);
                if (!obj.placePixel(newFruit.x, newFruit.y, obj)) {
                    window.alert("ERROR");
                }
            }
        }
    }
    clearPixel(x, y, obj) {
        x *= obj.pixelSize;
        y *= obj.pixelSize;
        obj.ctx.clearRect(x, y, obj.pixelSize, obj.pixelSize);
    }
    placePixel(x, y, obj) {
        if (x >= 0 && y >= 0 && x <= obj.pixelsInX && y <= obj.pixelsInY) {
            x *= obj.pixelSize;
            y *= obj.pixelSize;
            obj.ctx.beginPath();
            obj.ctx.moveTo(x + obj.pixelGapSize, y + obj.pixelGapSize);
            obj.ctx.lineTo(x + obj.pixelSize - obj.pixelGapSize, y + obj.pixelGapSize);
            obj.ctx.lineTo(x + obj.pixelSize - obj.pixelGapSize, y + obj.pixelSize - obj.pixelGapSize);
            obj.ctx.lineTo(x + obj.pixelGapSize, y + obj.pixelSize - obj.pixelGapSize);
            obj.ctx.lineTo(x + obj.pixelGapSize, y + obj.pixelGapSize);
            obj.ctx.fillStyle = "rgb(" + x + ", 100, " + y + ")";
            obj.ctx.fill();
            return true;
        }
        else {
            return false;
        }
    }
}
