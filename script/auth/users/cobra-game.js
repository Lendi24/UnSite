class CobraGame extends TaskObj {
    taskLogic() {
        const canvas = document.getElementById("cobra-canvas");
        const ctx = canvas.getContext("2d");
        const canvasHeight = canvas.height;
        const canvasWidth = canvas.width;
        const pixelSize = 30;
        const pixelGapSize = 1;
        const pixelsInY = Math.floor(canvasHeight / pixelSize) - 1;
        const pixelsInX = Math.floor(canvasWidth / pixelSize) - 1;
        let timeBetweenTicks = 100;
        let snake = [{ x: 0, y: 2 }, { x: 1, y: 2 }, { x: 2, y: 2 },];
        let fruit = [];
        let timmer;
        let movingDirOld = { x: 1, y: 0 };
        let movingDir = { x: 1, y: 0 };
        let collectedFruits = 0;
        let score = 0;
        //clearPixel(0,0);
        document.addEventListener("keydown", (e) => {
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
        startGame();
        function startGame() {
            for (let y = 0; y <= pixelsInY; y++) {
                for (let x = 0; x <= pixelsInX; x++) {
                    setTimeout(function () {
                        clearPixel(x, y);
                    }, 500 + (y + x) * 15);
                }
            }
            timeBetweenTicks = 100;
            snake = [{ x: 0, y: 2 }, { x: 1, y: 2 }, { x: 2, y: 2 },];
            fruit = [];
            movingDirOld = { x: 1, y: 0 };
            movingDir = { x: 1, y: 0 };
            collectedFruits = 0;
            score = 0;
            setTimeout(function () {
                timmer = setInterval(mainUpdate, timeBetweenTicks);
            }, 500 + (pixelsInY + pixelsInX) * 15);
        }
        function endGame(message) {
            clearInterval(timmer);
            for (let y = 0; y <= pixelsInY; y++) {
                for (let x = 0; x <= pixelsInX; x++) {
                    setTimeout(function () {
                        placePixel(x, y);
                    }, 250 + (y + x) * 15);
                }
            }
            setTimeout(function () {
                //new CobraGame("yo").taskLogic();
                startGame();
            }, (pixelsInY + pixelsInX) * 15);
            console.log(message);
        }
        function mainUpdate() {
            //ControlsLogic 
            movingDirOld = movingDir;
            //SnakeMove - Removing last block
            if (collectedFruits <= 0) {
                clearPixel(snake[0].x, snake[0].y);
                snake.shift();
            }
            else {
                collectedFruits--;
                score++;
                document.getElementById("cobra-score").innerText = score.toString();
                if (parseInt(document.getElementById("cobra-high").innerText) < score) {
                    document.getElementById("cobra-high").innerText = score.toString();
                }
            }
            //SnakeMove - Adding block in movingDir
            let newHead = {
                x: snake[snake.length - 1].x + movingDir.x,
                y: snake[snake.length - 1].y + movingDir.y,
            };
            snake.push(newHead);
            if (!placePixel(newHead.x, newHead.y)) { //Returns false if pixel is outside play-area => end game 
                endGame("Outside play-area");
            }
            //SnakeLogic - Checking if snake is on itself, ending game
            for (let i = 0; i < snake.length - 1; i++) {
                if (newHead.x == snake[i].x && newHead.y == snake[i].y) {
                    endGame("Collided with tail");
                }
            }
            //SnakeLogic - Checking if snake is on fruid, awarding points
            for (let i = 0; i < fruit.length; i++) {
                if (newHead.x == fruit[i].x && newHead.y == fruit[i].y) {
                    collectedFruits++;
                    fruit.splice(i, 1);
                    console.log(fruit);
                    console.log(i);
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
                        x: Math.floor(Math.random() * pixelsInX),
                        y: Math.floor(Math.random() * pixelsInY),
                    };
                    snake.forEach(snakePart => {
                        if (snakePart.x == newFruit.x && snakePart.y == newFruit.y) {
                            invalidPos = true;
                        }
                    });
                } while (invalidPos && tried < snake.length + 10);
                fruit.push(newFruit);
                placePixel(newFruit.x, newFruit.y);
                console.log(newFruit.x + ":" + newFruit.y);
                if (!placePixel(newFruit.x, newFruit.y)) {
                    window.alert("ERROR");
                }
            }
        }
        function clearPixel(x, y) {
            x *= pixelSize;
            y *= pixelSize;
            ctx.clearRect(x, y, pixelSize, pixelSize);
        }
        function placePixel(x, y) {
            if (x >= 0 && y >= 0 && x <= pixelsInX && y <= pixelsInY) {
                x *= pixelSize;
                y *= pixelSize;
                ctx.beginPath();
                ctx.moveTo(x + pixelGapSize, y + pixelGapSize);
                ctx.lineTo(x + pixelSize - pixelGapSize, y + pixelGapSize);
                ctx.lineTo(x + pixelSize - pixelGapSize, y + pixelSize - pixelGapSize);
                ctx.lineTo(x + pixelGapSize, y + pixelSize - pixelGapSize);
                ctx.lineTo(x + pixelGapSize, y + pixelGapSize);
                ctx.fillStyle = "rgb(" + x + ", 100, " + y + ")";
                ctx.fill();
                return true;
            }
            else {
                return false;
            }
        }
    }
}
