const startVelocity = 0.02
const acceleration = 0.000005

export default class Ball{ //javascript classes- new method  
    constructor(pongBall){
        this.pongBall = pongBall
        this.positionReset()
    }

    get x(){ 
        return parseFloat(getComputedStyle(this.pongBall).getPropertyValue("--x")) // using custom variable from css - getComputedStyle - pass in ballPong element + getPropertyValue - pass name of css variable -new methods. parseFloat parses argument (converting to string if necessary) then returns a floating point number to GET x
    }
    set x(val){
        this.pongBall.style.setProperty("--x", val) // using dom, access css and set property --x to new value
    }
    get y(){
        return parseFloat(getComputedStyle(this.pongBall).getPropertyValue("--y")) 
    }

    set y(val){
        this.pongBall.style.setProperty("--y", val) 
    }

    
    positionReset(){   //reset of ball position to roughly middle of screen
        this.x = 50
        this.y = 50
        this.direction = { x: 0}  // direction of ball is given as a unit vector of x and y magnitudes
        while(Math.abs(this.direction.x) <= 0.1 || Math.abs(this.direction.x) >= 0.9 ){   // keep ball moving more horizontally than vertically
            const ballDirection = randomNumber(0, 2*Math.PI) // direction will be expressed in radians, hence the range for random number generation is 0 to 2PI
            this.direction = { x: Math.cos(ballDirection), y: Math.sin(ballDirection)}; // gcse maths all over again
        }
        this.velocity = startVelocity
    }
    updateTime(deltaTime) {  //test to see if ball changes position
        this.x += this.direction.x * this.velocity * deltaTime
        this.y += this.direction.y* this.velocity * deltaTime
        this.velocity += acceleration * deltaTime   // this increases the ball's velocity gradually to make the game hard. multiplied by delta so that it accelerates with every frame

        const rect = this.rect()

        if(rect.bottom >= window.innerHeight || rect.top <= 0)
        this.direction.y = this.direction.y * (-1)  // if bottom is greater than height of window, reverse position of ball and vice versa
        if(rect.right >= window.innerWidth || rect.left <= 0)
        this.direction.x = this.direction.x * (-1)
    }

rect() {   // gets position of ball 
    return this.pongBall.getBoundingClientRect()
}
}

function randomNumber(min, max){
    return Math.random() * (max - min) + min // this method ensures number is in correct range
}
    
