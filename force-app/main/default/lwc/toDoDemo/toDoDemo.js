import { LightningElement } from 'lwc';

export default class ToDoDemo extends LightningElement {

    toDoList = [];
    newTask = '';
    handleChange(event){
        this.newTask = event.target.value;
    }

    addTask(){
        let taskId;
        taskId = this.toDoList.length ;
        taskId++;
        let taskObj;
        taskObj = {
            taskId : taskId,
            name : this.newTask
        };
        console.log(JSON.stringify(taskObj));
        this.toDoList=[...this.toDoList,taskObj];
        console.log(JSON.stringify(this.toDoList));
        this.newTask = '';
    }
    get taskAvailable(){
        return this.toDoList;
    }

    handleDelete(event){
        const iconId = event.target.name;
        this.toDoList = this.toDoList.filter(curTask => curTask.taskId !== iconId);
        console.log(JSON.stringify(this.toDoList));
    }
    

}