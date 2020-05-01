# [Charles Barkley's Referee Rumble (click to play!)](https://richyrichhh.github.io/rr/dist/index.html)

## Background
From Final Fight to Streets of Rage to Dynasty Warriors, beat em up games have been an arcade staple for over a generation. The purpose of the game is to provide entertainment to users who will control a character to fight endless hordes of enemies to try and achieve a high score.

## Functionality & MVP
Users will be able to:
+	 Move around a stage
+  Attack with animations
+	 Be attacked by enemies with animations
+  Use special moves
+	 Achieve a score

## Wireframes
The app will consist of a single page with the game. The top of the page will have a title and banner. The game itself will have the health bar and score at the top, with the player character along with surrounding enemies shown. The control scheme for the game as well as links to my GitHub/LinkedIn will be at the bottom.

![Wireframe](https://github.com/richyrichhh/rr/blob/master/images/wireframe.png?raw=true)

## Architecture and Technologies
JavaScript

**game.js ->** actual game “board” where everything will live, tracks score and dropped items and contains the actions the pc and enemy characters can use (attacks)

**player.js ->** object for player character, will track health and applied upgrades too

**enemy.js ->** enemy objects, will have health and will be destroyed when health <= 0



## Implementation Timeline
**Day 1:** Set up Node, get project set up with the 3 core files, build basic board, get key binds working

**Day 2-3:** Set up player character and attacks/actions, goal to have a moving player character on the game board (not yet populated by enemies)

**Day 4:** Copy and paste player character model to make enemies, build basic AI

## Bonus Features
Upgrades

Smooth animations

Upgrades

More player characters/upgrades?


This app is not affiliated with Charles Barkley in any way.

Assets from:
Charles Barkley - Charles Barkley Shut up and Jam! by Infogrames North America, Inc.
Referees - WWF Royal Rumble by Acclaim Entertainment, Inc.
Shaq - Shaq Fu by Delphine Software International
