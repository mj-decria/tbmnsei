var trex, trex_running, edges;
var groundImage;
var CHAOZINDABARATATONTA;
var CHAOZINDOCHADESUMICO;
var NUVENZINHADATHAIS,ImagemDaNuvemDaThaisDiCria;
var cactun1,cactun2,cactun3,cactun4,cactun5,cactun6;
var VOTEQUEENFAIXAMEUDEDIN;
var VAICHUVECORRENEGADA;
var TAFICANUCHEIO;
var PLAY = 1;
var END = 0;
var TENHOCARADEBALANCAAGORA;
function preload(){
  ImagemDaNuvemDaThaisDiCria = loadImage("NUVEM DA COCADA.png")
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  groundImage = loadImage("ground2.png");
  cactun1 = loadImage("obstacle1.png");
  cactun2 = loadImage("obstacle2.png");
  cactun3 = loadImage("obstacle3.png");
  cactun4 = loadImage("obstacle4.png");
  cactun5 = loadImage("obstacle5.png");
  cactun6 = loadImage("obstacle6.png");
}

function setup(){
  createCanvas(600,200);
  VOTEQUEENFAIXAMEUDEDIN = new Group();
  VAICHUVECORRENEGADA = new Group();
  TAFICANUCHEIO = 0
  //criando o trex
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  edges = createEdgeSprites();
  
  //adicione dimensão e posição ao trex
  trex.scale = 0.5;
  trex.x = 50
  CHAOZINDABARATATONTA = createSprite(200,180,400,20);
  CHAOZINDABARATATONTA.addImage(groundImage);
  CHAOZINDABARATATONTA.x = CHAOZINDABARATATONTA.width/2
  //criando o chao dopado
CHAOZINDOCHADESUMICO = createSprite(200,190,400,10);
CHAOZINDOCHADESUMICO.visible = false;
}


function draw(){
  //definir a cor do plano de fundo 
  background("white");
  text("PAÇOCA: "+TAFICANUCHEIO,500,50);
  
  if(TENHOCARADEBALANCAAGORA === PLAY){
 CHAOZINDABARATATONTA.velocityX = -2;
 TAFICANUCHEIO = TAFICANUCHEIO + Math.round(frameCount/60);
 
  if (CHAOZINDABARATATONTA.x<0){
    CHAOZINDABARATATONTA.x = CHAOZINDABARATATONTA.width/2
  }
   if(keyDown("space")&& trex.y>=100){
    trex.velocityY = -10;
  }
  trex.velocityY = trex.velocityY + 0.5;
 NUVENZINHADASCOCADA();
  AIMEUDEDO();
if(VOTEQUEENFAIXAMEUDEDIN.isTouching(trex)){
  TENHOCARADEBALANCAAGORA = END;
}
}
  else if(TENHOCARADEBALANCAAGORA === END){
CHAOZINDABARATATONTA.velocityX = 0;
VOTEQUEENFAIXAMEUDEDIN.setVelocityXEach(0)
VAICHUVECORRENEGADA.setVelocityXEach(0)
  }
  
  //pular quando tecla de espaço for pressionada
 
  
  
 //impedir que o trex caia
  trex.collide(CHAOZINDOCHADESUMICO);
 
  drawSprites();
}
function NUVENZINHADASCOCADA(){
  if (frameCount%60===0){

 var NUVENZINHADATHAIS = createSprite(600,100,40,10);
 NUVENZINHADATHAIS.velocityX = -3;
NUVENZINHADATHAIS.addImage(ImagemDaNuvemDaThaisDiCria);
NUVENZINHADATHAIS.scale = 0.8;
NUVENZINHADATHAIS.y = Math.round(random(10,60))
NUVENZINHADATHAIS.depth = trex.depth;
trex.depth = trex.depth +1
NUVENZINHADATHAIS.lifetime = 200;
VAICHUVECORRENEGADA.add(NUVENZINHADATHAIS);
  }
}
function AIMEUDEDO(){
  if (frameCount%60===0){
var CACTUNBEBACO = createSprite(400,165,10,40);
CACTUNBEBACO.velocityX = -6
var ARMAZENARNUMEROSQUEOCOMPUTADORNCONSEGUIUPORSERRETARDADOIGUALEU = Math.round(random(1,6));
switch(ARMAZENARNUMEROSQUEOCOMPUTADORNCONSEGUIUPORSERRETARDADOIGUALEU){
  case 1:
  CACTUNBEBACO.addImage(cactun1);
  break;
  case 2:
  CACTUNBEBACO.addImage(cactun2);
  break;
  case 3:
  CACTUNBEBACO.addImage(cactun3);
  break;
  case 4:
  CACTUNBEBACO.addImage(cactun4);
  break;
  case 5:
  CACTUNBEBACO.addImage(cactun5);
  break;
  case 6:
    CACTUNBEBACO.addImage(cactun6);
    break;
default: break;
}
CACTUNBEBACO.scale = 0.5
CACTUNBEBACO.lifetime = 300;
VOTEQUEENFAIXAMEUDEDIN.add(CACTUNBEBACO);
  }
}