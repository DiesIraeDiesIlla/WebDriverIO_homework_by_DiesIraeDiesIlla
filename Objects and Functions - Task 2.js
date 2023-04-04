/*
let car = {
    color: "black"
};

console.log(car.color)

car.color = "green"

console.log(car.color)

car.power = 150

function showPower(power){
    console.log(power)
}

showPower(car.power)
*/

/*
let warehouse = {
    pears: 20,
    apples: 50
};

let sum = 0;

function add(pears, apples){
    sum += pears + apples;
    return sum; 
}
console.log(add(warehouse.apples, warehouse.pears))
*/

const prompt = require("prompt-sync")({sigint:true})

let user = {
    name: "Julia"
};

console.log("Write your name")
const namecheck = prompt()

if (namecheck == user.name) {
    console.log("Hello " + user.name)
  }
else {
    console.log("There is no such name")
}
