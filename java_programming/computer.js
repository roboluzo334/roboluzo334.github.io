let a
let b
// + - / +
let sum

document.getElementById("btn").addEventListener("click",onclick)

// define a function
function onclick() {
 a = document.getElementById("a").valueAsNumber
 b = document.getElementById("b").valueAsNumber
sum = a + b
document.getElementById("heading1").innerHTML = sum;
}

