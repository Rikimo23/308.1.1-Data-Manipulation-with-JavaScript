// Part 1: Math Problems

//Given numbers
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 25;


//Check if all numbers are divisible by 5
const allDivisibleBy5 = n1 % 5 === 0 && n2 % 5 === 0 && n3 % 5 === 0 && n4 % 5 === 0;
console.log( 'All number are divisbkle by 5: ${all Divisbleby5}');

// Check if the first number is larger than the last
const firstLargerThanLast = n1 > n4;
console.log('First number is larger than the last: ${firstLargerThanLast}');

// arthmetic chain
const resut = ((n2 - n1) * n3) % n4;
console.log ('Result of aithmetic chain: ${result}');

// Change the logic of is Over25
const isUnder25 = n1 < 25 && n2 < 25 && n3 < 25 && n4 < 25;
console.log( 'all numbers are under 25: ${isUNder25}');

