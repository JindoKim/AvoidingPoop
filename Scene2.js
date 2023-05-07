class Scene2 extends Phaser.Scene{
	constructor() {
		super("playGame");
	}
	
	create() {
		
		
		
		const randomX = Phaser.Math.Between(0, config.width);
		this.background1 = this.add.image(0,0, "background1");
		this.background1.setOrigin(0,0);
		this.circle = this.add.image(config.width/2, config.height/2, "circle");
		
		
			
		//전체화면
		const button = this.add.image(800 - 16, 16, 'ullscreen', 0).setOrigin(1, 0).setInteractive();

        button.on('pointerup', function ()
        {

            if (this.scale.isFullscreen)
            {
                button.setFrame(0);

                this.scale.stopFullscreen();
            }
            else
            {
                button.setFrame(1);

                this.scale.startFullscreen();
            }

        }, this);


        const FKey = this.input.keyboard.addKey('F');

        FKey.on('down', function ()
        {

            if (this.scale.isFullscreen)
            {
                button.setFrame(0);
                this.scale.stopFullscreen();
            }
            else
            {
                button.setFrame(1);
                this.scale.startFullscreen();
            }

        }, this);
		
		
		this.player = this.physics.add.sprite(config.width / 2 - 8, config.height, "player");
		this.player.play("player");
		this.cursorKeys = this.input.keyboard.createCursorKeys();
		this.player.setCollideWorldBounds(true);
		
		this.projectiles = this.add.group();
	}
	update() {
		
		
		this.movePlayerManager();
		
		for(let i = 0; i< this.projectiles.getChildren().length; i++) {
			let poop = this.projectiles.getChildren() [i];
			poop.update();
		}
	}
	
	createPoop() {
			var poop = new Poop(this);
		}
	//플레이어깐트롤러
	movePlayerManager() {
		if(this.cursorKeys.left.isDown) {
			this.player.setVelocityX(-gameSettings.playerSpeed);
		}else if(this.cursorKeys.right.isDown) {
			this.player.setVelocityX(gameSettings.playerSpeed);
		}
		//움직임 멈추기
		else if(this.cursorKeys.left.isUp) {
			this.player.setVelocityX(0);
		}else if(this.cursorKeys.right.isUp) {
			this.player.setVelocityX(0);
		}
		if(this.cursorKeys.down.isDown) {
		this.createPoop();
		console.log("눌림");
	}
	}
	
	
}

