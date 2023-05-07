class Poop extends Phaser.GameObjects.Sprite{
	constructor(scene) {
		super(scene, x, y, "poop");
		var x = Phaser.Math.Between(0, config.width);
		var y = 0;
		super(scene, x, y, "poop");
		scene.projectiles.add(this);
		
		this.play("poop");
		scene.physics.world.enableBody(this);
		this.body.velocity.y = 50;
	}
	
	update() {
		if(this.y < 0) {
			this.destroy();
		}
	}
}