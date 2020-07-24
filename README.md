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

![Screenshot](https://github.com/richyrichhh/rr/blob/master/images/gameplay_screen.png?raw=true)

## Architecture and Technologies
JavaScript

**/animations/ ->** character sprites
**/sounds/ ->** sound effects
**game.js ->** controls game functionality
**character.js ->** base "template" for objects on screen, both players and enemies will inherit from this
**player.js ->** object for player character, will track health and special ability bar too
**enemy.js ->** enemy objects, can attack the player but are destroyed in one hit
**boss.js ->** boss objects, inherits from enemy objects, but will have health like players
**powerup.js ->** item pickups and their mechanics
**explosion.js ->** plays animations that need to be garbage collected after finished playing
**/menu/ ->** start and end screens


## Assets from:

Charles Barkley - Charles Barkley Shut up and Jam! by Infogrames North America, Inc.

Referees - WWF Royal Rumble by Acclaim Entertainment, Inc.

Shaq - Shaq Fu by Delphine Software Intl.

This game is not affiliated with Charles Barkley nor any other public person in any way.
