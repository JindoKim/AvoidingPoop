let spriteSpeed = 100; // 스프라이트가 떨어지는 속도
let spriteDirection = 1; // 스프라이트가 떨어지는 방향 (1: 아래쪽, -1: 위쪽)
let sprites; // 스프라이트 그룹

function preload() {
  this.load.spritesheet('spritesheet', 'assets/poop.png', {
    frameWidth: 15,
    frameHeight: 15
  });
}

function create() {
  sprites = this.add.group(); // 스프라이트 그룹 생성

  // 스프라이트 생성
  let sprite = sprites.create(0, 0, 'spritesheet', 0);
  sprite.setOrigin(0.5, 0.5); // 스프라이트의 중심을 기준으로 위치 조정

  // 스프라이트 위치 설정
  let x = Phaser.Math.Between(0, this.game.config.width);
  let y = Phaser.Math.Between(-100, -50);
  sprite.setPosition(x, y);

  // 스프라이트 속도와 방향 설정
  sprite.speed = spriteSpeed;
  sprite.direction = spriteDirection;
}

function update() {
  // 모든 스프라이트들에 대해 반복문 실행
  sprites.getChildren().forEach(function(sprite) {
    // 스프라이트의 위치를 속도와 방향에 따라 업데이트
    sprite.y += sprite.speed * sprite.direction * this.time.deltaTime / 1000;

    // 스프라이트가 화면 아래쪽으로 벗어나면 제거
    if (sprite.y > this.game.config.height + 50) {
      sprite.destroy();
    }
  }, this);
}

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  backgroundColor: '#2d2d2d',
  scene: {
    preload: preload,
    create: create,
    update: update
  }
};

const game = new Phaser.Game(config);
