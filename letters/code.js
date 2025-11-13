document.getElementById("btn").addEventListener("click", onclick)
function onclick () {

let point = document.getElementById("score").valueAsNumber
let letter
if(point >= 97) {

letter = "A+"

} else if (point >= 93) {

letter = "A"

} else if (point >= 90) {

letter = "A-"

} else if (point >= 87) {

letter = "B+"

} else if (point >= 83) {

letter = "B"

} else if (point >= 80) {

letter = "B-"

} else if (point >= 77) {

letter = "C+"

} else if (point >= 73) {

letter = "C"

} else if (point >= 70) {

letter = "C-"

} else if (point >= 67) {

letter = "D+"

} else if (point >= 63) {

letter = "D"

} else if (point >= 60) {

letter = "D-"

} else if (point >= 0) {

letter = "F"

} 
document.getElementById("point").innerHTML = letter
}