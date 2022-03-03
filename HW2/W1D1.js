"use strict";

//1
const max = (x, y) => x > y ? x : y;
console.log(max(1, 9));

//2
function MaxOfThree(num1, num2, num3) {
    let test = num1;
    if (num1 < num2 && num3 < num2)
        test = num2;
    else if (test < num3)
        test = num3;
    return test;
}
console.log(MaxOfThree(2, 6, 4));

//3
function isVowel(c) {
    c = c.toUpperCase();
    const Vowel = ['A', 'E', 'I', 'O', 'U'];
    for (let i = 0; i < Vowel.length; i++) {
        if (c == Vowel[i])
            return 1;
    }
    return 0;
}
console.log(isVowel('B'));

//4
function sum(n) {
    let total = 0;
    n.forEach(n => {

        total += n;

    });
    return total;
}
function multiply(n) {
    
    const res = n.reduce((acc, IDK )=> acc * IDK );
    return res;
}


let z = [1, 2, 3, 4];
console.log(sum(z));
console.log(multiply(z));

//5
function reverse(stri) {

    let kaka = stri.split("").reverse().join("");

    return kaka;
}
console.log(reverse("jag testar"));

//6
function findLongestWord(s) {
let leng=0;
for(let i=0; i<s.length;i++){
if(s[i].length>leng)
leng=s[i].length;
}
return leng;
}
let xy=["ABCD5","ABCDE6","ABCDEF7"]
console.log(findLongestWord(xy) );

//8

function computeSumOfSquares(numbers, ) {
    return numbers.reduce((x, y) => x + Math.pow(y, 2));
}
let v=[1,2,3,4,5,6];
console.log(computeSumOfSquares(v));

//9
function printOddNumbersOnly(numbers) {
    return numbers.filter(num => num % 2 !== 0);
}
console.log(printOddNumbersOnly(v));

//10

function computeSumOfSquaresOfEvensOnly(numbers) {
    return numbers
        .filter(num => num % 2 === 0)
        .reduce((x, y) => x + Math.pow(y, 2));
}

console.log(computeSumOfSquaresOfEvensOnly(v));
//11
function sumWithReduce(numbers) {
    return numbers.reduce((x, y) => x + y);
}
console.log(sumWithReduce(v));
//12
function multipliesWithReduce(numbers) {
    return numbers.reduce((x, y) => x * y);
}
console.log(multipliesWithReduce(v));
//13
function findSecondBiggest(numbers) {
    let first ,second ;
    first = second = Number.MIN_VALUE;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > first) {
            second = first;
            first = numbers[i];
        } else if (numbers[i] !== first && numbers[i] > second) {
            second = numbers[i];
        }
    }

    return second;
}
console.log(findSecondBiggest(v));

function printFibo(n, a, b) {
    let x = a, y = b, count = n, temp, fibo = [];
    while (count > 0) {
        temp = x;
        x = x + y;
        y = temp;
        fibo.push(y);
        count--;
    }
    console.log(fibo)
}
printFibo(10,0,1);

const getTime = () =>{

    const date = new Date();
  
  
  
    const year = date.getFullYear();
  
    const month = date.getMonth();
  
    const day = date.getDay();
  
   
  
    const h = date.getHours();
  
    const m = date.getMinutes();
  
    const s = date.getSeconds();
  
  
  
    const time = year + "-" + month+ "-" + day+ " " + h + ":" + m + ":" + s + " " ;
  
   
  
    document.getElementById("MyClockDisplay").innerText = time;
  
    document.getElementById("MyClockDisplay").textContent = time;
  
   
  
    setTimeout(getTime, 1000);
  
  
  
  }
  
  getTime();