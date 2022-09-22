class CobraGame extends TaskObj {
    canvas = <HTMLCanvasElement>document.getElementById("cobra-canvas");
    ctx = this.canvas.getContext("2d");

    pixelSize = 30;
    pixelGapSize = 1;

    pixelsInY = Math.floor(this.canvas.height / this.pixelSize) -1;
    pixelsInX = Math.floor(this.canvas.width  / this.pixelSize) -1;


    taskLogic(){
        let obj = this;
        
        let timeBetweenTicks = 100;

        let snake = [  {x: 0, y: 2},  {x: 1, y: 2},  {x: 2, y: 2},];
        let fruit = [  ];
        
        let timmer;
        let movingDirOld = {x:1, y:0}
        let movingDir    = {x:1,y:0};
        let collectedFruits = 0;
        let score = 0;

        //clearPixel(0,0);

        document.addEventListener("keydown", (e) => {
            e.preventDefault();
            switch (e.key) {
                case "w":
                    if (movingDirOld.y != 1) {
                        movingDir = {x:0,y:-1}
                    }
                    break;

                case "a":
                    if (movingDirOld.x != 1) {
                        movingDir = {x:-1,y:0}
                    }

                    break;

                case "s":
                    if (movingDirOld.y != -1) {
                        movingDir = {x:0,y:1}
                    }
                    break;

                case "d":
                    if (movingDirOld.x != -1) {
                        movingDir = {x:1,y:0}
                    }
                    break;
        
                default:
                    break;
            }
        });

        startGame();
        function startGame() {
            for (let y = 0; y <= obj.pixelsInY; y++) {
                for (let x = 0; x <= obj.pixelsInX; x++) {
                    setTimeout(function(){
                        obj.clearPixel(x,y);
                    }, 500+(y+x)*15);
                }            
            }

            timeBetweenTicks = 100;

            snake = [  {x: 0, y: 2},  {x: 1, y: 2},  {x: 2, y: 2},];
            fruit = [  ];
    
            movingDirOld = {x:1, y:0}
            movingDir    = {x:1,y:0};
            collectedFruits = 0;
            score = 0;
    
            setTimeout(function(){
                timmer = setInterval(mainUpdate, timeBetweenTicks)
            }, 500+(obj.pixelsInY+obj.pixelsInX)*15);


        }

        function endGame(message) {
            clearInterval(timmer);
            for (let y = 0; y <= obj.pixelsInY; y++) {
                for (let x = 0; x <= obj.pixelsInX; x++) {
                    setTimeout(function(){
                        obj.placePixel(x,y);
                    }, 250+(y+x)*15);
                }            
            }


            setTimeout(function(){
                //new CobraGame("yo").taskLogic();
                startGame();
            }, (obj.pixelsInY+obj.pixelsInX)*15);

            console.log(message);
        }

        function mainUpdate() {
            //ControlsLogic 
            movingDirOld = movingDir;

            //SnakeMove - Removing last block
            if (collectedFruits <= 0) {
                obj.clearPixel(snake[0].x, snake[0].y);
                snake.shift();
            }

            else {
                collectedFruits--;
                score++;
                document.getElementById("cobra-score").innerText = score.toString();
                if (parseInt(document.getElementById("cobra-high").innerText)<score) {
                    document.getElementById("cobra-high").innerText = score.toString();
                }
            }

            //SnakeMove - Adding block in movingDir
            let newHead = {
                x: snake[snake.length-1].x+movingDir.x,
                y: snake[snake.length-1].y+movingDir.y,};
            snake.push(newHead);
            if (!obj.placePixel(newHead.x, newHead.y)) { //Returns false if pixel is outside play-area => end game 
                endGame("Outside play-area");
            }            

            //SnakeLogic - Checking if snake is on itself, ending game
            for (let i = 0; i < snake.length-1; i++) {
                if (newHead.x == snake[i].x && newHead.y == snake[i].y) {
                    endGame("Collided with tail");
                }
            }

            //SnakeLogic - Checking if snake head is on fruid, awarding points
            for (let i = 0; i < fruit.length; i++) {
                if (newHead.x == fruit[i].x && newHead.y == fruit[i].y) {
                    collectedFruits++;
                    fruit.splice(i,1);
                    console.log(fruit);
                    console.log(i);
                    //endGame("Collided with fruit lol");
                }
            }
            
            //FruitLogic - Spawning fruit if none are present.
            if (fruit.length <= 0) {
                let newFruit = {x:-1, y:-1};
                let invalidPos = false;
                let tried = 0;

                do {
                    tried++;
                    newFruit = {
                        x: Math.floor(Math.random() * obj.pixelsInX), 
                        y: Math.floor(Math.random() * obj.pixelsInY),
                    }
                    
                    snake.forEach(snakePart => {
                        if (snakePart.x == newFruit.x && snakePart.y == newFruit.y) {
                            invalidPos = true;
                        }
                    });
                } while (invalidPos && tried < snake.length + 10);

                fruit.push(newFruit);

                obj.placePixel(newFruit.x, newFruit.y);
                console.log(newFruit.x +":"+ newFruit.y)
                if (!obj.placePixel(newFruit.x, newFruit.y)) {
                    window.alert("ERROR");
                }
                
            }
        }
    }

    
    clearPixel(x, y) {
        x *= this.pixelSize;
        y *= this.pixelSize;

        this.ctx.clearRect(x,y,this.pixelSize,this.pixelSize);
    }

    placePixel(x, y){
        if (x >= 0 && y >= 0 && x <= this.pixelsInX && y <= this.pixelsInY) {
            x *= this.pixelSize;
            y *= this.pixelSize;

            this.ctx.beginPath();

            this.ctx.moveTo(x+this.pixelGapSize, y+this.pixelGapSize);
            this.ctx.lineTo(x+this.pixelSize-this.pixelGapSize, y+this.pixelGapSize);
            this.ctx.lineTo(x+this.pixelSize-this.pixelGapSize, y+this.pixelSize-this.pixelGapSize);
            this.ctx.lineTo(x+this.pixelGapSize, y+this.pixelSize-this.pixelGapSize);
            this.ctx.lineTo(x+this.pixelGapSize, y+this.pixelGapSize);

            this.ctx.fillStyle = "rgb("+x+", 100, "+y+")"
            this.ctx.fill();    

            return true;
        }

        else {
            return false;
        }
    }
}