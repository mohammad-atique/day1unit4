let add= require("./add");

let subtract = require("./subtract");

let multiply = require("./multiply");

let divide = require("./divide");


let a=10, b=5, ans;

ans= add(a,b);
console.log(ans);
ans= subtract(a,b);
console.log(ans);

ans = multiply(a,b);
console.log(ans);

ans = divide(a,b);
console.log(ans);
