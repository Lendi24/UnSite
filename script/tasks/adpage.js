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
        obj.newWindow(document.getElementById("spa-root"), imageRootFolder + obj.images[Math.floor(Math.random() * obj.images.length)]);
    }
    newWindow(parent, imgPath) {
        let newWindow = document.createElement("window");
        newWindow = parent.appendChild(newWindow);
        newWindow.style.width = "500px";
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
        newWindow.onmousedown = function (e) {
        };
    }
}
