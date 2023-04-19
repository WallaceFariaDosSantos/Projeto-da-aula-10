var sea,ship, ship2;
var seaImg,shipImg1, shipImg2;

function preload(){
  // Animação do navio e imagem do mar
  shipImg1 = loadAnimation("ship-1.png","ship-2.png");
  shipImg2 = loadImage("ship-2.png");
  shipImg3 = loadImage("ship-1.png");
  seaImg = loadImage("sea.png");
}

function setup(){
  createCanvas(400,400);
  background("blue");

  // Movendo o fundo
  sea=createSprite(400,200);
  sea.addImage(seaImg);
  sea.velocityX = -5;
  sea.scale=0.3;

  
  ship = createSprite(130,200,30,30);
  ship.addAnimation("movingShip",shipImg1);
  ship.scale =0.25;
  
}

function draw() {
  background(0);
  sea.velocityX = -3;

  // Redefinição do fundo
  if(sea.x < 0){
    sea.x = sea.width/8;
  }

  // Barco e mar parar de se mover
  if(keyIsDown(DOWN_ARROW)){
    ship.destroy();
    ship2 = createSprite(130,200,30,30);
    ship2.addImage(shipImg2);
    ship2.scale = 0.25;
    sea.velocityX = 0;
  }

  drawSprites();
}





