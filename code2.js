let pen = document.getElementById("game").getContext("2d")
let x = 200 // left for the player
let y = 100 // top for the player
let dx = 10 // speed along x
let dy = 5 // speed along y, delta y, increasment of y
let g = 2 // increasment of dy
let is_left = false // state to indicate if I press down a 
let is_right = false // state to indicate if I press down d
const JUMP_POWER = -20
const LIMIT = 3
let jump_times = LIMIT

let bullet_x
let bullet_y
let bullet_dx = 15
let bullet_size = 5
let is_bullet_fly = false

let plat1_x = 100
let plat1_y = 300
let plat1_w = 50
let plat1_h = 20

document.addEventListener("keydown", onkeydown)
document.addEventListener("keyup", onkeyup)
drawBackground()

function onkeydown (event_object) {
    if(event_object.key === "a") {
        is_left = true
    } else if(event_object.key === "d") {
        is_right = true
    } else if(event_object.key === "Enter") {
        setInterval(drawFrame, 50)
    } else if(event_object.key === " ") {
        if(jump_times > 0) {
           dy = JUMP_POWER
           jump_times -=1
        }  
    } else if(event_object.key === "f") {
        is_bullet_fly = true
    }
}

function onkeyup (event_object) {
    if(event_object.key === "a") {
        is_left = false
    } else if(event_object.key === "d") {
        is_right = false
    } 
}

function drawFrame () {
    dy = dy + g
    y = y + dy
    if (y+20 > 400) {
        y = 400 - 20
        dy = 0
        jump_times = LIMIT
    } 
    if (is_left) {
        x = x - dx
        if (x+20 < 0) {
            x = 400
        }
    }
    if (is_right) {
        x = x + dx
        if (x > 400) {
            x = -20
        }
    }
    processBullet()
    drawBackground()
    drawPlat()
    drawPlayer(x, y)
    drawBullet()
}
function processBullet () {
    if (is_bullet_fly) {
        bullet_x += bullet_dx
    } else {
        bullet_x = x
        bullet_y = y    
    }
    if (bullet_x > 400) {
        is_bullet_fly = false
    }
}
function drawBackground () {
    pen.fillStyle = "#aaaaaa"
    pen.fillRect(0, 0, 400, 400)
}
function drawPlayer (x, y) {
    pen.fillStyle = "#ff0000"
    pen.fillRect(x, y, 20, 20)
}
function drawBullet () {
    pen.fillStyle = "#000000"
    pen.fillRect(bullet_x, bullet_y, bullet_size, bullet_size)
}
function drawPlat () {
    pen.fillStyle = "#0000ff"
    pen.fillRect(plat1_x, plat1_y, plat1_w, plat1_h)
}