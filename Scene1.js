class Scene1 extends Phaser.Scene {
	constructor() {
		super("bootGame");
	}


preload() {
	this.load.image("background1","assets/city.jpg");
	this.load.image("fullscreen","assets/fullscreen.png");
	this.load.image("circle","assets/circle.png")
	this.load.spritesheet("poop","assets/poop.png", {
		frameWidth: 15,
		frameHeight: 15
	});
	this.load.spritesheet("player","assets/cat.png", {
		frameWidth: 22,
		frameHeight: 18
	});
}
	
create() {
	this.add.text(20, 20, "Loading game . . .");
	this.scene.start("playGame");
	
	const randomX = Phaser.Math.Between(0, config.width);		
		this.anims.create({
			key: "player",
			frames: this.anims.generateFrameNumbers("player"),
			frameRate: 20,
			repeat: -1
		})
	this.load.spritesheet("poop", "assets/poop.png", {
		frameWidth: 15,
		frameHeight: 15
	});
	this.anims.create({
		key: "poop_anim",
		frames: this.anims.generateFrameNumbers("poop"),
		frameRate: 20,
		repeat: -1
	});
		
}
}