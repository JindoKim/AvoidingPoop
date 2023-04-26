const config = {
  type: Phaser.AUTO,
  width: 622,
  height: 345,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 6000},
      debug: false
    }
  },
   scene: [Scene1, Scene2]
};

const game = new Phaser.Game(config);