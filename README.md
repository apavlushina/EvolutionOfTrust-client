This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).



## Evolution of trust - an online psychological game

It is a mutiplayer game (with rooms for players and with an option to create a new one), based on the game "Evolution of trust"

## Table of contents

- [Preface](#Preface)
- [How to start](#How-to-start)
- [Technologies used for this project](#Technologies-used-for-this-project)
- [Contributors](#Contributors)

## Preface

Evolution of trust is a game played between two players.
The players need to enter a game room (any which exists or create a nuew one). At the start of the game, both players have the same amount of coins - 5. 
You have one choice. In front of you is a machine: if you put a coin in the machine, the other player gets three coins – and vice versa. You both can either choose to COOPERATE (put in coin), or CHEAT (don't put in coin).
If you cooperate & they cheat, you lose a coin while they gain three. (score: -1 vs +3) However, if you both cheat, neither of you gain or lose anything. (score: 0 vs 0).
If you both cooperate, you both give up a coin to gain three. (score: +2 vs +2) But if you cheat & they cooperate, you gain three coins at their cost of one. (score: +3 vs -1).
And that's our dilemma. Trust is nice, but it can let others take advantage of you -- or shoot you as you come unarmed out of a trench. Sometimes, distrust is rational!
Nobody can win or loose, you just can check - can you really trust your opponent, or can he trust you?


- ### U can log in or create a new user, than choose a room - or create a new one

![Lobby](https://i.ibb.co/17g0w8b/1.png)

- ### Then you can choose - do you want to cooperate or cheat?

![Game](https://i.ibb.co/FYCZScY/2.png)


## How to start

1. Clone and run [backend](https://github.com/apavlushina/game-server) 
2. Clone the git repository into a new directory on your computer: `git@github.com:apavlushina/EvolutionOfTrust-client.git`
3. Run `npm install` on your terminal to install all the dependendencies
4. Run `npm start` to get a preview of the front-end

## Still to do

- Make the app responsive!
- Now the game works till 5 turns. Better to give choise to the user which amout if rounds does he want
- Add an option to play with computer if nobody want to join)

## Technologies used for this project

1. React with `create-react-app`
2. `redux` and `react-redux` to set up a redux store and dispatch actions
3. `react-router` and `react-router-dom` to use routes in react and have dom elements that work with them
4. `superagent` to fetch data from the database
5. `redux-thunk` to dispatch actions for the redux store
6. `server-sent-events` to make it work as a multiplayer game!
7. `bootstrap` to make it nice :)

## Contributors

- Aleksandra | [Github](https://github.com/apavlushina)
- Gordon | [Github](https://github.com/sssgordon)
