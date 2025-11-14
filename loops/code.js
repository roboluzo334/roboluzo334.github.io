let pen = document.getElementById("c").getContext("2d");
let pen2 = document.getElementById("d").getContext("2d");
drawBackground(pen)
drawBackground(pen2)

// drawSquare(10, 10)
// drawSquare(10+30, 10)
// drawSquare(10+30+30, 10)
// drawSquare(10+30+30+30, 10)
// drawSquare(10+30+30+30+30, 10)
// drawSquare(10+30+30+30+30+30, 10)
// drawSquare(10+30+30+30+30+30+30, 10)
// drawSquare(10+30+30+30+30+30+30+30, 10)
// drawSquare(10+30+30+30+30+30+30+30+30, 10)
// drawSquare(10+30+30+30+30+30+30+30+30+30, 10)
let N = 13
let i = 0
// while (i < N) {
//     drawSquare(10+12*30-i*30, 10+i*30, "#00ff00ff") 
//     ++i; // i = i + 1; 1+= 1; i++
// }
// for (i = 0; i < N; ++i) {
//     drawSquare(10 + i*30, 10 + i*30, "#FF0000")
// }
while (i < N) {
    drawSquare(pen,10+12*30-i*30, 10+i*30, "#00ff00ff") 
    ++i; // i = i + 1; 1+= 1; i++
}
for (i = 0; i < N; ++i) {
    drawSquare(pen,10 + i*30, 10 + i*30, "#FF0000")
}

for (let r = 0; r < N; ++r) {
    for (let c = 0; c < N; ++c) {
        drawSquare(pen2, 10+c*30, 10+r*30,  "#FF0000")
    }
}





function drawBackground (p) {
   p.fillStyle = "#3ca181e8"
   p.fillRect (0,0, 400, 400) 
}

function drawSquare (p,x, y, c) {
    p.fillStyle = c
    p.fillRect(x, y, 20, 20)
}

