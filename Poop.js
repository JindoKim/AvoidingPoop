class Poop extends Phaser.GameObjects.Sprite{
	constructor(scene) {
		
		var x = Phaser.Math.Between(0, config.width);
		var y = 0;
		
		super(scene, x, y, "poop");
		scene.add.existing(this);
		scene.projectiles.add(this);
		
		this.play("poop_anim");
		scene.physics.world.enableBody(this);
		this.body.velocity.y = Phaser.Math.Between(180, 200);
	}
	
	update() {
		if(this.y < 0) {
			this.destroy();
		}
	}
}