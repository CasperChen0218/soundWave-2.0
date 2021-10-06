
var mySound;
var slider; 

function preload(){
    mySound=
    loadSound("FRAUD! - JUST4FUN (prod. Wendigo).mp3");
  
  }

function setup(){
  
 
  createCanvas(windowWidth,windowHeight);
  background(0);
  ftt=new p5.FFT();
  mySound.play()
  mySound.loop()
  
  slider = createSlider(0, 1, 0.2, 0.2); 
}

function draw(){

  
  background(0);
  
  push();
  circle(windowWidth/2,windowHeight/2,400);
  
  pop();
  
  
  
  
  var waveform=ftt.waveform();
  
  
  
  noFill(255);
  stroke(0,199,140);
  strokeWeight(2);

  
beginShape();
  for(var i=0;i<waveform.length;i++){
    var x=map(i,0,waveform.length,0,width);
    var y=map(waveform[i],-1,1,0,height);
    vertex(x,y);
    }
  
endShape();
  
  mySound.setVolume(slider.value());
  
  

}
//function mouseClicked(){
  
  //mySound.stop();
  //mySound.play();
//}
  






