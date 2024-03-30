#! /usr/bin/env node
import inquirer from "inquirer";
let todos = [];
let condition = true;
while(condition){
let todolist = await inquirer.prompt(
    [
        {
            name: "list",
            message: "Add your task",
            type: "input"
         },
         {
            name: "addmore",
            message: "Do you want to add more",
            type: "confirm",
            default: false
         }
    ]
)
todos.push(todolist.list)
condition = todolist.addmore
}
console.log("Your today's tasks are following:");

for (let i = 0; i < todos.length; i++) {
    console.log(`${i}. ${todos[i]}`);
}
