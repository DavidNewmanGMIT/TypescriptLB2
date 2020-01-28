//let stringArrary: string[] = ["One", "Two", "Three"];
//console.log(stringArrary);

let myTask: Array<string> = []

function addTask(task: string): number {
    myTask.push(task);
    console.log("Item " + task + " has been added to the Arrary");
    return myTask.length;
}

function listAllTasks():void {

    //for(let i = 0; i < myTask.length; i++)
    //{ }

    console.log("Array contains the following items: ");
    myTask.forEach(function (task) {
        console.log(task)
    })

}

function deleteTask(task: string): number {
    let index: number = myTask.indexOf(task);
    if (index > -1) {
        myTask.splice(index, 1);
        console.log("Item " + task + " deleted from array.");        
    }
    else {
        console.log("Item " + task + " not in array.");
    }
    return myTask.length;
}

addTask("Compelete Lab");
addTask("Go Home!");
addTask("Do nothing?");
let numberOfTask: number = addTask("Eat Breakfast");
console.log("The number of task to do today is " + numberOfTask);
listAllTasks();

deleteTask("Go Home!");
deleteTask("Stay here!");

listAllTasks();