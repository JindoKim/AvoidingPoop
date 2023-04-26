class Scene1 extends Phaser.Scene {
	constructor() {
		super("bootGame");
	}


preload() {
	this.load.image("background1","assets/background1.jpg");
	this.load.image("circle","assets/circle.png")
	this.load.spritesheet("poop","assets/poop.png", {
		frameWidth: 15,
		frameHeight: 15
	})
}
	
create() {
	this.add.text(20, 20, "Loading game . . .");
	this.scene.start("playGame");
}
}