let pen = document.getElementById("c").getContext("2d");

function drawSquare(x, y, color, size) {
    pen.fillStyle = color
    pen.fillRect(x, y, size, size)
}
let s1 = 10 // s1 is the size of the large square
let N = 400 / s1 // N is number of squares in a row / column

for (let r = 0; r < N; ++r) {
    for (let c = 0; c < N; ++c) {
        let x = c * s1
        let y = r * s1
        if( (c+r)%2 === 0 ) {
            drawSquare(x, y, "#999999",s1)
        } else {
            drawSquare(x, y, "#333333",s1)
        }

    }
}
    
let s2 = 4 // s2 is the size of the small square
let offset = s1 - s2/2
for (let r = 0; r < N-1; ++r) {
    for (let c = 0; c < N-1; ++c) {
        let x = c * s1 + offset
        let y = r * s1 + offset
        
        if (c >= 1/4*N && c <= 3/4*N && r >= 1/4*N && r <= 3/4*N) {
            if ( (c+r)%2 === 0) {
                drawSquare(x, y, "#000000",s2)
            } else {
                drawSquare(x, y, "#ffffff",s2)
            }
        } else {
            if ( (c+r)%2 === 0) {
                drawSquare(x, y,  "#ffffff",s2)
            } else {
                drawSquare(x, y,  "#000000",s2)
            }
        }
    }
}



    