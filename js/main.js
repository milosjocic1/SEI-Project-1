import Ball from "./ball.js"
import Bar from "./bar.js"

const ball = new Ball(document.getElementById("ball")); // setting constant of ball to a new instance of html property ball
const playerBar = new Bar(document.getElementById("player-bar"))
const computerBar = new Bar(document.getElementById("computer-bar"))




let timePrevious //timeprevious set to null

function updateTime(time) {
    if(timePrevious != null){
    const deltaTime = time - timePrevious
     ball.updateTime(deltaTime) //uncomment this
    }               
    timePrevious = time
    window.requestAnimationFrame(updateTime) 
                     // the above are created to make the game run smoothly- as long as something can be changed on the screen, the update loop will run for the time 
}                                               // logging the updated time to the console gives an infinite loop of times which all have a similar difference between them. this can be identified as deltaTime
// delta slightly fluctuates, so using it ensures that all movements of elements are based on the same timings

document.addEventListener("keyup", e => {
    playerBar.position = (e.y / window.innerHeight) * 100
})



window.requestAnimationFrame(updateTime)    









