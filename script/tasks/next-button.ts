class TaskNextButton extends TaskObj { 
    
    taskLogic() {
        document.getElementById("next").onclick = function() {
            const bar = <HTMLProgressElement>document.getElementById("bar");
            const con = <HTMLElement>document.getElementById("button-contain");

            bar.value += 8;

            if (bar.value >= 100) {
                document.getElementById("next-task-button").click();
            } else {
                if (Math.random() <= 0.33) {
                    con.classList.toggle("is-flex-direction-row-reverse");
                }
            }
        }

        document.getElementById("prev").onclick = function(){
            const bar = <HTMLProgressElement>document.getElementById("bar");

            bar.value = 0;
        }
    }
}