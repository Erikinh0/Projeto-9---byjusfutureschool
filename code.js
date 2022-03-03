var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["e9760d84-5e87-4feb-9caf-34aee5a976c3","7125dfb8-21b4-423e-a2aa-9bdc41b1f402","e946df13-88c2-4e0d-b9c0-ab76fc06f0e7","2309cf2d-12ca-464b-a138-2f7080561e98","3f3fa610-7560-4e37-9223-7768a542a417","27d0f5c7-c5bb-4236-a04c-3963d5e2e5ea","e6d52234-6e50-48a0-94f9-7b691b9fcb40","90dac629-7453-4533-bfb8-fede8181f69e"],"propsByKey":{"e9760d84-5e87-4feb-9caf-34aee5a976c3":{"name":"bow_1_copy","sourceUrl":"assets/api/v1/animation-library/gamelab/5sKup.MI8Lu9ITIm95UFy6MH26HN7qma/category_video_games/bow1.png","frameSize":{"x":310,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"5sKup.MI8Lu9ITIm95UFy6MH26HN7qma","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":310,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/5sKup.MI8Lu9ITIm95UFy6MH26HN7qma/category_video_games/bow1.png"},"7125dfb8-21b4-423e-a2aa-9bdc41b1f402":{"name":"bow_1","sourceUrl":null,"frameSize":{"x":235,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"v_i5gPe9dDFr7SMtq9sL9qEz27QJI2pU","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":235,"y":400},"rootRelativePath":"assets/7125dfb8-21b4-423e-a2aa-9bdc41b1f402.png"},"e946df13-88c2-4e0d-b9c0-ab76fc06f0e7":{"name":"arrow_1","sourceUrl":null,"frameSize":{"x":388,"y":77},"frameCount":1,"looping":true,"frameDelay":12,"version":"NWTR0i7CVv2G9PP13wdAvSgZoNbTaC3I","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":388,"y":77},"rootRelativePath":"assets/e946df13-88c2-4e0d-b9c0-ab76fc06f0e7.png"},"2309cf2d-12ca-464b-a138-2f7080561e98":{"name":"arrow_2","sourceUrl":null,"frameSize":{"x":388,"y":57},"frameCount":1,"looping":true,"frameDelay":12,"version":"MlKUddiKaCpkze_7AOYkay17vsb9fc_C","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":388,"y":57},"rootRelativePath":"assets/2309cf2d-12ca-464b-a138-2f7080561e98.png"},"3f3fa610-7560-4e37-9223-7768a542a417":{"name":"bow_2","sourceUrl":null,"frameSize":{"x":236,"y":390},"frameCount":1,"looping":true,"frameDelay":12,"version":"1uqWs7gPqlYgx_Quvhi6jhamkYwiM04K","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":236,"y":390},"rootRelativePath":"assets/3f3fa610-7560-4e37-9223-7768a542a417.png"},"27d0f5c7-c5bb-4236-a04c-3963d5e2e5ea":{"name":"p_1","sourceUrl":null,"frameSize":{"x":311,"y":338},"frameCount":1,"looping":true,"frameDelay":12,"version":"kMndxtA.EW.hD_3mLfr9zbaDGyEMjwWt","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":311,"y":338},"rootRelativePath":"assets/27d0f5c7-c5bb-4236-a04c-3963d5e2e5ea.png"},"e6d52234-6e50-48a0-94f9-7b691b9fcb40":{"name":"b_1","sourceUrl":"assets/api/v1/animation-library/gamelab/33483OYhVDVsX.GNODCgRASPM5bNdz.q/category_backgrounds/background_landscape05.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"33483OYhVDVsX.GNODCgRASPM5bNdz.q","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/33483OYhVDVsX.GNODCgRASPM5bNdz.q/category_backgrounds/background_landscape05.png"},"90dac629-7453-4533-bfb8-fede8181f69e":{"name":"flower_1","sourceUrl":"assets/api/v1/animation-library/gamelab/rGVvQNYG0eq9tSWRjzzuhTl5311HeCE5/category_icons/flower1.png","frameSize":{"x":288,"y":395},"frameCount":1,"looping":true,"frameDelay":2,"version":"rGVvQNYG0eq9tSWRjzzuhTl5311HeCE5","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":288,"y":395},"rootRelativePath":"assets/api/v1/animation-library/gamelab/rGVvQNYG0eq9tSWRjzzuhTl5311HeCE5/category_icons/flower1.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var fim = createSprite(200,30)
fim.setAnimation("flower_1")
fim.scale=0.12

var p = createSprite(200,350)
p.setAnimation("p_1")
p.scale=0.2

var a = createSprite(50,250)
a.setAnimation("bow_1")
a.scale=0.33

var ar = createSprite(350,100)
ar.setAnimation("bow_2")
ar.scale=0.3

var f = createSprite(50,250)
f.setAnimation("arrow_1")
f.scale=0.33

var fl = createSprite(340,100)
fl.setAnimation("arrow_2")
fl.scale=0.3

var mortes = 0
var wins = 0

var gameState = "serve"



function draw(){
  background("lightgreen")
  
  textSize(25) 
  stroke("black")
  strokeWeight(1)
  fill("red")
  text("Mortes: " + mortes,25,25);
  
  textSize(25) 
  stroke("black")
  strokeWeight(1)
  fill("brown")
  text("Vitórias: " + wins,260,25);
  
if(gameState == "serve"){
  p.x=200
  p.y=350
  f.x=50
  f.y=250
  fl.x=340
  fl.y=100
  mortes=0
  wins=0
  textSize(20)
  fill("green")
  stroke("black")
  text("Pressione SPACE Para Iniciar",90,200)
}
if(gameState == "play"){
  playerMoviment()
  if(wins == 3){
    gameState = "end"
  }
}
if (gameState == "end"){
  p.velocityX=0
  p.velocityY=0
  textSize(20)
  fill("red")
  stroke("black")
  text("Game Over!")
  textSize(20)
  text("Pressione R Para Recomeçar",90,200)
}


if (f.isTouching(p) || fl.isTouching(p) || a.isTouching(p) || ar.isTouching(p)){
  p.x=200
  p.y=360
  mortes = mortes+1
}

if (fim.isTouching(p)){
  p.x=200
  p.y=360
  wins = wins+1
}


createEdgeSprites()
f.bounceOff(edges) || fl.bounceOff(edges) || p.collide(edges)



  if (keyDown("space")) {
    gameState = "play"
    serve()
  }
  
  if(keyDown("r")){ 
    gameState = "serve"
  }

drawSprites()
}



function serve(){
f.velocityX = 7
fl.velocityX = -7
}


function playerMoviment()
{
  if(keyDown("up")) {
  p.velocityX = 0
  p.velocityY = -5
}
if(keyWentUp("up")) {
  p.velocityX = 0
  p.velocityY = 0
}


if(keyDown("down")) {
  p.velocityX = 0
  p.velocityY = 5
}
if(keyWentUp("down")) {
  p.velocityX = 0
  p.velocityY = 0
}


if(keyDown("right")) {
  p.velocityX = 5
  p.velocityY = 0
}
if(keyWentUp("right")) {
  p.velocityX = 0
  p.velocityY = 0
}


if(keyDown("left")) {
  p.velocityX = -5
  p.velocityY = 0
}
if(keyWentUp("left")) {
  p.velocityX = 0
  p.velocityY = 0
}
  }

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
