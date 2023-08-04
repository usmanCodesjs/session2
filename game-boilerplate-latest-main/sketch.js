var splashimg
var gameState = "wait"
var playbutton, soundonbutton, soundoffbutton


function preload() {
    splashimg = loadImage("assets/cyberChaser.gif")


}



function setup() {
    createCanvas(windowWidth, windowHeight)
    playbutton = createImg("play.png")
    playbutton.position(width / 2 - 200, height - height / 5)
    playbutton.size(150, 150)

}

function draw() {
    background(splashimg)

}


