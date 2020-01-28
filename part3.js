"use strict";
exports.__esModule = true;
var Todos = /** @class */ (function () {
    function Todos() {
        this.myTask = [];
    }
    Todos.prototype.addTask = function (task) {
        this.myTask.push(task);
        console.log("Item " + task + " has been added to the Arrary");
        return this.myTask.length;
    };
    Todos.prototype.listAllTasks = function () {
        //for(let i = 0; i < myTask.length; i++)
        //{ }
        console.log("Array contains the following items: ");
        this.myTask.forEach(function (task) {
            console.log(task);
        });
    };
    Todos.prototype.deleteTask = function (task) {
        var index = this.myTask.indexOf(task);
        if (index > -1) {
            this.myTask.splice(index, 1);
            console.log("Item " + task + " deleted from array.");
        }
        else {
            console.log("Item " + task + " not in array.");
        }
        return this.myTask.length;
    };
    return Todos;
}());
var todo = new Todos();
todo.addTask("Complete Lab");
todo.listAllTasks();
todo.deleteTask("Go Home!");
