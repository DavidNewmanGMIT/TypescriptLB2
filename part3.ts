import {taskInterface} from './interface';

class Todos implements taskInterface{
    myTask: Array<string> = [];


    addTask(task: string): number {
        this.myTask.push(task);
        console.log("Item " + task + " has been added to the Arrary");
        return this.myTask.length;
    }

    listAllTasks():void {

        //for(let i = 0; i < myTask.length; i++)
        //{ }
    
        console.log("Array contains the following items: ");
        this.myTask.forEach(function (task) {
            console.log(task)
        })
    
    }

    deleteTask(task: string): number {
        let index: number = this.myTask.indexOf(task);
        if (index > -1) {
            this.myTask.splice(index, 1);
            console.log("Item " + task + " deleted from array.");        
        }
        else {
            console.log("Item " + task + " not in array.")
        }
        return this.myTask.length;
    }

    
}
let todo = new Todos();
todo.addTask("Complete Lab");
todo.listAllTasks();
todo.deleteTask("Go Home!");