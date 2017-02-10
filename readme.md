# WDI Project #03 - Group #3

## Team Members ("TAJJ")

Tim "Nightcrawler" Clark
- Product Owner
- Socket.io
- Front-End / Game Logic
- Back-End / Routing
- Back-End / Database

An "Professor X" Nguyen
- Project Board Manager
- CSS/Styling
- Handlebars Templating
- Front-End / Game Logic
- Back-End / Rendering

Jake "Wolverine" Miller
- Scrum Master
- Front-End / Game Logic
- Back-End / Routing 
- Back-End / Database

Justin "Juggernaut" Samuels
- GitHub Manager
- Socket.io
- Front-End / Game Logic
- Back-End / Routing
- Back-End / Database & Mongoose

## Overview

### triviaGame

triviaGame is a multi-player trivia game, where players race against each 
other to correctly answer the most questions in a game. Players have the option 
to play in single-player mode or challenge a friend in a multiplayer game.

### Technologies Used 
- Socket.io
- Mongoose
- Ajax
- jQuery
- HTML
- CSS
- JavaScript
- Handlebars
- Git
- Mongo
- Express
- Node.js
- Heroku
- [Google API](https://console.developers.google.com/apis/library)
- [Open Trivia DB API](https://opentdb.com/api_config.php)
- [Skeleton CSS](http://getskeleton.com/):skull: 
- [GitHub](https://github.com/WDI-DTLA-41-Group-3/Trivia-Game):octocat: 
- [Project Board](https://github.com/WDI-DTLA-41-Group-3/Trivia-Game/projects/2)

### Approach

After completing the mini agile sprint before this project, as a group we knew 
that we needed to spend more time on the planning process this time around. We
spent most of Day 1 whiteboarding different app ideas, writing out our CRUD
operations, wireframing, etc. and decided on the most flushed out idea that we had. 

Once we had our project idea, we split up roles/tasks, and wanted to make sure to 
specify which features team members/pairs would be responsible for from front to back. 
We also tried our best to modularize our functions in order to avoid multiple team 
members working on the same files, and worked off of separate branches and kept the 
master branch clean. We whiteboarded our to-dos at the start of each day and divided 
them up, and checked them off as they were completed. 

### Obstacles

There were certain features that ended up being more complicated to code than we
had originally thought. Having standups every morning and evening helped us to 
reprioritize which features we wanted to spend time on and which to mark as optional. 

On the morning of Day 4, we faced a ton of merge conflicts and had to resolve all
the conflicts before we were able to move on. This was probably the biggest obstacle
we faced during this process. We always made sure to resolve conflicts in pairs and
not individually. 

### User Stories & App Features

- [x] When a user visits site for the first time, they will be directed to a login page
- [x] Users will be able to log in via Google oauth with a Gmail account
- [x] After login, the user will be redirected to 'new game' page
- [x] User (Player 1) can create a new game by clicking 'CREATE' button
- [x] User is able to create either a single player or two player game by selecting an option from the dropdown menu
- [x] User is able to select a category of questions by selecting an option from the dropdown menu
- [x] Creating a new game will generate a game url and redirect user to the game room 
- [x] Player 2 can join a game room using the game link generated by P1
- [x] Player 2 can join a random active game by clicking 'JOIN' from the 'new game' page
- [x] Once both players are in the same game room, the game can begin
- [x] Users can click on the multiple choice buttons to select their answer
- [x] Each player can only click one time (select one answer) per question
- [x] When the incorrect answer is selected, the button will turn red
- [x] When the correct answer is selected, the button will turn green
- [x] A new question will render once a question is answered correctly, or 
- [x] A new question will render once a/each player has made one incorrect guess
- [x] When a player answers a question correctly, their score will update on the game page
- [x] After ten trivia questions have been rendered, the game will end
- [x] Upon game end, a final score page will display both players' scores and the winner
- [x] When a user visits their 'profile' page, they can view their username
- [x] Users can update their own username from their 'profile' page
- [x] Users can view their total games played and games won
- [x] Visiting '/___.json' will expose one JSON model
- **Only two players can join a multiplayer game room at a time
- **Authorization middleware prevents users from updating each others' usernames
- **Authorization middleware prevents users from deleting each others' profiles
(** indicate niceties)

### Wireframes

- ![Wireframe #1](http://i.imgur.com/twJZsCN.jpg?2)
- ![Wireframe #2](http://i.imgur.com/mw3L4IP.jpg?2)
- ![Wireframe #3](http://i.imgur.com/PMmLOYg.jpg?1)
- ![Wireframe #4](http://i.imgur.com/E2WTJqJ.jpg?2)
- ![Wireframe #5](http://i.imgur.com/pyayjRl.jpg?2)

### ERD

![ERD](http://i.imgur.com/iExY0Dl.png)

### RESTful API

![User Model](http://i.imgur.com/4mfueYi.png)

