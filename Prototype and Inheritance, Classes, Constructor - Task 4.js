//Create 2 objects: animal and cat, add move property to animal object, cat object must inherit move property from object animal

let animal = {
}

let cat = { 
}

animal.move = true;
console.log(animal.move)
cat.__proto__ = animal; 

console.log(cat.move)
