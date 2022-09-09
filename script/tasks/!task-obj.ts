// parent class
class TaskObj { 
    name: string;

    constructor(name) {
        this.name = name;
    }

    taskLogic() {
        console.log(`[Warning](TaskObj) No task logic has been difinend for "${this.name}" task`);
    }
}