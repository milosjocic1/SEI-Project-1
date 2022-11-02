# Project 1 - Pong

# Game Description
Pong is a classic game where the player moves their bar on the right side of the screen vertically to try and hit an object past the opponent. The computer, in this
case (typically there is an option for a second player), moves its own bar on the left side of the screen and has the same objective. Each time the object in 
play goes past a player and hits the side of the window, a point is registered. First to 10 points wins!

# User Stories
As a new player, I want to learn how to play the game and the objective of the game so that I can play it.

As a player, I want to initiate the start of the game so that I can start playing.

As a player, I want to use my keyboard to control my game character so that I can gain points.

As a player, I want to see a scoreboard so that I can keep track of the points scored.

As a player, upon finishing the game I want to see the final score so that I know who won.

As a player, upon finishing the game I want to have the option to restart so that I can play again.

## Wireframes 
[Link to wireframes](https://www.figma.com/file/qfyaY6dJDAuzUeldleiEzZ/Pong-Wireframes)

Wireframes were created using Figma to help visualize the concept of the game and the multiple windows that it will contain. This also aided in the creation of 
various elements in the html and which parts of the game they would resemble.

## Planning
The planning process involved breaking down the game into its many parts and functionalities so that each section could be approached individually. Initially the game was broken down into the following:

HTML elements: the ball, the player and computer bars, the scoreboard

Styling of the above HTML elements

Functionality with JavaScript: Making the ball move randomly from a set position, making the ball bounce off the top of the window (change y direction) and the bars (change x direction), making the ball slowly accelerate, setting a limit to the speed of the computer's bar to allow the player a chance to win, registering a point to the computer if the ball hits the left side of the window and a point to the player if the ball hits the right, moving the player bar. 

## Methods used 
JavaScript Classes:

Creating classes helped to compartmentalise the JavaScript code for the different elements and separate them into different files to decongest the code and atttempt to make it cleaner.


requestAnimationFrame():

As opposed to setInterval, requestAnimationFrame() method was used to run an update loop (which is infinite, and might not have been the better option as it caused problems for game over sequence). 

A constant deltaTime (change in time between frames) was created to ensure that all the game element movements are based on the same frame rate, so that in the event of a drop in frame rate, everything is affected equally and the game still runs smoothly.


CSS methods: 

CSS custom variables: (--position) allows for changes to be made easily in JavaScript.

Scaling: The relative units vh (viewport height) and vw (viewport width) were used a lot in order to make the game scale to the size of the window/viewport, as the units are registered as percentages of the window height and width. 


Making the ball move randomly from a set position:

The concept of unit vectors was applied to determine the initial direction of the ball. A random number between 0 and 2PI was generated for which the cosine value was found for the x direction and sine value found for the y direction in order to generate a directional unit vector of 1 in any given direction. This was all declared in a while loop that checked the limits of the x and y directions to ensure that the ball didn't move completely vertically or completely horizontally. 


Making the ball bounce off the top of the window and off the bars

getBoundingClientRect(): This method was used to generate bounnds / rectangles around elements, which could be checked against the inner height of the window to then reverse the y direction of the ball.

A collision function was declared to initiate the change in x direction when the ball hit the bars.


Making the ball slowly accelerate

This was achieved by adding a tiny acceleration value to the speed per deltaTime.


Moving the player bar 

In order to move the player bar, and event listener for "keydown" was used. Key codes for arrow down and arrow up were passed into the function to move the bar 10% of the viewport height up or down.


Moving the computer bar

During the update loop, the computer bar's y position was set to be equal to the y position of the ball. However, this means that it will always get to the ball and the player will never be able to win. For this reason, a limit to the speed of the computer bar was set, so that as the ball accelerates, the computer will slowly lose the ability to keep up with the ball, allowing for the player to score points.


Registering the points


Checks were created for if the ball was at either side of the window so that points could be registered. To change the values on the scoreboard, DOM was used to change the HTML and increment the scores depending on which side of the window the ball hits. Then, the loop was reset and the ball returned to the middle.


## Unsolved Problems

I decided to tackle the gameplay first as this was the meat of the project, however I truly underestimated the scale and depth of the logic that was necessary to make the game work. This poor estimation resulted in my time management being severely affected and led to me not including two of the wireframes that I wanted to include (start screen and game over screen).

As I mentioned earlier, I believe that the use of an infinite loop made it incredibly difficult for me to stop the game running, whereas if I used a set interval method I would have been able to use clear interval, however I understood this way too late in order to make these changes to my code. Every attempt I made at checking if either score reached 10 to end the game failed, so I opted for another idea which involved using a timer. The timer is simple DOM manipulation, which counts down from 59 seconds and then changes the HTML to game over, however I failed in actually stopping the game from running and scoring more points.

These are things I would like to add next, and I think this would be achieved with a more realistic estimation of how long tasks would take and a more analytical approach in trying to understand every functionality and detail of the game. 











