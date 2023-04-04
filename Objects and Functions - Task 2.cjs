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

/*

namecheck = prompt();

let user = {
    name: "Julia"
};
 
if (namecheck == user.name) {
    console.log("Hello " + user.name)
  }
else {
    console.log("There is no such name")
}
*/
/*
function showType(value) {
    console.log(typeof value);    
  }
  
let a = "Hello";
let b = 89;
showType(a);
showType(b);
*/

 
function IsPrime(a){
    let p = a; 
    if (a < 2){
        return false;
    }
    if (a / p == 1 && a / 2 != 0) 
    {
        return true;
    }
    else {
        return false;
    };
}

console.log(IsPrime(20))


