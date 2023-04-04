// 1. Given the string 'ahb acb aeb aeeb adcb axeb'. 
//Write a regular expression that matches the strings ahb, acb, aeb by pattern: letter 'a', any character, letter 'b'

const Str = 'ahb acb aeb aeeb adcb axeb';

const re = /[a?b]\d/;
let found = Str.match(re);
console.log(found); 
 

// 2. Given the string '2 + 3 223 2223'. Write a regex that finds line 2 + 3 without capturing the rest


const String = '2 + 3 223 2223';

const regex = /2 \+ 3/gi;
let find = String.match(regex);
console.log(find);

// 3. Get the day, month and year of the current date and output it to the console separately

let now = new Date();
console.log(now);

let year = now.getFullYear();
console.log(year);

let month = now.getMonth();
console.log(month);

let date = now.getDate();
console.log(date);

