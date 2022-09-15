class TaskAdPage extends TaskObj { 
    name: string;
    images: string[];
    zIndexTop: number;

    taskLogic() {
        const obj = this;
        const imageRootFolder = "/assets/img/tasks/adpage/"
        obj.zIndexTop = 0;
        obj.images = [
            "burgor.png",
            "car-insurance.png",
            "ios-virus.png",
            "android-virus.png",
        ]
        
        let container = document.createElement("windows");
        container = document.getElementById("spa-root").appendChild(container);

        container.style.width  = "100vw";
        container.style.height = "100vh";
        container.style.overflow = "hidden";
        
        for (let i = 0; i < 50; i++) {
            setTimeout(() => {   
                obj.newWindow(
                    container,
                    imageRootFolder + obj.images[Math.floor(Math.random()*obj.images.length)],
                    obj, 800, 500,
                );
            }, 100 * i);


            /*
            obj.newWindow(
                container,
                imageRootFolder + obj.images[Math.floor(Math.random()*obj.images.length)],
                obj, 800, 500,
            );*/
        }
    }

    newWindow(parent:HTMLElement, imgPath:string, obj, width:number, height:number, ) {
        let newWindow = document.createElement("window");
        newWindow = parent.appendChild(newWindow);

        newWindow.style.width  = width+"px";
        newWindow.style.height = height+"px";

        newWindow.style.left = Math.floor(Math.random() * (window.innerWidth - width)) + "px"; 
        newWindow.style.top =  Math.floor(Math.random() * (window.innerHeight - height)) + "px"; 


        newWindow.style.backgroundImage     = 'url("'+imgPath+'")';
        newWindow.style.backgroundSize      = 'cover';
        newWindow.style.backgroundRepeat    = 'no-repeat';
        newWindow.style.backgroundPosition  = 'center center';

        newWindow.style.position = "fixed";
        newWindow.style.boxShadow = "0 0.5em 1em -0.125em rgb(10 10 10 / 10%), 0 0px 0 1px rgb(10 10 10 / 2%)";

        newWindow.style.borderWidth = "2px";
        newWindow.style.borderColor = "lightgray";
        newWindow.style.borderStyle = "solid";
        newWindow.style.borderRadius= "25px";


        /*
        newWindow.addEventListener("mousedown", function() {
            
        });*/
     
        //MouseDrag start event
        newWindow.onmousedown = function(e) {
            e.preventDefault();

            let offsetX = newWindow.getBoundingClientRect().left - e.clientX;
            let offsetY = newWindow.getBoundingClientRect().top -  e.clientY;

            newWindow.style.zIndex = (++obj.zIndexTop).toString();

            //MouseDrag move event  
            document.onmousemove = function(e) {

                newWindow.style.left    =  (e.clientX + ( offsetX )) + "px"; 
                newWindow.style.top     =  (e.clientY + ( offsetY )) + "px"; 
            }

            //MouseDrag stop event
            document.onmouseup = function(e) {
                document.onmousemove = null;
                //newWindow.style.zIndex = "1";
            }
        };
    }
}