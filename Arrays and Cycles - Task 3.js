// 1. Given an array consisting of movie names, iterate over the array with the output of the names of each movie to the console
/*
let movies = ["The Godfather", "The Shawshank Redemption", "Schindler's List ", "Casablanca", "The Wizard of Oz", "One Flew Over the Cuckoo's Nest"]

for(let i = 0; i < movies.length; i++)
    console.log(movies[i])

//2. Given an array of car manufacturers, convert the array to a string and back to an array

let CarArray = ["Fiat", "Ford", "Hyundai", "Kia"]
let CarString = CarArray.toString();
console.log(CarString)

let ToArray = CarString.split(','); 
console.log(ToArray)
console.log(typeof(ToArray))
*/
//3. Given an array of the names of your friends, add the words hello to each element of the array
/*
let friends = ["Julia", "Alina", "Denis", "Anastasia"]
 
for(let i = 0; i < friends.length; i++){
    let add = 'Hello ';
    friends[i] = add + friends[i]
}
      
for(let i = 0; i < friends.length; i++)
    console.log(friends[i])
*/
// 4.  Convert numeric array to Boolean

let arr = [232, -45, NaN, 656, undefined]
 
for(let i = 0; i < arr.length; i++)
    console.log(arr[i] = Boolean(arr[i]))


//5. Sort the array [1,6,7,8,3,4,5,6] in descending order

let num = [1,6,7,8,3,4,5,6];
console.log(num.sort(function(a, b){return b-a}));


//6. Filter array [1,6,7,8,3,4,5,6] by value> 3
let results = num.filter(num => num > 3 )
console.log(results)

//7. Write a function that takes two parameters - an array and a number and outputs the index of an array element equal to a number

function check(num, b){
     console.log(num[b])
}
arr = [1,6,7,8,3,4,5,6]
check(arr, 4)

//8. Implement a loop that will print the number 'a' until it is less than 10

let k = 5;
while (k < 10) {  
  console.log(k)
  k++;
}

//9. Implement a loop that prints prime numbers to the console
console.log('Task 9')
let l = 20;

function IsPrime(a){ 
    if (a < 2)
        return false
    for (let i = 2; i < a; i++)
    {
        if (a % i == 0)
        return false
    }
    return true;
}

for (let j = 0; j < l; j++){
    if(IsPrime(j)){
        console.log(j)
    }
}

//10. Implement a loop that prints odd numbers to the console
 
console.log('Task 10')

function IsOdd(a){
    if (a == 0)
        return false
    for (let i = 1; i < a; i++)
    {
        if (a % 2 == 0)
        return false
    }
    return true;
}

for (let j = 0; j < l; j++){
    if(IsOdd(j)){
        console.log(j)
    }
}
