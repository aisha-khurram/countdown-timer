#! usr/bin/env node

import inquirer from "inquirer";

import { differenceInSeconds } from "date-fns";

const res = await inquirer.prompt([
    {
        name: "userInput",
        type: "number",
        message: "Please enter the time in seconds:",
        validate:(input)=>{
            if(isNaN(input)){
                return "Please enter valid number"
            }
            else if(input>60){
                return "number must be less than 60"
            }
            else {
                return true
            }
        }
        
            }
        
]);

let input = res.userInput;

function startTime(value:number){
    const intTime= new Date().setSeconds(new Date().getSeconds()+value);
    const intervalTime= new Date(intTime);
    setInterval((()=>{
        const currTime=new Date()
        const timeDiff= differenceInSeconds(intervalTime,currTime);
        if(timeDiff<=0){
            console.log("Timer has Expired")
            process.exit()
        }
        const min= Math.floor((timeDiff%(3600*24))/3600)
        const sec= Math.floor(timeDiff%60)
        console.log(`${min}: ${sec}`)
    }),1000)
}
startTime(input)

