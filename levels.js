// Levels

const tilesize = 32;

const level1 = {
  mapMain: [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  , 1],
    [1,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  , 1],
    [1,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  , 1],
    [1,  ,  ,  ,  ,  ,  ,  ,  ,  , ,   ,  ,  , 1],
    [1, 8,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  , 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,  ,  , 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,  ,  , 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,  , 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,  , 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  ],
  
  mapAlt: [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  , 1],
    [1,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  , 1],
    [1,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  , 1],
    [1,  ,  ,  ,  ,  ,  ,  ,  ,  , ,   ,  ,  , 1],
    [1, 8,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  , 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,  ,  , 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,  ,  , 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,  , 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,  , 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  ],

  keys: 0
}

const level2 = {
  mapMain: [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1,  ,  , 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
    [2, 1,  ,  , 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
    [2, 1,  ,  , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [2, 1,  ,  , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  , 1],
    [1, 1,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  , 1, 1],
    [1, 1,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  , 2, 1],
    [1, 1,  ,  ,  ,  ,  ,  ,  ,  , ,   ,  , 2, 1],
    [1, 1,  ,  ,  ,  ,  ,  ,  ,  ,  ,  , 2, 1, 1],
    [1, 1,  ,  ,  ,  ,  ,  ,  ,  ,  , 1, 1, 2, 1],
    [1, 1, 2, 2, 2, 2, 2, 2, 2, 2,  ,  ,  ,  , 1],
    [1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2,  ,  ,  , 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,  ,  , 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  ],
  
  mapAlt: [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1,  ,  , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1,  ,  , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1,  ,  , 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
    [1, 1,  ,  , 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
    [1, 1,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  , 8, 1],
    [1, 1,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  , 2, 1],
    [1, 1,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  , 1, 1],
    [1, 1,  ,  ,  ,  ,  ,  ,  ,  , ,   ,  , 1, 1],
    [1, 1,  ,  ,  ,  ,  ,  ,  ,  ,  ,  , 1, 2, 1],
    [2, 1,  ,  ,  ,  ,  ,  ,  ,  ,  , 2, 1, 1, 1],
    [2, 1, 1, 1, 1, 1, 1, 1, 1, 1,  ,  ,  ,  , 1],
    [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,  ,  ,  , 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,  ,  , 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  ],

  keys: 0
}

const level3 = {
  mapMain: [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  , 1],
    [1,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  , 1],
    [1,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  , 1],
    [1,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  , 1],
    [1, 2, 2, 2,  ,  ,  ,  ,  ,  ,  ,  ,  ,  , 1],
    [1,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  , 1],
    [1,  ,  ,  , 1,  , 1,  ,  ,  ,  ,  ,  ,  , 1],
    [1,  ,  ,  ,  ,  ,  ,  , 1,  , ,   ,  ,  , 1],
    [1,  ,  ,  ,  ,  ,  ,  , 1,  ,  ,  ,  ,  , 1],
    [1,  ,  ,  ,  ,  ,  ,  ,  ,  , 1,  ,  ,  , 1],
    [1,  ,  ,  ,  ,  ,  ,  ,  ,  , 1,  ,  ,  , 1],
    [1,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  , 1,  , 1],
    [1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1,  , 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  ],
  
  mapAlt: [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  , 1],
    [1,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  , 1],
    [1,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  , 1],
    [1, 8,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  , 1],
    [1, 1, 1, 1,  ,  ,  ,  ,  ,  ,  ,  ,  ,  , 1],
    [1,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  , 1],
    [1,  ,  ,  , 2,  , 2,  ,  ,  ,  ,  ,  ,  , 1],
    [1,  ,  ,  ,  ,  ,  ,  , 2,  , ,   ,  ,  , 1],
    [1,  ,  ,  ,  ,  ,  ,  , 2,  ,  ,  ,  ,  , 1],
    [1,  ,  ,  ,  ,  ,  ,  ,  ,  , 2,  ,  ,  , 1],
    [1,  ,  ,  ,  ,  ,  ,  ,  ,  , 2,  ,  ,  , 1],
    [1,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  , 1,  , 1],
    [1, 5, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1,  , 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  ],
  
  keys: 1
}

const level4 = {
  mapMain: [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,  , 1],
    [1,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  , 1],
    [1,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  , 8, 1],
    [1,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  , 2, 1],
    [1,  ,  ,  ,  ,  ,  ,  ,  ,  ,  , 1,  ,  , 1],
    [1,  ,  ,  ,  ,  ,  ,  ,  ,  ,  , 2,  ,  , 1],
    [1,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  , 1],
    [1,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  , 2, 1],
    [1,  ,  ,  ,  ,  ,  ,  ,  ,  , ,   ,  , 1, 1],
    [1,  ,  ,  ,  ,  ,  , 4,  ,  ,  ,  ,  ,  , 1],
    [1,  ,  , 1, 1, 1,  , 2, 2, 2, 2, 2, 2, 2, 1],
    [1,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  , 1],
    [1, 2,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  , 1],
    [1, 2,  ,  , 5,  ,  ,  ,  ,  ,  ,  ,  ,  , 1],
    [1, 1, 3, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  ],
  
  mapAlt: [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,  , 1],
    [1,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  , 1],
    [1,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  , 1],
    [1,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  , 1, 1],
    [1,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  , 1],
    [1,  ,  ,  ,  ,  ,  ,  ,  ,  ,  , 2,  ,  , 1],
    [1,  ,  ,  ,  ,  ,  ,  ,  ,  ,  , 1,  ,  , 1],
    [1,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  , 1, 1],
    [1,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  , 2, 1],
    [1,  ,  ,  ,  ,  ,  , 3,  ,  ,  ,  ,  ,  , 1],
    [1,  ,  , 2, 2, 2,  , 1, 1, 1, 1, 1, 1, 1, 1],
    [1,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  , 1],
    [1, 1,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  , 1],
    [1, 1,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  , 1],
    [1, 1, 3, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  ],

  keys: 1
}


/*  Tiles
1 = Walkable;
2 = Walkable on background;
3 = Lava;
4 = Lava on background;
5 = key;
6 = key on background;
7 = key on background with lava;
8 = exit portal;
*/

// This fuction checks every value of the 2D array and returns an image
function drawMap(m){

  for (let i = 0; i < m.length; i++) {
    for (let j = 0; j < m[i].length; j++) {

      if (m[i][j] === 1) {
        let tile = {
          x: tilesize * [j],
          y: tilesize * [i],
          width: tilesize,
          height: tilesize
        }
        ctx.fillStyle = "#505050";
        ctx.fillRect(tile.x, tile.y, tile.width, tile.height);
        tileCollision(tile);
      }

      if (m[i][j] === 2) {
        let tile = {
          x: tilesize * [j],
          y: tilesize * [i],
          width: tilesize,
          height: tilesize
        }
        ctx.fillStyle = "#262626";
        ctx.fillRect(tile.x, tile.y, tile.width, tile.height);
      }

      if (m[i][j] === 3) {
        let tile = {
          x: tilesize * [j],
          y: tilesize * [i] + 15,
          width: tilesize,
          height: tilesize - 15
        }
        ctx.fillStyle = "rgb(255,0,0)"
        ctx.fillRect(tile.x, tile.y, tile.width, tile.height);
        if (player.itemCollision(tile)) {
          player.respawn();
          checkLevel().keys++;
        }
      }

      if (m[i][j] === 4) {
        let tile = {
          x: tilesize * [j],
          y: tilesize * [i] + 15,
          width: tilesize,
          height: tilesize - 15
        }
        ctx.fillStyle = "rgba(255,0,0,0.2)"
        ctx.fillRect(tile.x, tile.y, tile.width, tile.height);
      }

      if (m[i][j] === 5) {
        if (checkLevel().keys > 0){
          let tile = {
            x: tilesize * [j] + 10,
            y: tilesize * [i] + 15,
            width: tilesize - 20,
            height: tilesize - 15
          }
          ctx.fillStyle = "FloralWhite";
          ctx.fillRect(tile.x, tile.y, tile.width, tile.height);
          if (player.itemCollision(tile)) checkLevel().keys--;
        }
      }

      if (m[i][j] === 8) {
        if (checkLevel().keys === 0){ // If no keys are present, the exit portal will open
          let tile = {
            x: tilesize * [j] + 10,
            y: tilesize * [i] + 6,
            width: tilesize - 20,
            height: tilesize - 6
          }
          ctx.fillStyle = "green";
          ctx.fillRect(tile.x, tile.y, tile.width, tile.height);
          if (player.itemCollision(tile)) player.nextLevel();
        }
      }
    }
  }
}

// Provides level to display and allows the player to change between the main map and the alternative one
let levelCount = 1;
let currentMap = checkLevel().mapMain;

function checkLevel(){
  if (levelCount === 1) return level1;
  if (levelCount === 2) return level2;
  if (levelCount === 3) return level3;
  if (levelCount === 4) return level4;
}