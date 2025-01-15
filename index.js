// Faulty Calculator in which take the inppt from user
// incorrect operations 10% of the time toh hum kya krenge math.random krdenege usse kya hoga randomly value jpo bhi aayegi uske basis pe decide hoga ki calculator wrong output dega ya correct
/*
+ = -
* = +
- = /
/ = **
*/

let random= Math.random()
console.log(random)
var a = prompt("Enter your first Number")
var b = prompt("enter your operation")
var c = prompt("Enter your second number")

let obj={
    "+":"-",
    "*":"+",
    "-":"/",
    "/":"**",
}

if(random>0.1){
    // correct calculation

 alert(`Result is ${eval(`${a} ${b} ${c}`)}`)

}
else{
    // wrong calculation
    b = obj[b]
    alert(`Result is ${eval(`${a} ${b} ${c}`)}`)
 
}


