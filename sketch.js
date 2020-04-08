var sun, mercury, venus, earth, mars, jupiter, saturn, uranus, neptune;


function setup() {
  createCanvas(500,500);

  frameRate(10);

sun = createSprite(250,250,60,60);
sun.addImage("sun.jpg",sun);
setCollider(circle,0,0,2);
sun.debug = true;

mercury = createSprite(270,200,10,10);
mercury.addImage("mercury.jpg",mercury);
setCollider(circle,0,0,2);
mercury.debug = true;


venus = createSprite(280,200,20,20);
venus.addImage("venus.jpg",venus);
setCollider(circle,0,0,2);
venus.debug = true;

earth = createSprite(300,200,25,25);
earth.addImage("earth.jpg",earth);
setCollider(circle,0,0,2);
earth.debug = true;

mars = createSprite(310,200,15,15);
mars.addImage("mars.jpg",mars);s
etCollider(circle,0,0,2);
mars.debug = true;

jupiter = createSprite(360,200,45,45);
jupiter.addImage("jupiter.jpg",jupiter);
setCollider(circle,0,0,2);
jupiter.debug = true;

saturn = createSprite(400,200,40,40);
saturn.addImage("saturn.jpg",saturn);
setCollider(circle,0,0,2);
saturn.debug = true;

uranus = createSprite(430,200,25,25);
uranus.addImage("uranus.jpg",uranus);
setCollider(circle,0,0,2);
uranus.debug = true;

neptune = createSprite(460,200,27,27);
neptune.addImage("neptune.jpg",neptune);
setCollider(circle,0,0,2);
neptune.debug = true;


}ś



function draw() {
background("black");  
if(framerate() <= 10){

sun = createSprite(250,250,60+10,60+10);

}
if(framerate() <= 20){

  sun = createSprite(250,250,60+10,60+10);
  
  }
  
  angleMode(DEGREES);
  translate(width / 2, height / 2);
  rotate(angle);

if(sun.isTouching(mercury)){

destroy(mercury);  

}

if(sun.isTouching(venus)){

  destroy(venus);  
  
  }
if(sun.isTouching(earth)){

  destroy(earth);  
    
    }
if(sun.isTouching(mars)){

  destroy(mars);  
      
      }
if(sun.isTouching(jupiter)){

  destroy(jupiter);  
        
        }
if(sun.isTouching(saturn)){

  destroy(saturn);  
          
          }
if(sun.isTouching(uranus)){

   destroy(uranus);  
            
            }
if(sun.isTouching(neptune)){

   destroy(neptune);  
              
              }



  drawSprites();
}