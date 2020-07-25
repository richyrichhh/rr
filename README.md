# [Charles Barkley's Referee Rumble (click to play!)](https://richyrichhh.github.io/rr/dist/index.html)

## Background
From Final Fight to Streets of Rage to Dynasty Warriors, beat em up games have been an arcade staple for over a generation. The purpose of the game is to provide entertainment to users who will control a character to fight endless hordes of enemies to try and achieve a high score.

## Functionality & MVP
Users are able to:
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

**/game/animations/ ->** character sprites

**/game/sounds/ ->** sound effects

**/game/game.js ->** controls game functionality

**/game/character.js ->** base "template" for objects on screen, both players and enemies will inherit from this

**/game/player.js ->** object for player character, will track health and special ability bar too

**/game/enemy.js ->** enemy objects, can attack the player but are destroyed in one hit

**/game/boss.js ->** boss objects, inherits from enemy objects, but will have health like players

**/game/powerup.js ->** item pickups and their mechanics

**/game/explosion.js ->** plays animations that need to be garbage collected after finished playing

**/game/menu/ ->** start and end screens

**/index.js ->** game startup functions

**/util.js ->** contains helper methods


## Code Snippets:

**`Between`**

The following code is a simple utility used to return if an object is located within a range. This is used extensively for hit detection in the game.

```
const between = (num, a, b) => {
  let min = Math.min(a, b),
    max = Math.max(a, b);
  return num > min && num < max;
}
```

**`Draw`**

The following code is a custom drawImage method that allows the image to be flipped horizontally or vertically. This allows sprite-based animations with significantly less number of individual frames, as left can simply be the reverse of right.

```
const drawImage = (context, img, x, y, width, height, deg, flip, flop, center) => {
  context.save();

  if (typeof width === "undefined") width = img.width;
  if (typeof height === "undefined") height = img.height;
  if (typeof center === "undefined") center = false;

  if (center) {
    x -= width / 2;
    y -= height / 2;
  }

  let flipScale;
  let flopScale;
  context.translate(x + width / 2, y + height / 2);
  var rad = 2 * Math.PI - deg * Math.PI / 180;
  context.rotate(rad);
  if (flip) flipScale = -1; else flipScale = 1;
  if (flop) flopScale = -1; else flopScale = 1;
  context.scale(flipScale, flopScale);
  context.drawImage(img, -width / 2, -height / 2, width, height);
  context.restore();
}
```

**`Step`**

The following code handles each individual "step" of the game. It starts by checking if the game should be running. Afterwards, it takes every object on the board, updates the positions of the ones in motion, clears the screen, then renders the correct frame of that object's sprite. This is done about 15 times a second in this game.
```
export const step = () => {
  if (game.over || game.pause) {
    pauseScreen();
    return;
  }
  game.updatePos();
  game.ctx.clearRect(0, 0, game.canvas.width, game.canvas.height);
  game.draw();
  requestAnimFrame(function () {
    step();
  });
}
```

## Assets from:

Charles Barkley - Charles Barkley Shut up and Jam! by Infogrames North America, Inc.

Referees - WWF Royal Rumble by Acclaim Entertainment, Inc.

Shaq - Shaq Fu by Delphine Software Intl.

This game is not affiliated with Charles Barkley nor any other public person in any way.
