// parent class
class TaskObj {
    name;
    running;
    constructor(name) {
        this.name = name;
        this.running = true;
    }
    initLogic() {
        let obj = this;
        function clearLogic() {
            console.log("cleared");
            window.removeEventListener('hashchange', clearLogic);
            obj.running = false;
            obj = null;
        }
        window.addEventListener('hashchange', clearLogic);
        obj.taskLogic(obj);
    }
    taskLogic(obj) {
        console.log(`[Warning](TaskObj) No task logic has been difinend for "${this.name}" task`);
    }
}
