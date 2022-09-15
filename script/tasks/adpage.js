class TaskAdPage extends TaskObj {
    name;
    images;
    taskLogic() {
        const obj = this;
        const imageRootFolder = "/assets/img/tasks/adpage/";
        this.images = [
            "burgor.png",
            "car-insurance.png",
            "ios-virus.png",
            "android-virus.png",
        ];
        console.log();
        for (let i = 0; i < 20; i++) {
            obj.newWindow(document.getElementById("spa-root"), imageRootFolder + obj.images[Math.floor(Math.random() * obj.images.length)]);
        }
    }
    newWindow(parent, imgPath) {
        let newWindow = document.createElement("window");
        newWindow = parent.appendChild(newWindow);
        newWindow.style.width = "800px";
        newWindow.style.height = "500px";
        newWindow.style.backgroundColor = "lightgray";
        newWindow.style.position = "absolute";
        newWindow.style.backgroundImage = 'url("' + imgPath + '")';
        newWindow.style.backgroundSize = 'cover';
        newWindow.style.backgroundRepeat = 'no-repeat';
        newWindow.style.backgroundPosition = 'center center';
        /*
        newWindow.addEventListener("mousedown", function() {
            
        });*/
        //MouseDrag start event
        newWindow.onmousedown = function (e) {
            e.preventDefault();
            let offsetX = newWindow.getBoundingClientRect().left - e.clientX;
            let offsetY = newWindow.getBoundingClientRect().top - e.clientY;
            newWindow.style.zIndex = "2";
            //MouseDrag move event  
            document.onmousemove = function (e) {
                newWindow.style.left = (e.clientX + (offsetX)) + "px";
                newWindow.style.top = (e.clientY + (offsetY)) + "px";
            };
            //MouseDrag stop event
            document.onmouseup = function (e) {
                document.onmousemove = null;
                newWindow.style.zIndex = "1";
            };
        };
    }
}
