#! /usr/bin/env node
import inquirer from "inquirer";

const answer=await inquirer.prompt([{
    name:"checkNumber",
    type:"number",
    message:"Enter your number to check if it is even or odd"

}
]);

console.log(answer.checkNumber%2===0?"Even":"Odd")