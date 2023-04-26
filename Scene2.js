class Scene2 extends Phaser.Scene{
	constructor() {
		super("playGame");
	}
	
	create() {
		const randomX = Phaser.Math.Between(0, config.width);
		this.background1 = this.add.image(0,0, "background1");
		this.background1.setOrigin(0,0);
		this.circle = this.add.image(config.width/2, config.height/2, "circle");
		
		this.anims.create({
			key: "poop_anim",
			frames: this.anims.generateFrameNumbers("poop"),
			frameRate:20,
			repeat: -1
		});
		
		this.poop  = this.add.sprite(randomX, 0, "poop")
		this.poop.setInteractive();
		
		this.add.text(20,20,"Playing game", {
			font: "25px Arial",
			fill: "yellow"
		});
	}
	movePoop(poop, speed) {
		poop.y += speed;
		if(poop.y > config.height) {
			this.resetPoopPos(poop);
		}
	}
	
	resetPoopPos(poop) {
		poop.y = 0;
		const randomX = Phaser.Math.Between(0, config.width);
		poop.x = randomX;
	}
	
	update() {
		this.movePoop(this.poop, 1);
	}
	
}