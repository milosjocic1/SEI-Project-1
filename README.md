# SEI Project 1 - Pong

![](https://i.imgur.com/sKDEY3g.png)

## Project Overview

Pong is a classic game where the player moves their bar on the left side of the screen vertically to try and hit an object past the opponent. In my version, the computer moves its own bar on the right side of the screen and tries to gain points. Each time the object in 
play goes past a player and hits the side of the window, a point is registered. 

This was my first project for General Assembly's Software Engineering Course: creating a game using HTML5, CSS3 and JavaScript (ES6) in the timeframe of a week. 

Play Pong here:

## Technologies Used 
- HTML5 
- CSS3
- JavaScript (ES6)
- Git / GitHub
- Figma 
- VS Code

## Development Process 

### Day 1 
The first day consisted of planning the project and breaking it down into achievable tasks that could be approached sequentially. I wrote out all of the key features and functionalities that I wanted my game to have in order to structure a timeframe around building it. The most challenging features seemed to be the movement of the ball and the collision between the ball and its surroundings. 
I also created wireframes on Figma to help me visualise how I wanted my game to look. 

[Link to wireframes.](https://www.figma.com/file/qfyaY6dJDAuzUeldleiEzZ/Pong-Wireframes)

### Day 2-3
I started with creating the elements of the game in HTML5 and styling them with CSS3. These included the player's bar, the computer's bar, the ball, the background, the scoreboard and the instructions. Once this was completed, I then started approaching the functionalities in the game that would be coded with JavaScript. The functionalities were the following:
- Making the ball move randomly from the middle of the screen
- Making the ball change direction upon collision with the top and bottom of the screen
- Controlling the player bar with the up and down arrow keys.
- Collision between the ball and the bars
- Making the ball accelerate slowly
- Registering a point depending on which side of the window the ball hits. 

### Day 4-7
These days were the most intense in regards to researching JavaScript methods and how they could be implemented. These were the most notable contributions I made during these days: 
- JavaScript Classes

  Creating separate files main.js, ball.js and bar.js helped to compartmentalise the separate functionalities for the main elements of the game. This required the creation of classes which were exported from their respective file and imported in other files in order for them to be used globally. 

- requestAnimationFrame method / Frame rate 

  As opposed to setInterval, I used the requestAnimationFrame method to create an update loop for the game to run.

  I created a  constant called deltaTime (change in time between frames) to ensure that all the game element movements respond to the same frame rate, so that in the event of a drop in frame rate, everything is affected equally and the game still runs smoothly.

- Randomised ball movement
  
  The initial direction of the ball upon resetting to the centre of the screen was decided by generating a random number between 0 and 2 Pi. I used the cosine value to determine the x direction and sine value for the y direction to create a directional unit vector of magnitude 1. Limits were set for the x and y values to ensure that the ball doesn't move only horizontally or only vertically.

- Collision 

  I used the getBoundingClientRect function to return DOMRect objects for the various elements which gives information on their size and their relative position in the viewport. This enabled me to change the direction of the ball when it hits the top and bottom of the viewport as well as the bars. Also it helped to register points when the ball hit the sides of the viewport. 

- Player control of bar

  In order to move the player bar, I used an event listener for "keydown". Key codes for arrow down and arrow up were passed into the function to move the bar 10% of the viewport height up or down.

- Computer control of bar

  During the update loop, I set the computer bar's y position to be equal to the y position of the ball. However, this meant that it will always get to the ball and the player would never be able to win. For this reason, a limit to the speed of the computer bar was set, so that as the ball accelerates, the computer will slowly lose the ability to keep up with the ball, allowing for the player to score points.

## Errors or bugs

Occasionaly, the ball will appear to slide on the bar before the collision occurs and it changes direciton.

## Challenges

This was my first JavaScript project, so there were many areas where I lacked complete understanding in the implementation of researched methods that hadn't been covered in previous lectures. I could have been more efficient in my approach to understanding concepts before using them, as I had many errors that I was not able to decipher as a result, which led to many points of frustration during the project week.

## Wins

Getting collision to work was a major obstacle and took me much longer than expected to finish. The biggest win for me was just getting the game to actually work. It really was a monumental challenge for me given that it was my first project, and I was over the moon to create something that anyone could play and enjoy.

## Future improvements

Currently, the game is endless and can go on forever. A potential improvement would be to have an endpoint to decide a winner, whether it be a specific number of points or a time limit. Also, different options for game difficulty could be added, where the computer would be increasingly difficult to gain points against. 

## Key learnings

This project taught me a lot about JavaScript and significantly improved my understanding of DOM. It also taught me to be more realistic in what can be achieved in a week and to pay more attention to the planning stage of a project, which ultimately should provide structure and a clear road map to achieving the goal of the project.










