const gameSettings = {
	playerSpeed: 200,
}

const config = {
  type: Phaser.AUTO,
	mode: Phaser.Scale.FIT,
autoCenter: Phaser.Scale.CENTER_BOTH,
  width: 800,
  height: 600,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 0},
      debug: false
    }
  },
   scene: [Scene1, Scene2],
    classType: Phaser.GameObjects.Sprite,
    defaultKey: null,
    defaultFrame: null,
    active: true,
    maxSize: -1,
    runChildUpdate: false,
    createCallback: null,
    removeCallback: null,
    createMultipleCallback: null

};


const game = new Phaser.Game(config);