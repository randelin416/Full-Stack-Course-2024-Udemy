// console.log("Hello World!");
// window.alert("Welcome!");

// let user_name = window.prompt("請輸入你的名字：");
// window.alert("Welcome " + user_name + " !");

let x; // declare a variable
x = 100; // variable assignment
// 可將以上兩者整合寫為 let x = 10;

const y = 50;

console.log(x); //看x的值為多少

console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x % y);
console.log(x ** y);
console.log(x += y);
console.log(x -= y);

let a = 10;
let b = "10"
let c = "and"

console.log(a + a);
console.log(b + b);
console.log(a + b);
console.log(a - c);
console.log(x + a + c);
console.log(x + a + c + y + x);

let pi = 3.1415926585
console.log(typeof x.toString()); // x is an object, toString is a method/function to x, () means use x to run the function
console.log(x.toString());
console.log(pi.toFixed(2)); // 取到小數點後第幾位

let str = "RanYaaaaaa";
console.log(str.length);
console.log(str[2]);
console.log(str[10]); // 無
console.log(str[-1]); // 無
console.log(str[str.length - 1]); // 取字串的最後一個字
console.log(str.slice(3)) // 從index 3切到最後
console.log(str.slice(0, 3)) // 會切下index 0, 1, 2
console.log(str.indexOf("w")) // 無此substring 返回-1
console.log(str.indexOf("Ya"))
console.log(str.indexOf("ya")) // 大小寫需一致 